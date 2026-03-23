import { Card, Tag } from 'antd';
import Link from 'next/link';
import { Video } from '@/lib/api/types';

export default function VideoCard({ video }: { video: Video }) {
  return (
    <Link href={`/videos/${video.id}`}>
      <Card hoverable className="brand-card overflow-hidden border-0" cover={
        <div className="relative aspect-video overflow-hidden bg-[#F8E8BD]">
          {video.thumbnail ? <img src={video.thumbnail} alt={video.title} className="h-full w-full object-cover transition duration-300 hover:scale-105" /> : <div className="flex h-full items-center justify-center text-brand-secondary">No thumbnail yet</div>}
          {video.duration ? <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-2 py-1 text-xs text-white">{video.duration}</span> : null}
        </div>
      }>
        <div className="space-y-2">
          {video.category ? <Tag color="gold">{video.category.name}</Tag> : null}
          <h3 className="line-clamp-2 text-base font-semibold text-brand-text">{video.title}</h3>
          <p className="text-sm text-brand-secondary">{video.creator.name} · {video.views?.toLocaleString() ?? '—'} views</p>
          <p className="text-xs text-brand-muted">{video.publishedAt ?? 'Just now'}</p>
        </div>
      </Card>
    </Link>
  );
}
