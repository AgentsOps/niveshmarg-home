import siteData from "../../data/site_data.json";

export default function DataSourcesSection() {
  const sources = siteData.dataSources;

  return (
    <section className="border-y border-[#EDEDED] bg-[#F6F6F6]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 divide-x divide-y divide-[#E4E4E4] px-6 md:grid-cols-5 md:divide-y-0">
        {sources.map((item, idx) => (
          <div
            key={item.label}
            className={`flex items-center justify-center gap-2 py-8 font-head text-[17px] font-semibold ${
              idx === sources.length - 1 ? "col-span-2 md:col-span-1" : ""
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}
