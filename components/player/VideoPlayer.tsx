'use client';

import Hls from 'hls.js';
import { Button, Spin } from 'antd';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function VideoPlayer({ src, poster }: { src?: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [waiting, setWaiting] = useState(!src);
  const [retryKey, setRetryKey] = useState(0);
  const isHls = useMemo(() => src?.includes('.m3u8'), [src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) {
      setWaiting(true);
      return;
    }

    let hls: Hls | undefined;
    setWaiting(false);

    if (isHls && Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.ERROR, () => setWaiting(true));
    } else {
      video.src = src;
    }

    const timer = window.setInterval(() => {
      if (waiting) {
        setRetryKey((current: number) => current + 1);
      }
    }, 4000);

    return () => {
      window.clearInterval(timer);
      hls?.destroy();
    };
  }, [src, isHls, retryKey, waiting]);

  return (
    <div className="brand-card overflow-hidden bg-black">
      <div className="relative aspect-video">
        <video ref={videoRef} poster={poster} controls playsInline className="h-full w-full" />
        {waiting ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/65 text-white">
            <Spin size="large" />
            <div className="text-center">
              <p className="text-lg font-semibold">Waiting for stream...</p>
              <p className="text-sm text-white/75">We&apos;ll retry automatically every few seconds.</p>
            </div>
            <Button onClick={() => setRetryKey((current: number) => current + 1)}>Retry now</Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
