import { Card, Input } from 'antd';
import CopyButton from '@/components/common/CopyButton';

export default function StreamInfoPanel({ rtmpUrl, streamKey, playbackUrl }: { rtmpUrl: string; streamKey: string; playbackUrl: string; }) {
  const items = [
    { label: 'RTMP URL', value: rtmpUrl },
    { label: 'Stream Key', value: streamKey },
    { label: 'Playback URL', value: playbackUrl },
  ];

  return (
    <Card className="brand-card border-0">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Stream setup</h3>
        {items.map((item) => (
          <div key={item.label} className="space-y-2">
            <div className="text-sm font-medium text-brand-secondary">{item.label}</div>
            <div className="flex gap-2 max-sm:flex-col">
              <Input value={item.value} readOnly />
              <CopyButton value={item.value} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
