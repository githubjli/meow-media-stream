import { Input, Select, Tag } from 'antd';
import { VideoCard } from '@/components/cards/VideoCard';
import { AppLayout } from '@/components/layout/AppLayout';
import { categories, sampleVideos } from '@/lib/api/media';

export default function BrowsePage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 rounded-[20px] bg-white p-5 shadow-soft lg:flex-row">
          <Input.Search className="flex-1" placeholder="Search by title, creator, or category" size="large" />
          <Select size="large" defaultValue="latest" options={[{ value: 'latest', label: 'Latest' }, { value: 'popular', label: 'Most viewed' }, { value: 'live-first', label: 'Live first' }]} className="min-w-48" />
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => <Tag key={category.id} className="rounded-full px-4 py-2 text-sm">{category.name}</Tag>)}
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sampleVideos.map((video) => <VideoCard key={video.id} video={video} />)}
        </div>
      </div>
    </AppLayout>
  );
}
