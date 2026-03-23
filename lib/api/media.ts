import { Category, Creator, LiveStream, Video } from './types';

export const categories: Category[] = [
  { id: 'technology', name: 'Technology', slug: 'technology' },
  { id: 'education', name: 'Education', slug: 'education' },
  { id: 'gaming', name: 'Gaming', slug: 'gaming' },
  { id: 'entertainment', name: 'Entertainment', slug: 'entertainment' },
  { id: 'news', name: 'News', slug: 'news' },
  { id: 'wellness', name: 'Wellness', slug: 'wellness' },
];

export const creators: Creator[] = [
  { id: 'c1', name: 'Luna Studio', handle: '@lunastudio', followers: 128000, specialty: 'Cinematic tech reviews' },
  { id: 'c2', name: 'Pixel Paws', handle: '@pixelpaws', followers: 93000, specialty: 'Gaming streams' },
  { id: 'c3', name: 'Daily Whisker', handle: '@dailywhisker', followers: 54000, specialty: 'Business news live' },
];

export const sampleVideos: Video[] = [
  {
    id: 'vid-1',
    title: 'Building a polished livestream launch funnel',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    duration: '12:45',
    views: 42000,
    publishedAt: '2 hours ago',
    category: categories[0],
    creator: creators[0],
    description: 'A production-ready walkthrough for launching a live commerce event.',
    playbackUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
  },
  {
    id: 'vid-2',
    title: 'How creators structure high-converting member communities',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    duration: '08:17',
    views: 18000,
    publishedAt: 'Yesterday',
    category: categories[1],
    creator: creators[2],
  },
  {
    id: 'vid-3',
    title: 'Indie game launch stream teardown',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',
    duration: '15:03',
    views: 61000,
    publishedAt: '3 days ago',
    category: categories[2],
    creator: creators[1],
  },
];

export const sampleStreams: LiveStream[] = [
  {
    id: 'stream-1',
    title: 'Live product drop: studio gear edition',
    status: 'live',
    playbackUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    viewers: 1482,
    creator: creators[0],
    category: categories[0],
    thumbnail: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'stream-2',
    title: 'Ranked squad climb with the Pixel Paws crew',
    status: 'idle',
    viewers: 0,
    creator: creators[1],
    category: categories[2],
  },
  {
    id: 'stream-3',
    title: 'Market close recap and creator economy headlines',
    status: 'ended',
    viewers: 312,
    creator: creators[2],
    category: categories[4],
    thumbnail: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=80',
  },
];
