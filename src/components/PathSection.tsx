import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import siteData from "../../data/site_data.json";

export default function PathSection() {
  const data = siteData.pathSection;

  return (
    <section
      id="path"
      className="mx-auto grid max-w-[1180px] scroll-mt-24 grid-cols-1 gap-8 px-6 pb-20 sm:pb-24 lg:grid-cols-[300px_1fr] items-center"
    >
      <ScrollReveal>
        <article>
          <div className="flex h-[290px] flex-col justify-between overflow-hidden rounded-[14px] bg-gradient-to-br from-cream via-[#FBF3E4] to-[#F8E9CE] p-6">
            <span className="font-deva text-[13px] text-mute">{data.cardSub}</span>
            <div>
              <p className="font-head text-[26px] font-semibold leading-[1.15]">
                {data.cardTitle}
              </p>
              <svg className="mt-3 w-[150px]" viewBox="0 0 210 14" fill="none" aria-hidden="true">
                <path
                  d="M3 9C50 3 140 2 206 6"
                  stroke="#F5C518"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-[12px] leading-[1.7] text-mute">
              {data.cardBody}
            </p>
          </div>
          <h3 className="mt-5 font-head text-[15px] font-semibold leading-snug">
            {data.sectionHeading}
          </h3>
          <p className="mt-2 text-[12px] leading-[1.7] text-mute">
            {data.sectionBody}
          </p>
        </article>
      </ScrollReveal>

      <div>
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.steps.map((step, idx) => (
            <ScrollReveal key={step.number} delayMs={(idx + 1) * 50}>
              <li className="h-full rounded-[14px] border border-hair p-6">
                <span className="font-head text-[34px] font-semibold leading-none text-[#E8E8E8]">
                  {step.number}
                </span>
                <h3 className="mt-3 font-head text-[15px] font-semibold">{step.title}</h3>
                <p className="mt-2 text-[12.5px] leading-[1.7] text-mute">
                  {step.description}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ol>

        <ScrollReveal delayMs={300} className="mt-8">
          <div className="rounded-[14px] border border-hair p-8">
            <p className="max-w-[620px] text-[14px] leading-[1.9] text-[#3A3A3A]">
              {data.quote}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full">
                  <Image
                    src="/logo.svg"
                    alt={`${siteData.site.name} logo`}
                    width={36}
                    height={36}
                    className="h-9 w-9 object-cover"
                    priority
                  />
                </span>
                <div>
                  <p className="font-head text-[15px] font-semibold">{data.quoteAuthor}</p>
                  <p className="text-[12px] text-mute">{data.quoteSubtitle}</p>
                </div>
              </div>
              <Link
                href={data.quoteLinkHref}
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-mute"
              >
                {data.quoteLinkText} <span>→</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
