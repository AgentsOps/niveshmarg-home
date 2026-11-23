/* Shared motion + widgets for the Niveshmarg Edge site pages. window.NMSite.boot(root, {skin, motion}) -> {stop} */
(function () {
  var SKINS = {
    'Indigo sky': ['#4f46e5', '#ecebff', '99,102,241', '#a5b4fc'],
    'Ocean': ['#0e7490', '#dff4f9', '14,165,200', '#67e8f9'],
    'Forest': ['#15803d', '#e2f5e9', '34,160,90', '#86efac'],
    'Saffron': ['#b45309', '#fcefd9', '230,140,30', '#fcd34d']
  };
  function boot(root, opts) {
    opts = opts || {};
    var cleanup = [], alive = true, mo = opts.motion || 'Full';
    var still = mo === 'Off' || matchMedia('(prefers-reduced-motion: reduce)').matches, amp = mo === 'Subtle' ? 0.4 : 1;
    var sk = SKINS[opts.skin] || SKINS['Indigo sky'], acc = sk[0], accRgb = sk[2];
    ['--acc', '--acc-soft', '--acc-rgb', '--acc-lite'].forEach(function (k, i) { root.style.setProperty(k, sk[i]); });
    var arr = function (l) { return Array.prototype.slice.call(l); };
    var q = function (s) { return arr(root.querySelectorAll(s)); };
    var anim = function (el, kf, o) { var a = el.animate(kf, o); cleanup.push(function () { a.cancel(); }); return a; };
    var later = function (fn, ms) { var id = setTimeout(function () { if (alive) fn(); }, ms); cleanup.push(function () { clearTimeout(id); }); };
    var every = function (fn, ms) { var id = setInterval(function () { if (alive) fn(); }, ms); cleanup.push(function () { clearInterval(id); }); };
    var setText = function (el, t) { if (el && el.firstChild) el.firstChild.nodeValue = t; };
    var on = function (el, ev, fn) { el.addEventListener(ev, fn); cleanup.push(function () { el.removeEventListener(ev, fn); }); };
    var paintBtn = function (b, active, bg, fg) {
      if (active) { b.style.setProperty('--tb', bg); b.style.setProperty('--tc', fg); } else { b.style.removeProperty('--tb'); b.style.removeProperty('--tc'); }
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    };
    var mono = function (sz, w) { return (w || 500) + ' ' + sz + "px 'JetBrains Mono',monospace"; };
    var inr = function (v, d) { return v.toLocaleString('en-IN', { minimumFractionDigits: d, maximumFractionDigits: d }); };
    var plays = new Map();
    var sized = function (cv, ctx, cb) {
      var f = function () { var d = Math.min(2, window.devicePixelRatio || 1), w = cv.clientWidth, h = cv.clientHeight; if (!w || !h) return; cv.width = Math.round(w * d); cv.height = Math.round(h * d); ctx.setTransform(d, 0, 0, d, 0, 0); cb(w, h); };
      var ro = new ResizeObserver(f); ro.observe(cv); f(); cleanup.push(function () { ro.disconnect(); });
    };

    /* scale-to-fit fixed-width mocks */
    (function () {
      var ro = new ResizeObserver(function (es) { es.forEach(function (e) {
        var box = e.target, inner = box.firstElementChild, w = +box.dataset.fit, h = +box.dataset.fitH;
        var s = Math.min(1, Math.max(+box.dataset.fitMin || 0.4, box.clientWidth / w));
        inner.style.transform = 'scale(' + s + ')'; box.style.height = Math.round(h * s) + 'px';
      }); });
      q('[data-fit]').forEach(function (b) { ro.observe(b); }); cleanup.push(function () { ro.disconnect(); });
    })();

    /* tabs: [data-tabs] > [data-tab] buttons + [data-panel] blocks */
    q('[data-tabs]').forEach(function (g) {
      var btns = arr(g.querySelectorAll('[data-tab]')), panels = arr(g.querySelectorAll('[data-panel]'));
      var show = function (id) { btns.forEach(function (b) { paintBtn(b, b.dataset.tab === id, 'var(--acc,#4f46e5)', '#fff'); }); panels.forEach(function (p) { p.style.display = p.dataset.panel === id ? '' : 'none'; }); };
      btns.forEach(function (b) { on(b, 'click', function () { show(b.dataset.tab); }); });
      if (btns[0]) show(btns[0].dataset.tab);
      cleanup.push(function () { panels.forEach(function (p) { p.style.display = ''; }); });
    });

    function candles(cv) {
      var ctx = cv.getContext('2d'), pxEl = root.querySelector('[data-px]'), chEl = root.querySelector('[data-chg]'), ohlcEl = root.querySelector('[data-ohlc]');
      var start = +cv.dataset.start || 24050, dp = start < 5000 ? 1 : 0, flags = { ema: true, ob: true, trades: true, vol: true };
      var W = 0, H = 0, s = 11, vol = +cv.dataset.vol || 46, cs = [], ref = 0, base = 0, slide = 0, lo = 0, hi = 0, goal = 0, ob = null, vis = true, mouse = null;
      var rnd = function () { return (s = (s * 16807) % 2147483647) / 2147483647; };
      var pick = function () { var L = cs.length, i = L - 30; for (var j = L - 36; j < L - 22; j++) if (cs[j].c < cs[j].o && cs[j + 1].c > cs[j + 1].o) { i = j; break; } ob = { i: base + i, top: cs[i].o, bot: cs[i].l }; };
      var build = function (seed, v) {
        s = seed; vol = v; cs = []; var p = start;
        for (var i = 0; i < 150; i++) { var c = p + (rnd() - 0.44) * vol; cs.push({ o: p, c: c, h: Math.max(p, c) + rnd() * vol * 0.43, l: Math.min(p, c) - rnd() * vol * 0.43, v: 0.25 + rnd() * 0.75 }); p = c; }
        ref = cs[70].c; base = 0; slide = 0; lo = 0; hi = 0; goal = p; pick();
      };
      var ema = function (n) { var k = 2 / (n + 1), e = cs[0].c; return cs.map(function (c) { return (e = c.c * k + e * (1 - k)); }); };
      var hud = function () {
        var c = cs[cs.length - 1].c, g = (c / ref - 1) * 100; setText(pxEl, inr(c, 2)); setText(chEl, (g >= 0 ? '+' : '−') + Math.abs(g).toFixed(2) + '%'); if (chEl) chEl.style.color = g >= 0 ? '#2fbf71' : '#f0556a';
      };
      var draw = function () {
        if (!W) return; ctx.clearRect(0, 0, W, H);
        var padR = 62, padT = 12, padB = 8, L = cs.length, n = Math.max(22, Math.min(74, Math.floor((W - padR) / 12))), st = L - n, cw = (W - padR) / n, ch = H - padT - padB, mn = Infinity, mx = -Infinity, j;
        for (j = st; j < L; j++) { mn = Math.min(mn, cs[j].l); mx = Math.max(mx, cs[j].h); }
        var pad = (mx - mn) * 0.14; mn -= pad * 2.2; mx += pad;
        if (still || !lo) { lo = mn; hi = mx; } else { lo += (mn - lo) * 0.08; hi += (mx - hi) * 0.08; }
        var y = function (v) { return padT + (hi - v) / (hi - lo) * ch; }, x = function (k) { return (k - st + slide) * cw + cw / 2; };
        ctx.lineWidth = 1; ctx.font = mono(10); ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
        for (var g = 1; g < 5; g++) { var gv = lo + (hi - lo) * g / 5, gy = Math.round(y(gv)) + 0.5; ctx.strokeStyle = 'rgba(255,255,255,.05)'; ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W - padR, gy); ctx.stroke(); ctx.fillStyle = '#8e8cb3'; ctx.fillText(gv.toFixed(dp), W - padR + 10, gy); }
        ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W - padR, H); ctx.clip();
        if (ob.i - base < st + 2) pick();
        if (flags.ob) {
          var ox = x(ob.i - base) - cw / 2, oy = y(ob.top), oh = Math.max(6, y(ob.bot) - oy);
          ctx.fillStyle = 'rgba(47,191,113,.11)'; ctx.fillRect(ox, oy, W, oh); ctx.fillStyle = 'rgba(47,191,113,.55)'; ctx.fillRect(ox, oy, W, 1);
          ctx.fillStyle = '#7fe0aa'; ctx.fillText('Bull OB', ox + 6, oy - 8);
        }
        if (flags.vol) for (j = st - 1; j < L; j++) { var vc = cs[j]; ctx.fillStyle = vc.c >= vc.o ? 'rgba(47,191,113,.22)' : 'rgba(240,85,106,.22)'; var vh = vc.v * ch * 0.15; ctx.fillRect(x(j) - cw * 0.32, H - vh, cw * 0.64, vh); }
        if (flags.ema) [[ema(20), '#8b8fff'], [ema(50), '#f2a93b']].forEach(function (p) { ctx.strokeStyle = p[1]; ctx.lineWidth = 1.5; ctx.beginPath(); for (var k = st - 1; k < L; k++) { if (k === st - 1) ctx.moveTo(x(k), y(p[0][k])); else ctx.lineTo(x(k), y(p[0][k])); } ctx.stroke(); });
        for (j = st - 1; j < L; j++) { var c = cs[j], col = c.c >= c.o ? '#2fbf71' : '#f0556a', xx = x(j); ctx.strokeStyle = col; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(Math.round(xx) + 0.5, y(c.h)); ctx.lineTo(Math.round(xx) + 0.5, y(c.l)); ctx.stroke(); ctx.fillStyle = col; var a = y(Math.max(c.o, c.c)), b = y(Math.min(c.o, c.c)); ctx.fillRect(xx - cw * 0.32, a, cw * 0.64, Math.max(1, b - a)); }
        var mj = ob.i - base + 3;
        if (flags.trades && mj >= st && mj < L) { var tx = x(mj), ty = y(cs[mj].l) + 10; ctx.fillStyle = '#2fbf71'; ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(tx - 5, ty + 8); ctx.lineTo(tx + 5, ty + 8); ctx.closePath(); ctx.fill(); ctx.font = mono(9, 600); ctx.textAlign = 'center'; ctx.fillText('#1 LONG', tx, ty + 17); ctx.textAlign = 'left'; ctx.font = mono(10); }
        ctx.restore();
        var k = cs[L - 1], yl = Math.round(y(k.c)) + 0.5, kc = k.c >= k.o ? '#2fbf71' : '#f0556a';
        ctx.setLineDash([3, 4]); ctx.strokeStyle = kc; ctx.beginPath(); ctx.moveTo(0, yl); ctx.lineTo(W - padR, yl); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = kc; ctx.fillRect(W - padR, yl - 9, padR, 18); ctx.fillStyle = '#0d0c22'; ctx.font = mono(10, 600); ctx.fillText(k.c.toFixed(dp ? 2 : 2), W - padR + 6, yl);
        var hov = cs[L - 1];
        if (mouse && mouse.x < W - padR) {
          var hi2 = Math.max(st, Math.min(L - 1, st + Math.round((mouse.x - cw / 2) / cw - slide))); hov = cs[hi2];
          var hx = Math.round(x(hi2)) + 0.5, hy = Math.round(mouse.y) + 0.5;
          ctx.setLineDash([4, 4]); ctx.strokeStyle = 'rgba(255,255,255,.4)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(hx, 0); ctx.lineTo(hx, H); ctx.moveTo(0, hy); ctx.lineTo(W - padR, hy); ctx.stroke(); ctx.setLineDash([]);
          ctx.fillStyle = '#eeedfb'; ctx.fillRect(W - padR, hy - 9, padR, 18); ctx.fillStyle = '#0d0c22'; ctx.fillText((hi - (mouse.y - padT) / ch * (hi - lo)).toFixed(2), W - padR + 6, hy);
        }
        if (ohlcEl) setText(ohlcEl, 'O ' + inr(hov.o, 2) + '  H ' + inr(hov.h, 2) + '  L ' + inr(hov.l, 2) + '  C ' + inr(hov.c, 2));
      };
      build(+cv.dataset.seed || 11, vol);
      sized(cv, ctx, function (w, h) { W = w; H = h; draw(); });
      on(cv, 'pointermove', function (e) { var r = cv.getBoundingClientRect(); mouse = { x: e.clientX - r.left, y: e.clientY - r.top }; if (still) draw(); });
      on(cv, 'pointerleave', function () { mouse = null; if (still) draw(); });
      q('[data-flag]').forEach(function (b) {
        var k = b.dataset.flag, paint = function () { paintBtn(b, flags[k], 'rgba(' + accRgb + ',.4)', '#fff'); };
        on(b, 'click', function () { flags[k] = !flags[k]; paint(); draw(); }); paint();
      });
      var tfs = q('[data-tf]');
      tfs.forEach(function (b) {
        on(b, 'click', function () { tfs.forEach(function (o) { paintBtn(o, o === b, 'var(--acc,#4f46e5)', '#fff'); }); build(+b.dataset.seed || 11, +b.dataset.vol || vol); hud(); draw(); });
        paintBtn(b, 'on' in b.dataset, 'var(--acc,#4f46e5)', '#fff');
      });
      hud();
      if (still) return;
      var io = new IntersectionObserver(function (e) { vis = e[0].isIntersecting; }); io.observe(cv); cleanup.push(function () { io.disconnect(); });
      var lastT = 0, tk = 0;
      var frame = function (t) {
        if (!alive) return; requestAnimationFrame(frame); if (!vis) return;
        var k = cs[cs.length - 1]; k.c += (goal - k.c) * 0.12; k.h = Math.max(k.h, k.c); k.l = Math.min(k.l, k.c); slide *= 0.88; if (slide < 0.002) slide = 0;
        if (t - lastT > 480) { lastT = t; tk++; if (tk % 7 === 0) { cs.push({ o: k.c, c: k.c, h: k.c, l: k.c, v: 0.25 + rnd() * 0.75 }); cs.shift(); base++; slide = 1; goal = k.c + (rnd() - 0.44) * vol * 0.65; } else goal = k.c + (rnd() - 0.46) * vol * 0.6; hud(); }
        draw();
      };
      requestAnimationFrame(frame);
    }

    function equity(cv) {
      var ctx = cv.getContext('2d'), W = 0, H = 0, prog = still ? 1 : 0, s = +cv.dataset.seed || 5, N = 130, a = [100], b = [100];
      var rnd = function () { return (s = (s * 16807) % 2147483647) / 2147483647; };
      for (var i = 1; i < N; i++) { a.push(a[i - 1] * (1 + (rnd() - 0.44) * 0.02)); b.push(b[i - 1] * (1 + (rnd() - 0.48) * 0.026)); }
      var fix = function (v, end) { var d = end - v[N - 1]; return v.map(function (z, k) { return z + d * k / (N - 1); }); };
      var A = fix(a, +cv.dataset.a || 124.5), B = fix(b, +cv.dataset.b || 111.2), mn = Math.min.apply(null, A.concat(B)) - 2, mx = Math.max.apply(null, A.concat(B)) + 3;
      var draw = function () {
        if (!W) return; ctx.clearRect(0, 0, W, H); var padB = 6, padT = 8, k;
        var x = function (n) { return n / (N - 1) * (W - 2) + 1; }, y = function (v) { return padT + (mx - v) / (mx - mn) * (H - padT - padB); }, end = Math.max(1, Math.floor(prog * (N - 1)));
        ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(22,21,59,.07)'; for (var g = 0; g < 5; g++) { var gy = Math.round(padT + g * (H - padT - padB) / 4) + 0.5; ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke(); }
        var pk = A[0]; ctx.fillStyle = 'rgba(210,47,74,.16)'; ctx.beginPath(); ctx.moveTo(x(0), y(A[0]));
        for (k = 0; k <= end; k++) { pk = Math.max(pk, A[k]); ctx.lineTo(x(k), y(pk)); } for (k = end; k >= 0; k--) ctx.lineTo(x(k), y(A[k])); ctx.closePath(); ctx.fill();
        ctx.globalAlpha = 0.1; ctx.fillStyle = acc; ctx.beginPath(); ctx.moveTo(x(0), H); for (k = 0; k <= end; k++) ctx.lineTo(x(k), y(A[k])); ctx.lineTo(x(end), H); ctx.closePath(); ctx.fill(); ctx.globalAlpha = 1;
        ctx.lineJoin = 'round'; ctx.strokeStyle = '#9a99b5'; ctx.lineWidth = 1.5; ctx.beginPath(); for (k = 0; k <= end; k++) { if (k) ctx.lineTo(x(k), y(B[k])); else ctx.moveTo(x(k), y(B[k])); } ctx.stroke();
        ctx.strokeStyle = acc; ctx.lineWidth = 2.4; ctx.beginPath(); for (k = 0; k <= end; k++) { if (k) ctx.lineTo(x(k), y(A[k])); else ctx.moveTo(x(k), y(A[k])); } ctx.stroke();
        var ex = Math.min(x(end), W - 5); ctx.fillStyle = acc; ctx.beginPath(); ctx.arc(ex, y(A[end]), 4.5, 0, 7); ctx.fill(); ctx.globalAlpha = 0.2; ctx.beginPath(); ctx.arc(ex, y(A[end]), 9, 0, 7); ctx.fill(); ctx.globalAlpha = 1;
      };
      sized(cv, ctx, function (w, h) { W = w; H = h; draw(); });
      plays.set(cv, function () { var t0 = performance.now(); var step = function (t) { if (!alive) return; var p = Math.min(1, (t - t0) / 2600); prog = 1 - Math.pow(1 - p, 2.2); draw(); if (p < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); });
    }

    function heat(cv) {
      var ctx = cv.getContext('2d'), cols = +cv.dataset.cols || 10, rows = +cv.dataset.rows || 5, W = 0, H = 0, prog = still ? 1 : 0, s = 7, vals = [], best = 0, r, c;
      var rnd = function () { return (s = (s * 16807) % 2147483647) / 2147483647; };
      for (r = 0; r < rows; r++) for (c = 0; c < cols; c++) { var v = Math.exp(-(Math.pow(c - cols * 0.62, 2) / (cols * 1.3) + Math.pow(r - rows * 0.4, 2) / (rows * 0.9))) + (rnd() - 0.5) * 0.22; vals.push(v); if (v > vals[best]) best = vals.length - 1; }
      var mx = vals[best], mn = Math.min.apply(null, vals);
      var box = function (x, y, w, h) { ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(x, y, w, h, 5); else ctx.rect(x, y, w, h); };
      var draw = function () {
        if (!W) return; ctx.clearRect(0, 0, W, H); var g = 4, cw = (W - g * (cols - 1)) / cols, ch = (H - g * (rows - 1)) / rows, shown = prog * (cols + rows);
        for (r = 0; r < rows; r++) for (c = 0; c < cols; c++) {
          if (c + r > shown) continue; var i = r * cols + c, t = (vals[i] - mn) / (mx - mn);
          ctx.fillStyle = 'rgba(' + accRgb + ',' + (0.07 + 0.88 * t * t).toFixed(3) + ')'; box(c * (cw + g), r * (ch + g), cw, ch); ctx.fill();
          if (i === best && prog >= 1) { ctx.strokeStyle = '#16153b'; ctx.lineWidth = 2.5; box(c * (cw + g) + 1.5, r * (ch + g) + 1.5, cw - 3, ch - 3); ctx.stroke(); }
        }
      };
      sized(cv, ctx, function (w, h) { W = w; H = h; draw(); });
      plays.set(cv, function () { var t0 = performance.now(); var step = function (t) { if (!alive) return; prog = Math.min(1, (t - t0) / 1700); draw(); if (prog < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); });
    }

    q('canvas[data-chart="candles"]').forEach(candles);
    q('canvas[data-chart="equity"]').forEach(equity);
    q('canvas[data-chart="heat"]').forEach(heat);

    (function () {
      var el = root.querySelector('[data-clock]'); if (!el) return;
      var up = function () { setText(el, new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour12: false })); };
      up(); every(up, 1000);
    })();

    /* live countdown: [data-countdown] */
    q('[data-countdown]').forEach(function (cd) {
      var dEl = cd.querySelector('[data-cd-days]'),
        hEl = cd.querySelector('[data-cd-hours]'),
        mEl = cd.querySelector('[data-cd-mins]'),
        sEl = cd.querySelector('[data-cd-secs]'),
        badgeEl = cd.querySelector('[data-cd-badge]');

      var getTarget = function () {
        var now = new Date();
        if (cd.dataset.target) {
          var custom = new Date(cd.dataset.target);
          if (!isNaN(custom.getTime()) && custom.getTime() > now.getTime()) return custom;
        }
        var curYear = now.getFullYear();
        var t = new Date(curYear + '-10-07T18:00:00+05:30');
        if (now.getTime() > t.getTime()) {
          t = new Date((curYear + 1) + '-10-07T18:00:00+05:30');
        }
        return t;
      };

      var target = getTarget();
      var pad = function (n) { return String(Math.max(0, Math.floor(n))).padStart(2, '0'); };

      var tick = function () {
        var now = new Date();
        var diff = target.getTime() - now.getTime();
        if (diff <= 0) {
          if (dEl) setText(dEl, '00');
          if (hEl) setText(hEl, '00');
          if (mEl) setText(mEl, '00');
          if (sEl) setText(sEl, '00');
          if (badgeEl) setText(badgeEl, 'STREAMING NOW · 6 PM – 11 PM IST');
          return;
        }
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        var mins = Math.floor((diff / (1000 * 60)) % 60);
        var secs = Math.floor((diff / 1000) % 60);

        if (dEl) setText(dEl, pad(days));
        if (hEl) setText(hEl, pad(hours));
        if (mEl) setText(mEl, pad(mins));
        if (sEl) setText(sEl, pad(secs));
      };

      tick();
      every(tick, 1000);
    });

    if (!still) {
      /* reveal on scroll */
      (function () {
        var ease = 'cubic-bezier(.2,.7,.2,1)', vh = window.innerHeight;
        var from = function (el) { return el.dataset.reveal === 'scale' ? 'translateY(26px) scale(.97)' : 'translateY(26px)'; };
        var io = new IntersectionObserver(function (es) { es.forEach(function (e) {
          if (!e.isIntersecting) return; var el = e.target; io.unobserve(el); el.style.opacity = ''; el.style.transform = '';
          el.addEventListener('transitionend', function () { el.style.transition = ''; }, { once: true });
        }); }, { threshold: 0.1 });
        q('[data-reveal]').forEach(function (el) {
          var d = +el.dataset.delay || 0;
          if (el.getBoundingClientRect().top < vh * 0.92) { el.animate([{ opacity: 0, transform: from(el) }, { opacity: 1, transform: 'none' }], { duration: 900, delay: d, easing: ease, fill: 'backwards' }); return; }
          el.style.transition = 'opacity .8s ' + ease + ' ' + d + 'ms, transform .8s ' + ease + ' ' + d + 'ms'; el.style.opacity = '0'; el.style.transform = from(el); io.observe(el);
        });
        cleanup.push(function () { io.disconnect(); q('[data-reveal]').forEach(function (el) { el.style.opacity = ''; el.style.transform = ''; el.style.transition = ''; }); });
      })();

      /* one-shot triggers */
      (function () {
        var count = function (el) {
          var d = el.dataset, to = +d.count, dec = +d.dec || 0, pre = d.pre || '', suf = d.suf || '', t0 = performance.now();
          var fmt = function (v) { return pre + inr(Number(v.toFixed(dec)), dec) + suf; };
          var step = function (t) { if (!alive) return; var p = Math.min(1, (t - t0) / 1500), e = 1 - Math.pow(1 - p, 3); setText(el, fmt(to * e)); if (p < 1) requestAnimationFrame(step); };
          requestAnimationFrame(step); cleanup.push(function () { setText(el, fmt(to)); });
        };
        var type = function (el) {
          var full = el.dataset.full || '', i = 0;
          var tick = function () { i++; setText(el, full.slice(0, i) || ' '); if (i < full.length) later(tick, 26); else later(function () { i = 0; tick(); }, 5200); };
          setText(el, ' '); tick();
        };
        var io = new IntersectionObserver(function (es) { es.forEach(function (e) {
          if (!e.isIntersecting) return; var el = e.target, d = el.dataset; io.unobserve(el);
          if ('count' in d) count(el);
          if ('bar' in d) { el.style.transition = 'width 1.4s cubic-bezier(.2,.7,.2,1) .3s'; el.style.width = d.bar + '%'; }
          if ('type' in d) type(el);
          if (plays.has(el)) plays.get(el)();
        }); }, { threshold: 0.3 });
        q('[data-count],[data-bar],[data-type],canvas[data-chart="equity"],canvas[data-chart="heat"]').forEach(function (el) {
          var d = el.dataset; if ('bar' in d) el.style.width = '0%';
          if ('type' in d && el.firstChild && !d.full) d.full = el.firstChild.nodeValue;
          io.observe(el);
        });
        cleanup.push(function () { io.disconnect(); q('[data-type]').forEach(function (el) { if (el.dataset.full) setText(el, el.dataset.full); }); q('[data-bar]').forEach(function (el) { el.style.transition = ''; el.style.width = el.dataset.bar + '%'; }); });
      })();

      /* ambient loops */
      q('[data-marquee]').forEach(function (el) { anim(el, [{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], { duration: 42000, iterations: Infinity }); });
      q('[data-wire]').forEach(function (el) { anim(el, [{ strokeDashoffset: 0 }, { strokeDashoffset: -22 }], { duration: 900, iterations: Infinity }); });
      q('[data-float]').forEach(function (el, i) { anim(el, [{ transform: 'translateY(0)' }, { transform: 'translateY(' + (-12 * amp) + 'px)' }], { duration: 3200 + i * 900, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' }); });
      q('[data-blob]').forEach(function (el, i) { anim(el, [{ transform: 'translate(0,0) scale(1)' }, { transform: 'translate(' + (i % 2 ? -70 : 80) * amp + 'px,' + (i % 2 ? 60 : -50) * amp + 'px) scale(1.12)' }], { duration: 14000 + i * 3000, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' }); });
      q('[data-pulse]').forEach(function (el) { anim(el, [{ opacity: 1 }, { opacity: 0.25 }], { duration: 850, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' }); });
      q('[data-seq]').forEach(function (g) {
        var items = arr(g.querySelectorAll('[data-i]')), step = +g.dataset.seq || 300, max = Math.max.apply(null, items.map(function (it) { return +it.dataset.i; }));
        var run = function () { items.forEach(function (it) { later(function () {
          it.animate([{ boxShadow: '0 0 0 0 rgba(' + accRgb + ',.75)', transform: 'translateY(0)' }, { boxShadow: '0 0 0 9px rgba(' + accRgb + ',0)', transform: 'translateY(-3px)', offset: 0.45 }, { boxShadow: '0 0 0 0 rgba(' + accRgb + ',0)', transform: 'translateY(0)' }], { duration: 800, easing: 'ease-out' });
        }, +it.dataset.i * step); }); };
        later(run, 600); every(run, (max + 1) * step + 1700);
      });

      /* looping risk check: [data-gates data-t1 data-r1 data-t2 data-r2 data-fail2] */
      q('[data-gates]').forEach(function (g) {
        var rows = arr(g.querySelectorAll('[data-gate]')), res = g.querySelector('[data-gate-result]'), tk = g.querySelector('[data-ticket]'), d = g.dataset;
        if (!rows.length || !res || !tk) return;
        var sc = [{ t: d.t1, fail: -1, r: d.r1 }, { t: d.t2, fail: d.fail2 == null ? rows.length - 1 : +d.fail2, r: d.r2 }];
        var C = { wait: ['#8e8cb3', 'queued', 'transparent'], run: ['#f2a93b', 'checking', 'rgba(242,169,59,.09)'], ok: ['#2fbf71', 'pass', 'rgba(47,191,113,.07)'], no: ['#f0556a', 'refused', 'rgba(240,85,106,.12)'] };
        var paint = function (row, st) { var e = row.querySelector('[data-s]'), c = C[st]; setText(e, c[1]); e.style.color = c[0]; row.style.background = c[2]; };
        var n = 0;
        var run = function () {
          var S = sc[n++ % sc.length], last = S.fail >= 0 ? S.fail : rows.length - 1;
          setText(tk, S.t); rows.forEach(function (r) { paint(r, 'wait'); }); setText(res, 'Evaluating…'); res.style.color = '#a8a6c9';
          rows.forEach(function (r, i) { if (i > last) return; later(function () { paint(r, 'run'); }, 500 + i * 520); later(function () { paint(r, S.fail === i ? 'no' : 'ok'); }, 880 + i * 520); });
          var end = 1100 + last * 520;
          later(function () { setText(res, S.r); res.style.color = S.fail >= 0 ? '#f0556a' : '#2fbf71'; }, end); later(run, end + 2800);
        };
        later(run, 1200);
      });

      /* hero tilt + parallax */
      (function () {
        var hero = root.querySelector('[data-hero]'), el = root.querySelector('[data-tilt]'); if (!hero) return;
        var pars = q('[data-par]'); if (!el && !pars.length) return;
        if (el) el.style.transition = 'transform .3s ease-out'; pars.forEach(function (p) { p.style.transition = 'transform .35s ease-out'; });
        var out = function () { if (el) el.style.transform = ''; pars.forEach(function (p) { p.style.transform = ''; }); };
        on(hero, 'pointermove', function (e) {
          var r = hero.getBoundingClientRect(), nx = (e.clientX - r.left) / r.width - 0.5, ny = (e.clientY - r.top) / r.height - 0.5;
          if (el) el.style.transform = 'perspective(1600px) rotateX(' + (-ny * 3 * amp).toFixed(2) + 'deg) rotateY(' + (nx * 4 * amp).toFixed(2) + 'deg)';
          pars.forEach(function (p) { var d = +p.dataset.par * amp; p.style.transform = 'translate3d(' + (nx * d).toFixed(1) + 'px,' + (ny * d).toFixed(1) + 'px,0)'; });
        });
        on(hero, 'pointerleave', out); cleanup.push(out);
      })();
    }

    return { stop: function () { alive = false; cleanup.forEach(function (f) { try { f(); } catch (e) {} }); cleanup = []; } };
  }
  window.NMSite = { boot: boot };
})();
