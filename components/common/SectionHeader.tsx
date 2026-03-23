import { Button } from 'antd';
import Link from 'next/link';

export function SectionHeader({ title, subtitle, actionLabel, actionHref }: { title: string; subtitle?: string; actionLabel?: string; actionHref?: string; }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-semibold text-brand-text">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-brand-muted">{subtitle}</p> : null}
      </div>
      {actionLabel && actionHref ? (
        <Button type="link" className="px-0 text-brand-secondary">
          <Link href={actionHref}>{actionLabel}</Link>
        </Button>
      ) : null}
    </div>
  );
}
