import { Card } from 'antd';
import Link from 'next/link';
import { LiveStream } from '@/lib/api/types';
import { Logo } from '@/components/common/Logo';
import { StatusBadge } from '@/components/common/StatusBadge';

export function LiveCard({ stream }: { stream: LiveStream }) {
  return (
    <Link href={`/videos/${stream.id}`}>
      <Card hoverable className="brand-card overflow-hidden border-0">
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#FFF4D8]">
          {stream.thumbnail ? (
            <img src={stream.thumbnail} alt={stream.title} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
          ) : (
            <div className="brand-gradient flex h-full items-center justify-center">
              <Logo size="large" showWordmark={false} />
            </div>
          )}
          <div className="absolute left-3 top-3 flex items-center gap-2">
            <StatusBadge status={stream.status} />
          </div>
          {stream.status === 'live' ? (
            <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
              {stream.viewers?.toLocaleString() ?? 0} watching
            </div>
          ) : null}
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="line-clamp-2 text-base font-semibold text-brand-text">{stream.title}</h3>
          <p className="text-sm text-brand-secondary">{stream.creator.name}</p>
          <p className="text-xs text-brand-muted">{stream.category?.name ?? 'General'} · {stream.status === 'ended' ? 'Replay available soon' : 'Tap to open room'}</p>
        </div>
      </Card>
    </Link>
  );
}
