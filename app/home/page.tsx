'use client';

import { useEffect, useState } from 'react';
import { Button, Card, Tag } from 'antd';
import Link from 'next/link';
import VideoCard from '@/components/cards/VideoCard';
import CreatorCard from '@/components/cards/CreatorCard';
import LiveCard from '@/components/live/LiveCard';
import SectionHeader from '@/components/common/SectionHeader';
import AppLayout from '@/components/layout/AppLayout';
import { apiGet } from '@/lib/api/client';
import { categories, creators, sampleStreams } from '@/lib/api/media';
import type { Video } from '@/lib/api/types';

function normalizeVideo(video: Record<string, any>): Video {
  return {
    id: String(video.id ?? video.pk ?? crypto.randomUUID()),
    title: video.title ?? video.name ?? 'Untitled video',
    thumbnail: video.thumbnail ?? video.thumbnail_url ?? video.cover,
    playbackUrl: video.playbackUrl ?? video.playback_url ?? video.stream_url,
    duration: video.duration,
    views: video.views ?? video.view_count,
    publishedAt: video.publishedAt ?? video.published_at ?? video.created_at,
    description: video.description,
    creator: {
      id: String(video.creator?.id ?? video.user?.id ?? 'unknown-creator'),
      name: video.creator?.name ?? video.creator?.username ?? video.user?.username ?? 'Unknown creator',
      handle: video.creator?.handle ?? `@${video.creator?.username ?? video.user?.username ?? 'creator'}`,
      avatar: video.creator?.avatar ?? video.user?.avatar,
    },
    category: video.category
      ? {
          id: String(video.category.id ?? video.category.slug ?? video.category.name ?? 'category'),
          name: video.category.name ?? video.category.title ?? 'General',
          slug: video.category.slug ?? String(video.category.id ?? video.category.name ?? 'general').toLowerCase(),
        }
      : undefined,
  };
}

export default function HomePage() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    apiGet('/public/videos/?page_size=6')
      .then((data) => {
        console.log('VIDEOS:', data);
        const results = Array.isArray(data?.results) ? data.results : Array.isArray(data) ? data : [];
        setVideos(results.map(normalizeVideo));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <AppLayout>
      <div className="space-y-10">
        <section className="brand-gradient brand-card overflow-hidden border border-[#f2e6c3] px-6 py-8 lg:px-10 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
            <div className="space-y-5">
              <Tag color="gold">Frontend v2</Tag>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-brand-text lg:text-6xl">Premium streaming experiences for video, live commerce, and creator growth.</h1>
              <p className="max-w-2xl text-base text-brand-secondary lg:text-lg">Meow Media Stream v2 is designed to scale with your existing Django APIs while delivering a polished, conversion-minded viewing and creator workflow.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/browse"><Button type="primary" size="large">Browse content</Button></Link>
                <Link href="/live/create"><Button size="large">Start streaming</Button></Link>
              </div>
            </div>
            <Card className="brand-card border-0 bg-white/70">
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-brand-muted">Today&apos;s momentum</div>
                  <div className="mt-1 text-3xl font-semibold">128K active viewers</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-brand-muted">Live now</div>
                    <div className="mt-2 text-xl font-semibold">24 streams</div>
                  </div>
                  <div className="rounded-2xl bg-white p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-brand-muted">New uploads</div>
                    <div className="mt-2 text-xl font-semibold">316 videos</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section>
          <SectionHeader title="Featured categories" subtitle="Clear content lanes for discovery and growth." />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {categories.slice(0, 5).map((category) => (
              <Card key={category.id} className="brand-card border-0 bg-white/90" hoverable>
                <div className="text-lg font-semibold">{category.name}</div>
                <p className="mt-2 text-sm text-brand-muted">Purpose-built space for premium {category.name.toLowerCase()} streams and videos.</p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Latest videos" subtitle="Fresh uploads optimized for retention." actionLabel="See all" actionHref="/browse" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {videos.map((video) => <VideoCard key={video.id} video={video} />)}
          </div>
        </section>

        <section>
          <SectionHeader title="Live now" subtitle="Real-time rooms with live state visibility." actionLabel="Explore live" actionHref="/live" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sampleStreams.map((stream) => <LiveCard key={stream.id} stream={stream} />)}
          </div>
        </section>

        <section>
          <SectionHeader title="Recommended creators" subtitle="Partners ready to grow audiences and monetize." />
          <div className="grid gap-5 lg:grid-cols-3">
            {creators.map((creator) => <CreatorCard key={creator.id} creator={creator} />)}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
