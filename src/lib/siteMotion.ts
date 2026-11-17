/*
 * Shared motion + canvas widgets for the Niveshmarg Edge pages.
 * Ported from UI_PROTO/site-motion.js. Pages mark up behaviour with data-*
 * attributes and MotionRoot calls boot(root) once the DOM is mounted.
 *
 *   data-reveal[="scale"] data-delay   fade/slide in on scroll
 *   data-count data-dec data-pre data-suf   count-up numbers
 *   data-bar="82"                       animated progress width
 *   data-type                           typewriter loop
 *   data-fit data-fit-h data-fit-min    scale a fixed-width mock to its box
 *   data-tabs > data-tab / data-panel   simple tabs
 *   canvas[data-chart=candles|equity|heat]
 *   data-flag / data-tf                 candle chart toggles / timeframes
 *   data-clock                          live IST clock
 *   data-marquee data-wire data-float data-blob data-pulse data-seq   ambient loops
 *   data-gates                          looping risk-engine check
 *   data-hero + data-tilt + data-par    pointer tilt and parallax
 */

export type Skin = "Indigo sky" | "Ocean" | "Forest" | "Saffron";
export type Motion = "Full" | "Subtle" | "Off";

export const SKINS: Record<Skin, [acc: string, soft: string, rgb: string, lite: string]> = {
  "Indigo sky": ["#4f46e5", "#ecebff", "99,102,241", "#a5b4fc"],
  Ocean: ["#0e7490", "#dff4f9", "14,165,200", "#67e8f9"],
  Forest: ["#15803d", "#e2f5e9", "34,160,90", "#86efac"],
  Saffron: ["#b45309", "#fcefd9", "230,140,30", "#fcd34d"],
};

type Candle = { o: number; c: number; h: number; l: number; v: number };

