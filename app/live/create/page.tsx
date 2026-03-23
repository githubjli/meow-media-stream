'use client';

import { CheckCircleOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Radio, Select, Space, Steps } from 'antd';
import AppLayout from '@/components/layout/AppLayout';
import { StreamInfoPanel } from '@/components/live/StreamInfoPanel';
import { categories } from '@/lib/api/media';

export default function GoLivePage() {
  return (
    <AppLayout>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-6">
          <Card className="brand-card border-0">
            <div className="mb-6 flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-start">
              <div>
                <h1 className="text-3xl font-semibold">Go Live</h1>
                <p className="mt-1 text-sm text-brand-muted">Create a polished broadcast setup for camera-first or encoder-based streaming.</p>
              </div>
              <Button type="primary" icon={<VideoCameraOutlined />}>Start session</Button>
            </div>
            <Form layout="vertical" className="space-y-2">
              <Form.Item label="Title"><Input size="large" placeholder="Give your stream a conversion-ready title" /></Form.Item>
              <Form.Item label="Description"><Input.TextArea rows={4} placeholder="Tell viewers what they will learn or buy." /></Form.Item>
              <Form.Item label="Category"><Select size="large" options={categories.map((category) => ({ value: category.slug, label: category.name }))} /></Form.Item>
              <Form.Item label="Broadcast mode">
                <Radio.Group defaultValue="camera">
                  <Space direction="vertical">
                    <Radio value="camera">Start with Camera</Radio>
                    <Radio value="stream-key">Use Stream Key (OBS)</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </Form>
          </Card>

          <Card className="brand-card border-0" title="Device readiness">
            <Steps direction="vertical" items={[
              { title: 'Camera detected', description: 'WebRTC preview shell ready for future integration.', status: 'finish', icon: <CheckCircleOutlined /> },
              { title: 'Microphone checked', description: 'Audio source looks healthy.', status: 'finish', icon: <CheckCircleOutlined /> },
              { title: 'Stream destination verified', description: 'RTMP destination generated from backend payload.', status: 'process' },
            ]} />
          </Card>
        </div>

        <div className="space-y-6">
          <StreamInfoPanel rtmpUrl="rtmp://stream.meowmedia.example/live" streamKey="mm_live_4g9f-5hs7-demo-key" playbackUrl="https://stream.meowmedia.example/hls/live-session.m3u8" />
          <Card className="brand-card border-0">
            <h3 className="mb-3 text-lg font-semibold">Camera mode preview</h3>
            <div className="brand-gradient flex aspect-video items-center justify-center rounded-[20px] border border-dashed border-[#e7d6a5] text-center text-brand-secondary">
              Camera/WebRTC preview placeholder for frontend v2.
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
