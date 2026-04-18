import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";

const team = [
  { img: t1, name: "Arjun Verma", role: "Founder · Creative Director" },
  { img: t2, name: "Léa Moreau", role: "Head of Strategy" },
  { img: t3, name: "Kabir Shah", role: "Head of Performance" },
];

const Studio = () => {
  return (
    <section id="studio" className="bg-paper py-28 md:py-40 border-t border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20 md:mb-28">
          <div className="md:col-span-3">
            <p className="font-mono-tag text-ink-muted reveal">[ 07 — Studio ]</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-ink reveal">
              Small team.
              <span className="italic font-light text-ink-soft"> Senior-only.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed reveal">
              No account managers. No layers. The people on the pitch are the people
              on the work — strategists, designers and media leads who've spent the
              last decade building brands that grew up.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {team.map((m) => (
            <article key={m.name} className="reveal">
              <div className="relative overflow-hidden bg-paper-deep aspect-[3/4]">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  width={896}
                  height={1152}
                  className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-[1000ms]"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="font-display text-2xl text-ink">{m.name}</h3>
                <span className="font-mono-tag text-ink-muted text-right">{m.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studio;
