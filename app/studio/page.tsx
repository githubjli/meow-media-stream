'use client';

import { Card, Tabs } from 'antd';
import AppLayout from '@/components/layout/AppLayout';
import { EmptyState } from '@/components/common/EmptyState';

export default function StudioPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold">Creator Studio</h1>
          <p className="mt-1 text-sm text-brand-muted">Manage content, monitor live sessions, and plug analytics into the existing Django platform.</p>
        </div>
        <Card className="brand-card border-0">
          <Tabs items={[
            { key: 'overview', label: 'Overview', children: <EmptyState description="Overview widgets will connect to creator metrics and revenue endpoints." /> },
            { key: 'videos', label: 'My Videos', children: <EmptyState description="Video management connects cleanly to the backend media library." /> },
            { key: 'live', label: 'Live Sessions', children: <EmptyState description="Live session history and controls land here." /> },
            { key: 'analytics', label: 'Analytics', children: <EmptyState description="Analytics placeholder ready for chart integration." /> },
          ]} />
        </Card>
      </div>
    </AppLayout>
  );
}
