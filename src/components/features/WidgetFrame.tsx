import type { ReactNode } from "react";

/** The card every feature preview sits in: eyebrow, title, blurb, then body. */
export default function WidgetFrame({
  eyebrow,
  title,
  description,
  aside,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-hair bg-white p-5 shadow-[0_16px_40px_rgba(20,20,20,0.04)] sm:p-8">
      <div className="flex flex-col gap-4 border-b border-[#F2EFE6] pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h3 className="mt-1 font-head text-[20px] font-semibold sm:text-[22px]">{title}</h3>
          <p className="text-[13px] text-mute">{description}</p>
        </div>
        {aside}
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}
