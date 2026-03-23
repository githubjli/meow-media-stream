'use client';

import { DashboardOutlined, HomeOutlined, PlayCircleOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/common/Logo';
import { categories } from '@/lib/api/media';

const { Sider } = Layout;

const items = [
  { key: '/home', icon: <HomeOutlined />, label: <Link href="/home">Home</Link> },
  { key: '/browse', icon: <PlayCircleOutlined />, label: <Link href="/browse">Browse</Link> },
  { key: '/live', icon: <VideoCameraOutlined />, label: <Link href="/live">Live</Link> },
  { key: '/studio', icon: <DashboardOutlined />, label: <Link href="/studio">Studio</Link> },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <Sider breakpoint="lg" collapsedWidth={0} width={280} className="!bg-[#fffaf0] !px-4 !py-6">
      <div className="mb-8 px-2"><Logo variant="sidebar" size="medium" /></div>
      <Menu mode="inline" selectedKeys={[pathname]} items={items} className="!border-0 !bg-transparent" />
      <div className="mt-8 px-4">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-muted">Categories</div>
        <div className="space-y-2">
          {categories.slice(0, 5).map((category) => (
            <Link key={category.id} href={`/browse?category=${category.slug}`} className="block rounded-2xl px-4 py-3 text-sm text-brand-secondary transition hover:bg-white hover:shadow-soft">
              {category.name}
            </Link>
          ))}
          <button type="button" className="px-4 py-2 text-sm font-medium text-brand-muted">Show more</button>
        </div>
      </div>
    </Sider>
  );
}
