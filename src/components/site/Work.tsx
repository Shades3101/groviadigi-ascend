import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";

const work = [
  { img: w1, client: "Halcyon Skincare", scope: "Brand · Web · Paid", year: "2024", note: "+312% revenue / 8 mo" },
  { img: w2, client: "Northline Studios", scope: "SEO · Content", year: "2024", note: "0 → 84k organic / yr" },
  { img: w3, client: "Otto & Mae", scope: "Identity · DTC", year: "2023", note: "Launch · sold out wk 1" },
  { img: w4, client: "Vela Capital", scope: "Brand · Web", year: "2024", note: "Seed → Series A" },
];

const Work = () => {
  return (
    <section id="work" className="bg-paper py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20 md:mb-28">
          <div className="md:col-span-3">
            <p className="font-mono-tag text-ink-muted reveal">[ 04 — Selected work ]</p>
          </div>
          <div className="md:col-span-9 flex items-end justify-between gap-10">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-ink reveal">
              Quiet work.
              <span className="italic font-light text-ink-soft"> Loud results.</span>
            </h2>
            <a href="#contact" className="hidden md:inline-block font-mono-tag link-underline text-ink reveal">
              All case studies →
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-20">
          {work.map((p, i) => (
            <a
              key={p.client}
              href="#contact"
              className={`group block reveal ${i % 2 === 1 ? "md:translate-y-24" : ""}`}
            >
              <div className="relative overflow-hidden bg-paper-deep">
                <img
                  src={p.img}
                  alt={`${p.client} — ${p.scope}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-[60vh] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute top-4 left-4 font-mono-tag text-paper bg-ink/60 backdrop-blur px-3 py-1 rounded-full">
                  {p.year}
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-ink">{p.client}</h3>
                  <p className="font-mono-tag text-ink-muted mt-2">{p.scope}</p>
                </div>
                <p className="font-display italic text-ink-soft text-xl md:text-2xl text-right max-w-[12ch]">
                  {p.note}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
