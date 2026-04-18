import { useEffect, useRef, useState } from "react";

const stats = [
  { v: 312, suffix: "%", label: "Avg. revenue lift / 12 mo" },
  { v: 47, suffix: "M+", label: "Managed media spend" },
  { v: 92, suffix: "%", label: "Client retention rate" },
  { v: 18, suffix: "x", label: "Best ROAS, paid social" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const dur = 1600;
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(to * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="font-display text-7xl md:text-9xl text-ink tracking-tight tabular-nums">
      {n}
      <span className="text-bright">{suffix}</span>
    </span>
  );
};

const Results = () => {
  return (
    <section className="bg-paper-deep py-28 md:py-40 border-y border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3">
            <p className="font-mono-tag text-ink-muted reveal">[ 05 — Receipts ]</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-ink reveal">
              Numbers we
              <span className="italic font-light text-ink-soft"> actually own.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 md:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="reveal border-t border-ink/15 pt-6">
              <Counter to={s.v} suffix={s.suffix} />
              <p className="mt-6 text-ink-soft max-w-[20ch] leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
