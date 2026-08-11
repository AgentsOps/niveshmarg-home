import Image from "next/image";
import Link from "next/link";
import siteData from "../../data/site_data.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerData = siteData.footer;
  const siteInfo = siteData.site;

  return (
    <footer className="bg-gradient-to-br from-[#FDF8EC] via-[#FBF4F1] to-[#FBEFF4]">
      <div className="mx-auto max-w-[1180px] px-6 pb-8 pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full">
                <Image
                  src="/logo.svg"
                  alt={`${siteInfo.name} logo`}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-cover"
                  priority
                />
              </span>
              <span className="leading-none">
                <span className="block font-head text-[20px] font-semibold tracking-tight">
                  {siteInfo.name}
                </span>
                <span className="mt-0.5 block font-deva text-[10px] text-mute"> {siteInfo.subtitle} </span>
              </span>
            </div>
            <p className="mt-5 max-w-[300px] text-[12.5px] leading-[1.8] text-mute">
              {footerData.tagline}
            </p>
            <div className="mt-6 flex gap-2.5">
              <a
                href={siteInfo.dashboardUrl}
                aria-label="Open dashboard"
                className="grid h-9 w-9 place-items-center rounded-full border border-[#E0DAD2] text-[13px]"
              >
                <span className="material-symbols-outlined text-[17px]">dashboard</span>
              </a>
              <a
                href={`mailto:${siteInfo.contactEmail}`}
                aria-label="Email us"
                className="grid h-9 w-9 place-items-center rounded-full border border-[#E0DAD2] text-[13px]"
              >
                <span className="material-symbols-outlined text-[17px]">mail</span>
              </a>
              <a
                href={siteInfo.dashboardUrl}
                aria-label="Telegram alerts"
                className="grid h-9 w-9 place-items-center rounded-full border border-[#E0DAD2] text-[13px]"
              >
                <span className="material-symbols-outlined text-[17px]">send</span>
              </a>
            </div>
          </div>

          {footerData.sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-head text-[15px] font-semibold">{section.title}</h4>
              <ul className="mt-5 flex flex-col gap-3 text-[13px] text-mute">
                {section.links.map((link) => (
                  <li key={link.label} className="flex items-center gap-2">
                    {link.href.startsWith("http") || link.href.startsWith("mailto") ? (
                      <a href={link.href} className="transition hover:text-ink">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="transition hover:text-ink">
                        {link.label}
                      </Link>
                    )}
                    {"badge" in link && link.badge && (
                      <span className="rounded bg-mint px-1.5 py-0.5 text-[9px] font-semibold text-mint-ink">
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              {"Get started" == section.title && (
                <div className="mt-6">
                    <a href={siteInfo.dashboardUrl} className="pill pill-ink pill-sm mt-6">
                      {footerData.ctaLabel}{" "}
                      <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
                    </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#EBE3DA] pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-head text-[15px] font-semibold">{footerData.bottomTitle}</p>
            <p className="mt-1.5 max-w-[560px] text-[12.5px] leading-[1.7] text-mute">
              {footerData.disclaimer}
            </p>
          </div>
          <p className="text-[12.5px] text-mute">© {currentYear} {siteInfo.name}. {footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