export function boot(root: HTMLElement, opts: { skin?: Skin; motion?: Motion } = {}): { stop: () => void } {
  let cleanup: Array<() => void> = [];
  let alive = true;
  const mo = opts.motion || "Full";
  const still = mo === "Off" || matchMedia("(prefers-reduced-motion: reduce)").matches;
  const amp = mo === "Subtle" ? 0.4 : 1;
  const sk = SKINS[opts.skin || "Indigo sky"] || SKINS["Indigo sky"];
  const acc = sk[0];
  const accRgb = sk[2];
  ["--acc", "--acc-soft", "--acc-rgb", "--acc-lite"].forEach((k, i) => root.style.setProperty(k, sk[i]));

  const q = <T extends Element = HTMLElement>(s: string) => Array.from(root.querySelectorAll<T>(s) as NodeListOf<T>);
  const anim = (el: Element, kf: Keyframe[], o: KeyframeAnimationOptions) => {
    const a = el.animate(kf, o);
    cleanup.push(() => a.cancel());
    return a;
  };
  const later = (fn: () => void, ms: number) => {
    const id = setTimeout(() => {
      if (alive) fn();
    }, ms);
    cleanup.push(() => clearTimeout(id));
  };
  const every = (fn: () => void, ms: number) => {
    const id = setInterval(() => {
      if (alive) fn();
    }, ms);
    cleanup.push(() => clearInterval(id));
  };
  const setText = (el: Element | null, t: string) => {
    if (el && el.firstChild) el.firstChild.nodeValue = t;
  };
  const on = <K extends keyof HTMLElementEventMap>(el: HTMLElement, ev: K, fn: (e: HTMLElementEventMap[K]) => void) => {
    el.addEventListener(ev, fn);
    cleanup.push(() => el.removeEventListener(ev, fn));
  };
  const paintBtn = (b: HTMLElement, active: boolean, bg: string, fg: string) => {
    if (active) {
      b.style.setProperty("--tb", bg);
      b.style.setProperty("--tc", fg);
    } else {
      b.style.removeProperty("--tb");
      b.style.removeProperty("--tc");
    }
    b.setAttribute("aria-pressed", active ? "true" : "false");
  };
  const mono = (sz: number, w?: number) => (w || 500) + " " + sz + "px 'JetBrains Mono',monospace";
  const inr = (v: number, d: number) =>
    v.toLocaleString("en-IN", { minimumFractionDigits: d, maximumFractionDigits: d });
  const plays = new Map<Element, () => void>();
  const seeded = (seed: number) => {
    let s = seed;
    return {
      next: () => (s = (s * 16807) % 2147483647) / 2147483647,
      reset: (v: number) => {
        s = v;
      },
    };
  };
  const sized = (cv: HTMLCanvasElement, ctx: CanvasRenderingContext2D, cb: (w: number, h: number) => void) => {
    const f = () => {
      const d = Math.min(2, window.devicePixelRatio || 1);
      const w = cv.clientWidth;
      const h = cv.clientHeight;
      if (!w || !h) return;
      cv.width = Math.round(w * d);
      cv.height = Math.round(h * d);
      ctx.setTransform(d, 0, 0, d, 0, 0);
      cb(w, h);
    };
    const ro = new ResizeObserver(f);
    ro.observe(cv);
    f();
    cleanup.push(() => ro.disconnect());
  };

  /* scale-to-fit fixed-width mocks */
  (() => {
    const ro = new ResizeObserver((es) =>
      es.forEach((e) => {
        const box = e.target as HTMLElement;
        const inner = box.firstElementChild as HTMLElement | null;
        if (!inner) return;
        const w = +(box.dataset.fit || 0);
        const h = +(box.dataset.fitH || 0);
        const s = Math.min(1, Math.max(+(box.dataset.fitMin || 0) || 0.4, box.clientWidth / w));
        inner.style.transform = "scale(" + s + ")";
        box.style.height = Math.round(h * s) + "px";
      }),
    );
    q("[data-fit]").forEach((b) => ro.observe(b));
    cleanup.push(() => ro.disconnect());
  })();

  /* tabs: [data-tabs] > [data-tab] buttons + [data-panel] blocks */
  q("[data-tabs]").forEach((g) => {
    const btns = Array.from(g.querySelectorAll<HTMLElement>("[data-tab]"));
    const panels = Array.from(g.querySelectorAll<HTMLElement>("[data-panel]"));
    const show = (id?: string) => {
      btns.forEach((b) => paintBtn(b, b.dataset.tab === id, "var(--acc,#4f46e5)", "#fff"));
      panels.forEach((p) => {
        p.style.display = p.dataset.panel === id ? "" : "none";
      });
    };
    btns.forEach((b) => on(b, "click", () => show(b.dataset.tab)));
    if (btns[0]) show(btns[0].dataset.tab);
    cleanup.push(() =>
      panels.forEach((p) => {
        p.style.display = "";
      }),
    );
  });

  function candles(cv: HTMLCanvasElement) {
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const pxEl = root.querySelector("[data-px]");
    const chEl = root.querySelector<HTMLElement>("[data-chg]");
    const ohlcEl = root.querySelector("[data-ohlc]");
    const start = +(cv.dataset.start || 0) || 24050;
    const dp = start < 5000 ? 1 : 0;
    const flags: Record<string, boolean> = { ema: true, ob: true, trades: true, vol: true };
    const rng = seeded(11);
    const rnd = rng.next;
    let W = 0,
      H = 0,
      vol = +(cv.dataset.vol || 0) || 46,
      cs: Candle[] = [],
      ref = 0,
      base = 0,
      slide = 0,
      lo = 0,
      hi = 0,
      goal = 0,
      ob = { i: 0, top: 0, bot: 0 },
      vis = true,
      mouse: { x: number; y: number } | null = null;
    const pick = () => {
      const L = cs.length;
      let i = L - 30;
      for (let j = L - 36; j < L - 22; j++)
        if (cs[j].c < cs[j].o && cs[j + 1].c > cs[j + 1].o) {
          i = j;
          break;
        }
      ob = { i: base + i, top: cs[i].o, bot: cs[i].l };
    };
    const build = (seed: number, v: number) => {
      rng.reset(seed);
      vol = v;
      cs = [];
      let p = start;
      for (let i = 0; i < 150; i++) {
        const c = p + (rnd() - 0.44) * vol;
        cs.push({
          o: p,
          c,
          h: Math.max(p, c) + rnd() * vol * 0.43,
          l: Math.min(p, c) - rnd() * vol * 0.43,
          v: 0.25 + rnd() * 0.75,
        });
        p = c;
      }
      ref = cs[70].c;
      base = 0;
      slide = 0;
      lo = 0;
      hi = 0;
      goal = p;
      pick();
    };
    const ema = (n: number) => {
      const k = 2 / (n + 1);
      let e = cs[0].c;
      return cs.map((c) => (e = c.c * k + e * (1 - k)));
    };
    const hud = () => {
      const c = cs[cs.length - 1].c;
      const g = (c / ref - 1) * 100;
      setText(pxEl, inr(c, 2));
      setText(chEl, (g >= 0 ? "+" : "−") + Math.abs(g).toFixed(2) + "%");
      if (chEl) chEl.style.color = g >= 0 ? "#2fbf71" : "#f0556a";
    };
    const draw = () => {
      if (!W) return;
      ctx.clearRect(0, 0, W, H);
      const padR = 62,
        padT = 12,
        padB = 8,
        L = cs.length,
        n = Math.max(22, Math.min(74, Math.floor((W - padR) / 12))),
        st = L - n,
        cw = (W - padR) / n,
        ch = H - padT - padB;
      let mn = Infinity,
        mx = -Infinity,
        j: number;
      for (j = st; j < L; j++) {
        mn = Math.min(mn, cs[j].l);
        mx = Math.max(mx, cs[j].h);
      }
      const pad = (mx - mn) * 0.14;
      mn -= pad * 2.2;
      mx += pad;
      if (still || !lo) {
        lo = mn;
        hi = mx;
      } else {
        lo += (mn - lo) * 0.08;
        hi += (mx - hi) * 0.08;
      }
      const y = (v: number) => padT + ((hi - v) / (hi - lo)) * ch;
      const x = (k: number) => (k - st + slide) * cw + cw / 2;
      ctx.lineWidth = 1;
      ctx.font = mono(10);
      ctx.textBaseline = "middle";
      ctx.textAlign = "left";
      for (let g = 1; g < 5; g++) {
        const gv = lo + ((hi - lo) * g) / 5,
          gy = Math.round(y(gv)) + 0.5;
        ctx.strokeStyle = "rgba(255,255,255,.05)";
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(W - padR, gy);
        ctx.stroke();
        ctx.fillStyle = "#8e8cb3";
        ctx.fillText(gv.toFixed(dp), W - padR + 10, gy);
      }
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, W - padR, H);
      ctx.clip();
      if (ob.i - base < st + 2) pick();
      if (flags.ob) {
        const ox = x(ob.i - base) - cw / 2,
          oy = y(ob.top),
          oh = Math.max(6, y(ob.bot) - oy);
        ctx.fillStyle = "rgba(47,191,113,.11)";
        ctx.fillRect(ox, oy, W, oh);
        ctx.fillStyle = "rgba(47,191,113,.55)";
        ctx.fillRect(ox, oy, W, 1);
        ctx.fillStyle = "#7fe0aa";
        ctx.fillText("Bull OB", ox + 6, oy - 8);
      }
      if (flags.vol)
        for (j = st - 1; j < L; j++) {
          const vc = cs[j];
          ctx.fillStyle = vc.c >= vc.o ? "rgba(47,191,113,.22)" : "rgba(240,85,106,.22)";
          const vh = vc.v * ch * 0.15;
          ctx.fillRect(x(j) - cw * 0.32, H - vh, cw * 0.64, vh);
        }
      if (flags.ema)
        (
          [
            [ema(20), "#8b8fff"],
            [ema(50), "#f2a93b"],
          ] as const
        ).forEach(([line, col]) => {
          ctx.strokeStyle = col;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          for (let k = st - 1; k < L; k++) {
            if (k === st - 1) ctx.moveTo(x(k), y(line[k]));
            else ctx.lineTo(x(k), y(line[k]));
          }
          ctx.stroke();
        });
      for (j = st - 1; j < L; j++) {
        const c = cs[j],
          col = c.c >= c.o ? "#2fbf71" : "#f0556a",
          xx = x(j);
        ctx.strokeStyle = col;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(Math.round(xx) + 0.5, y(c.h));
        ctx.lineTo(Math.round(xx) + 0.5, y(c.l));
        ctx.stroke();
        ctx.fillStyle = col;
        const a = y(Math.max(c.o, c.c)),
          b = y(Math.min(c.o, c.c));
        ctx.fillRect(xx - cw * 0.32, a, cw * 0.64, Math.max(1, b - a));
      }
      const mj = ob.i - base + 3;
      if (flags.trades && mj >= st && mj < L) {
        const tx = x(mj),
          ty = y(cs[mj].l) + 10;
        ctx.fillStyle = "#2fbf71";
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(tx - 5, ty + 8);
        ctx.lineTo(tx + 5, ty + 8);
        ctx.closePath();
        ctx.fill();
        ctx.font = mono(9, 600);
        ctx.textAlign = "center";
        ctx.fillText(cv.dataset.longLabel || "#1 LONG", tx, ty + 17);
        ctx.textAlign = "left";
        ctx.font = mono(10);
      }
      ctx.restore();
      const k = cs[L - 1],
        yl = Math.round(y(k.c)) + 0.5,
        kc = k.c >= k.o ? "#2fbf71" : "#f0556a";
      ctx.setLineDash([3, 4]);
      ctx.strokeStyle = kc;
      ctx.beginPath();
      ctx.moveTo(0, yl);
      ctx.lineTo(W - padR, yl);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = kc;
      ctx.fillRect(W - padR, yl - 9, padR, 18);
      ctx.fillStyle = "#0d0c22";
      ctx.font = mono(10, 600);
      ctx.fillText(k.c.toFixed(2), W - padR + 6, yl);
      let hov = cs[L - 1];
      if (mouse && mouse.x < W - padR) {
        const hi2 = Math.max(st, Math.min(L - 1, st + Math.round((mouse.x - cw / 2) / cw - slide)));
        hov = cs[hi2];
        const hx = Math.round(x(hi2)) + 0.5,
          hy = Math.round(mouse.y) + 0.5;
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = "rgba(255,255,255,.4)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(hx, 0);
        ctx.lineTo(hx, H);
        ctx.moveTo(0, hy);
        ctx.lineTo(W - padR, hy);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "#eeedfb";
        ctx.fillRect(W - padR, hy - 9, padR, 18);
        ctx.fillStyle = "#0d0c22";
        ctx.fillText((hi - ((mouse.y - padT) / ch) * (hi - lo)).toFixed(2), W - padR + 6, hy);
      }
      if (ohlcEl)
        setText(
          ohlcEl,
          "O " + inr(hov.o, 2) + "  H " + inr(hov.h, 2) + "  L " + inr(hov.l, 2) + "  C " + inr(hov.c, 2),
        );
    };
    build(+(cv.dataset.seed || 0) || 11, vol);
    sized(cv, ctx, (w, h) => {
      W = w;
      H = h;
      draw();
    });
    on(cv, "pointermove", (e) => {
      const r = cv.getBoundingClientRect();
      mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
      if (still) draw();
    });
    on(cv, "pointerleave", () => {
      mouse = null;
      if (still) draw();
    });
    q("[data-flag]").forEach((b) => {
      const k = b.dataset.flag as string;
      const paint = () => paintBtn(b, flags[k], "rgba(" + accRgb + ",.4)", "#fff");
      on(b, "click", () => {
        flags[k] = !flags[k];
        paint();
        draw();
      });
      paint();
    });
    const tfs = q("[data-tf]");
    tfs.forEach((b) => {
      on(b, "click", () => {
        tfs.forEach((o) => paintBtn(o, o === b, "var(--acc,#4f46e5)", "#fff"));
        build(+(b.dataset.seed || 0) || 11, +(b.dataset.vol || 0) || vol);
        hud();
        draw();
      });
      paintBtn(b, "on" in b.dataset, "var(--acc,#4f46e5)", "#fff");
    });
    hud();
    if (still) return;
    const io = new IntersectionObserver((e) => {
      vis = e[0].isIntersecting;
    });
    io.observe(cv);
    cleanup.push(() => io.disconnect());
    let lastT = 0,
      tk = 0;
    const frame = (t: number) => {
      if (!alive) return;
      requestAnimationFrame(frame);
      if (!vis) return;
      const k = cs[cs.length - 1];
      k.c += (goal - k.c) * 0.12;
      k.h = Math.max(k.h, k.c);
      k.l = Math.min(k.l, k.c);
      slide *= 0.88;
      if (slide < 0.002) slide = 0;
      if (t - lastT > 480) {
        lastT = t;
        tk++;
        if (tk % 7 === 0) {
          cs.push({ o: k.c, c: k.c, h: k.c, l: k.c, v: 0.25 + rnd() * 0.75 });
          cs.shift();
          base++;
          slide = 1;
          goal = k.c + (rnd() - 0.44) * vol * 0.65;
        } else goal = k.c + (rnd() - 0.46) * vol * 0.6;
        hud();
      }
      draw();
    };
    requestAnimationFrame(frame);
  }

  function equity(cv: HTMLCanvasElement) {
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const rnd = seeded(+(cv.dataset.seed || 0) || 5).next;
    const N = 130,
      a = [100],
      b = [100];
    let W = 0,
      H = 0,
      prog = still ? 1 : 0;
    for (let i = 1; i < N; i++) {
      a.push(a[i - 1] * (1 + (rnd() - 0.44) * 0.02));
      b.push(b[i - 1] * (1 + (rnd() - 0.48) * 0.026));
    }
    const fix = (v: number[], end: number) => {
      const d = end - v[N - 1];
      return v.map((z, k) => z + (d * k) / (N - 1));
    };
    const A = fix(a, +(cv.dataset.a || 0) || 124.5),
      B = fix(b, +(cv.dataset.b || 0) || 111.2),
      mn = Math.min(...A, ...B) - 2,
      mx = Math.max(...A, ...B) + 3;
    const draw = () => {
      if (!W) return;
      ctx.clearRect(0, 0, W, H);
      const padB = 6,
        padT = 8;
      let k: number;
      const x = (n: number) => (n / (N - 1)) * (W - 2) + 1,
        y = (v: number) => padT + ((mx - v) / (mx - mn)) * (H - padT - padB),
        end = Math.max(1, Math.floor(prog * (N - 1)));
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(22,21,59,.07)";
      for (let g = 0; g < 5; g++) {
        const gy = Math.round(padT + (g * (H - padT - padB)) / 4) + 0.5;
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(W, gy);
        ctx.stroke();
      }
      let pk = A[0];
      ctx.fillStyle = "rgba(210,47,74,.16)";
      ctx.beginPath();
      ctx.moveTo(x(0), y(A[0]));
      for (k = 0; k <= end; k++) {
        pk = Math.max(pk, A[k]);
        ctx.lineTo(x(k), y(pk));
      }
      for (k = end; k >= 0; k--) ctx.lineTo(x(k), y(A[k]));
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 0.1;
      ctx.fillStyle = acc;
      ctx.beginPath();
      ctx.moveTo(x(0), H);
      for (k = 0; k <= end; k++) ctx.lineTo(x(k), y(A[k]));
      ctx.lineTo(x(end), H);
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#9a99b5";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (k = 0; k <= end; k++) {
        if (k) ctx.lineTo(x(k), y(B[k]));
        else ctx.moveTo(x(k), y(B[k]));
      }
      ctx.stroke();
      ctx.strokeStyle = acc;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      for (k = 0; k <= end; k++) {
        if (k) ctx.lineTo(x(k), y(A[k]));
        else ctx.moveTo(x(k), y(A[k]));
      }
      ctx.stroke();
      const ex = Math.min(x(end), W - 5);
      ctx.fillStyle = acc;
      ctx.beginPath();
      ctx.arc(ex, y(A[end]), 4.5, 0, 7);
      ctx.fill();
      ctx.globalAlpha = 0.2;
      ctx.beginPath();
      ctx.arc(ex, y(A[end]), 9, 0, 7);
      ctx.fill();
      ctx.globalAlpha = 1;
    };
    sized(cv, ctx, (w, h) => {
      W = w;
      H = h;
      draw();
    });
    plays.set(cv, () => {
      const t0 = performance.now();
      const step = (t: number) => {
        if (!alive) return;
        const p = Math.min(1, (t - t0) / 2600);
        prog = 1 - Math.pow(1 - p, 2.2);
        draw();
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  function heat(cv: HTMLCanvasElement) {
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const cols = +(cv.dataset.cols || 0) || 10,
      rows = +(cv.dataset.rows || 0) || 5,
      rnd = seeded(7).next,
      vals: number[] = [];
    let W = 0,
      H = 0,
      prog = still ? 1 : 0,
      best = 0;
    for (let r = 0; r < rows; r++)
      for (let c = 0; c < cols; c++) {
        const v =
          Math.exp(-(Math.pow(c - cols * 0.62, 2) / (cols * 1.3) + Math.pow(r - rows * 0.4, 2) / (rows * 0.9))) +
          (rnd() - 0.5) * 0.22;
        vals.push(v);
        if (v > vals[best]) best = vals.length - 1;
      }
    const mx = vals[best],
      mn = Math.min(...vals);
    const box = (x: number, y: number, w: number, h: number) => {
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x, y, w, h, 5);
      else ctx.rect(x, y, w, h);
    };
    const draw = () => {
      if (!W) return;
      ctx.clearRect(0, 0, W, H);
      const g = 4,
        cw = (W - g * (cols - 1)) / cols,
        ch = (H - g * (rows - 1)) / rows,
        shown = prog * (cols + rows);
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++) {
          if (c + r > shown) continue;
          const i = r * cols + c,
            t = (vals[i] - mn) / (mx - mn);
          ctx.fillStyle = "rgba(" + accRgb + "," + (0.07 + 0.88 * t * t).toFixed(3) + ")";
          box(c * (cw + g), r * (ch + g), cw, ch);
          ctx.fill();
          if (i === best && prog >= 1) {
            ctx.strokeStyle = "#16153b";
            ctx.lineWidth = 2.5;
            box(c * (cw + g) + 1.5, r * (ch + g) + 1.5, cw - 3, ch - 3);
            ctx.stroke();
          }
        }
    };
    sized(cv, ctx, (w, h) => {
      W = w;
      H = h;
      draw();
    });
    plays.set(cv, () => {
      const t0 = performance.now();
      const step = (t: number) => {
        if (!alive) return;
        prog = Math.min(1, (t - t0) / 1700);
        draw();
        if (prog < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  q<HTMLCanvasElement>('canvas[data-chart="candles"]').forEach(candles);
  q<HTMLCanvasElement>('canvas[data-chart="equity"]').forEach(equity);
  q<HTMLCanvasElement>('canvas[data-chart="heat"]').forEach(heat);

  (() => {
    const el = root.querySelector("[data-clock]");
    if (!el) return;
    const up = () => setText(el, new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Kolkata", hour12: false }));
    up();
    every(up, 1000);
  })();

  if (!still) {
    /* reveal on scroll */
    (() => {
      const ease = "cubic-bezier(.2,.7,.2,1)",
        vh = window.innerHeight;
      const from = (el: HTMLElement) =>
        el.dataset.reveal === "scale" ? "translateY(26px) scale(.97)" : "translateY(26px)";
      const io = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            io.unobserve(el);
            el.style.opacity = "";
            el.style.transform = "";
            el.addEventListener(
              "transitionend",
              () => {
                el.style.transition = "";
              },
              { once: true },
            );
          }),
        { threshold: 0.1 },
      );
      q("[data-reveal]").forEach((el) => {
        const d = +(el.dataset.delay || 0) || 0;
        if (el.getBoundingClientRect().top < vh * 0.92) {
          el.animate(
            [
              { opacity: 0, transform: from(el) },
              { opacity: 1, transform: "none" },
            ],
            { duration: 900, delay: d, easing: ease, fill: "backwards" },
          );
          return;
        }
        el.style.transition = "opacity .8s " + ease + " " + d + "ms, transform .8s " + ease + " " + d + "ms";
        el.style.opacity = "0";
        el.style.transform = from(el);
        io.observe(el);
      });
      cleanup.push(() => {
        io.disconnect();
        q("[data-reveal]").forEach((el) => {
          el.style.opacity = "";
          el.style.transform = "";
          el.style.transition = "";
        });
      });
    })();

    /* one-shot triggers */
    (() => {
      const count = (el: HTMLElement) => {
        const d = el.dataset,
          to = +(d.count || 0),
          dec = +(d.dec || 0) || 0,
          pre = d.pre || "",
          suf = d.suf || "",
          t0 = performance.now();
        const fmt = (v: number) => pre + inr(Number(v.toFixed(dec)), dec) + suf;
        const step = (t: number) => {
          if (!alive) return;
          const p = Math.min(1, (t - t0) / 1500),
            e = 1 - Math.pow(1 - p, 3);
          setText(el, fmt(to * e));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        cleanup.push(() => setText(el, fmt(to)));
      };
      const type = (el: HTMLElement) => {
        const full = el.dataset.full || "";
        let i = 0;
        const tick = () => {
          i++;
          setText(el, full.slice(0, i) || " ");
          if (i < full.length) later(tick, 26);
          else
            later(() => {
              i = 0;
              tick();
            }, 5200);
        };
        setText(el, " ");
        tick();
      };
      const io = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement,
              d = el.dataset;
            io.unobserve(el);
            if ("count" in d) count(el);
            if ("bar" in d) {
              el.style.transition = "width 1.4s cubic-bezier(.2,.7,.2,1) .3s";
              el.style.width = d.bar + "%";
            }
            if ("type" in d) type(el);
            plays.get(el)?.();
          }),
        { threshold: 0.3 },
      );
      q('[data-count],[data-bar],[data-type],canvas[data-chart="equity"],canvas[data-chart="heat"]').forEach((el) => {
        const d = el.dataset;
        if ("bar" in d) el.style.width = "0%";
        if ("type" in d && el.firstChild && !d.full) d.full = el.firstChild.nodeValue || "";
        io.observe(el);
      });
      cleanup.push(() => {
        io.disconnect();
        q("[data-type]").forEach((el) => {
          if (el.dataset.full) setText(el, el.dataset.full);
        });
        q("[data-bar]").forEach((el) => {
          el.style.transition = "";
          el.style.width = el.dataset.bar + "%";
        });
      });
    })();

    /* ambient loops */
    q("[data-marquee]").forEach((el) =>
      anim(el, [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }], {
        duration: 42000,
        iterations: Infinity,
      }),
    );
    q("[data-wire]").forEach((el) =>
      anim(el, [{ strokeDashoffset: 0 }, { strokeDashoffset: -22 }], { duration: 900, iterations: Infinity }),
    );
    q("[data-float]").forEach((el, i) =>
      anim(el, [{ transform: "translateY(0)" }, { transform: "translateY(" + -12 * amp + "px)" }], {
        duration: 3200 + i * 900,
        iterations: Infinity,
        direction: "alternate",
        easing: "ease-in-out",
      }),
    );
    q("[data-blob]").forEach((el, i) =>
      anim(
        el,
        [
          { transform: "translate(0,0) scale(1)" },
          { transform: "translate(" + (i % 2 ? -70 : 80) * amp + "px," + (i % 2 ? 60 : -50) * amp + "px) scale(1.12)" },
        ],
        { duration: 14000 + i * 3000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" },
      ),
    );
    q("[data-pulse]").forEach((el) =>
      anim(el, [{ opacity: 1 }, { opacity: 0.25 }], {
        duration: 850,
        iterations: Infinity,
        direction: "alternate",
        easing: "ease-in-out",
      }),
    );
    q("[data-seq]").forEach((g) => {
      const items = Array.from(g.querySelectorAll<HTMLElement>("[data-i]")),
        step = +(g.dataset.seq || 0) || 300,
        max = Math.max(...items.map((it) => +(it.dataset.i || 0)));
      const run = () =>
        items.forEach((it) =>
          later(
            () => {
              it.animate(
                [
                  { boxShadow: "0 0 0 0 rgba(" + accRgb + ",.75)", transform: "translateY(0)" },
                  { boxShadow: "0 0 0 9px rgba(" + accRgb + ",0)", transform: "translateY(-3px)", offset: 0.45 },
                  { boxShadow: "0 0 0 0 rgba(" + accRgb + ",0)", transform: "translateY(0)" },
                ],
                { duration: 800, easing: "ease-out" },
              );
            },
            +(it.dataset.i || 0) * step,
          ),
        );
      later(run, 600);
      every(run, (max + 1) * step + 1700);
    });

    /* looping risk check: [data-gates data-t1 data-r1 data-t2 data-r2 data-fail2] */
    q("[data-gates]").forEach((g) => {
      const rows = Array.from(g.querySelectorAll<HTMLElement>("[data-gate]")),
        res = g.querySelector<HTMLElement>("[data-gate-result]"),
        tk = g.querySelector("[data-ticket]"),
        d = g.dataset;
      if (!rows.length || !res || !tk) return;
      const sc = [
        { t: d.t1 || "", fail: -1, r: d.r1 || "" },
        { t: d.t2 || "", fail: d.fail2 == null ? rows.length - 1 : +d.fail2, r: d.r2 || "" },
      ];
      const C: Record<string, [string, string, string]> = {
        wait: ["#8e8cb3", "queued", "transparent"],
        run: ["#f2a93b", "checking", "rgba(242,169,59,.09)"],
        ok: ["#2fbf71", "pass", "rgba(47,191,113,.07)"],
        no: ["#f0556a", "refused", "rgba(240,85,106,.12)"],
      };
      const paint = (row: HTMLElement, st: string) => {
        const e = row.querySelector<HTMLElement>("[data-s]"),
          c = C[st];
        if (!e) return;
        setText(e, c[1]);
        e.style.color = c[0];
        row.style.background = c[2];
      };
      let n = 0;
      const run = () => {
        const S = sc[n++ % sc.length],
          last = S.fail >= 0 ? S.fail : rows.length - 1;
        setText(tk, S.t);
        rows.forEach((r) => paint(r, "wait"));
        setText(res, "Evaluating…");
        res.style.color = "#a8a6c9";
        rows.forEach((r, i) => {
          if (i > last) return;
          later(() => paint(r, "run"), 500 + i * 520);
          later(() => paint(r, S.fail === i ? "no" : "ok"), 880 + i * 520);
        });
        const end = 1100 + last * 520;
        later(() => {
          setText(res, S.r);
          res.style.color = S.fail >= 0 ? "#f0556a" : "#2fbf71";
        }, end);
        later(run, end + 2800);
      };
      later(run, 1200);
    });

    /* hero tilt + parallax */
    (() => {
      const hero = root.querySelector<HTMLElement>("[data-hero]"),
        el = root.querySelector<HTMLElement>("[data-tilt]");
      if (!hero) return;
      const pars = q("[data-par]");
      if (!el && !pars.length) return;
      if (el) el.style.transition = "transform .3s ease-out";
      pars.forEach((p) => {
        p.style.transition = "transform .35s ease-out";
      });
      const out = () => {
        if (el) el.style.transform = "";
        pars.forEach((p) => {
          p.style.transform = "";
        });
      };
      on(hero, "pointermove", (e) => {
        const r = hero.getBoundingClientRect(),
          nx = (e.clientX - r.left) / r.width - 0.5,
          ny = (e.clientY - r.top) / r.height - 0.5;
        if (el)
          el.style.transform =
            "perspective(1600px) rotateX(" +
            (-ny * 3 * amp).toFixed(2) +
            "deg) rotateY(" +
            (nx * 4 * amp).toFixed(2) +
            "deg)";
        pars.forEach((p) => {
          const dd = +(p.dataset.par || 0) * amp;
          p.style.transform = "translate3d(" + (nx * dd).toFixed(1) + "px," + (ny * dd).toFixed(1) + "px,0)";
        });
      });
      on(hero, "pointerleave", out);
      cleanup.push(out);
    })();
  }

  // Reveal targets are hidden by the layout's pre-hydration script until this point.
  document.documentElement.classList.remove("motion-pending");

  return {
    stop: () => {
      alive = false;
      cleanup.forEach((f) => {
        try {
          f();
        } catch {
          /* element may already be gone */
        }
      });
      cleanup = [];
    },
  };
}
