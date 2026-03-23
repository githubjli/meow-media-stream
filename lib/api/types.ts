export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type Creator = {
  id: string;
  name: string;
  handle: string;
  avatar?: string;
  followers?: number;
  specialty?: string;
};

export type Video = {
  id: string;
  title: string;
  thumbnail?: string;
  playbackUrl?: string;
  duration?: string;
  views?: number;
  publishedAt?: string;
  category?: Category;
  creator: Creator;
  description?: string;
};

export type StreamStatus = 'live' | 'idle' | 'ended';

export type LiveStream = {
  id: string;
  title: string;
  status: StreamStatus;
  thumbnail?: string;
  playbackUrl?: string;
  viewers?: number;
  creator: Creator;
  category?: Category;
  startedAt?: string;
};
