import clsx from 'clsx';
import { StreamStatus } from '@/lib/api/types';

const styles: Record<StreamStatus, string> = {
  live: 'bg-red-500 text-white live-pulse',
  idle: 'bg-stone-200 text-stone-700',
  ended: 'bg-stone-800 text-stone-100',
};

export default function StatusBadge({ status }: { status: StreamStatus }) {
  return (
    <span className={clsx('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]', styles[status])}>
      {status}
    </span>
  );
}
