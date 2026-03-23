import { Avatar, Card, List } from 'antd';
import { AppLayout } from '@/components/layout/AppLayout';
import { VideoPlayer } from '@/components/player/VideoPlayer';
import { CreatorCard } from '@/components/cards/CreatorCard';
import { VideoCard } from '@/components/cards/VideoCard';
import { sampleVideos } from '@/lib/api/media';

export default async function VideoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const video = sampleVideos.find((item) => item.id === id) ?? sampleVideos[0];

  return (
    <AppLayout>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-6">
          <VideoPlayer src={video.playbackUrl} poster={video.thumbnail} />
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold">{video.title}</h1>
            <p className="text-sm text-brand-muted">{video.views?.toLocaleString()} views · {video.publishedAt}</p>
            <Card className="brand-card border-0">
              <div className="flex items-center gap-4">
                <Avatar size={56}>{video.creator.name[0]}</Avatar>
                <div>
                  <div className="font-semibold">{video.creator.name}</div>
                  <div className="text-sm text-brand-muted">{video.creator.handle}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-brand-secondary">{video.description ?? 'Description will populate from the Django API.'}</p>
            </Card>
          </div>
          <Card className="brand-card border-0" title="Comments">
            <List dataSource={[1,2,3]} renderItem={(item: number) => (
              <List.Item key={item}>
                <List.Item.Meta title={`Viewer ${item}`} description="Great production quality. This shell is ready to bind to real comments." />
              </List.Item>
            )} />
          </Card>
        </div>
        <div className="space-y-6">
          <CreatorCard creator={video.creator} />
          <div>
            <h2 className="mb-4 text-xl font-semibold">Related videos</h2>
            <div className="space-y-4">
              {sampleVideos.map((related) => <VideoCard key={related.id} video={related} />)}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
