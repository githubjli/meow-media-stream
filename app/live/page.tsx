import { Segmented } from 'antd';
import LiveCard from '@/components/live/LiveCard';
import AppLayout from '@/components/layout/AppLayout';
import SectionHeader from '@/components/common/SectionHeader';
import { sampleStreams } from '@/lib/api/media';

export default function LivePage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <SectionHeader title="Explore live" subtitle="Monitor live, idle, and ended rooms with clear stream state." />
        <Segmented options={['All', 'Live', 'Idle', 'Ended']} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sampleStreams.map((stream) => <LiveCard key={stream.id} stream={stream} />)}
        </div>
      </div>
    </AppLayout>
  );
}
