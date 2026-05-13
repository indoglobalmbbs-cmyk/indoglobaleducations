import type { ReactNode } from 'react';

interface LegalPageLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}

const LegalPageLayout = ({
  eyebrow,
  title,
  description,
  children,
}: LegalPageLayoutProps) => {
  return (
    <div className="bg-surface">
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-16 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl space-y-5">
            <div className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]">
              {eyebrow}
            </div>
            <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
            <p className="max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
              {description}
            </p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-primary/10 md:p-10">
            <div className="prose prose-slate max-w-none prose-headings:text-text prose-p:text-text-muted prose-li:text-text-muted">
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPageLayout;
