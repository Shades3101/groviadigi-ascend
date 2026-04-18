const quotes = [
  {
    q: "They quietly rebuilt our growth engine. Eight months in, paid is profitable, organic is compounding, and the brand finally feels like us.",
    a: "Maya Chen",
    r: "Founder, Halcyon Skincare",
  },
  {
    q: "The rare team that thinks like operators. Every dollar has a thesis, every asset has a job. We stopped guessing.",
    a: "Daniel Roy",
    r: "CMO, Vela Capital",
  },
  {
    q: "Beautiful work that performs. That's the sentence we'd been looking for from an agency for years.",
    a: "Aarav Mehta",
    r: "CEO, Otto & Mae",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-paper py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3">
            <p className="font-mono-tag text-ink-muted reveal">[ 06 — In their words ]</p>
          </div>
        </div>

        <div className="space-y-20 md:space-y-28">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className={`max-w-4xl reveal ${i % 2 === 1 ? "md:ml-auto md:text-right" : ""}`}
            >
              <blockquote className="font-display text-3xl md:text-5xl leading-[1.15] text-ink">
                <span className="text-bright">“</span>
                {q.q}
                <span className="text-bright">”</span>
              </blockquote>
              <figcaption className="mt-8 font-mono-tag text-ink-muted">
                {q.a} — {q.r}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
