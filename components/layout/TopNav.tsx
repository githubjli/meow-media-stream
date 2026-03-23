'use client';

import { BulbOutlined, MenuOutlined, SettingOutlined, UploadOutlined, UserOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Drawer, Input, Space } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '@/components/common/Logo';
import Sidebar from './Sidebar';

export default function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#f1e6c8] bg-[rgba(255,252,243,0.92)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1600px] items-center gap-3 px-4 py-4 lg:px-6">
        <Button className="lg:!hidden" icon={<MenuOutlined />} onClick={() => setOpen(true)} />
        <Link href="/home" className="shrink-0"><Logo size="medium" /></Link>
        <div className="mx-auto hidden max-w-xl flex-1 lg:block">
          <Input.Search placeholder="Search videos, creators, live streams" size="large" />
        </div>
        <Space size="middle" className="ml-auto">
          <Link href="/live/create"><Button type="primary" icon={<VideoCameraAddOutlined />}>Go Live</Button></Link>
          <Button icon={<UploadOutlined />} />
          <Button icon={<SettingOutlined />} />
          <Button icon={<BulbOutlined />} />
          <Button>Login</Button>
          <Avatar icon={<UserOutlined />} />
        </Space>
      </div>
      <Drawer open={open} onClose={() => setOpen(false)} placement="left" width={300} styles={{ body: { padding: 0 } }}>
        <Sidebar />
      </Drawer>
    </header>
  );
}
