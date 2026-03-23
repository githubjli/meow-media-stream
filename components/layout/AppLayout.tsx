import { Layout } from 'antd';
import { PropsWithChildren } from 'react';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';

const { Content } = Layout;

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <Layout className="min-h-screen !bg-brand-background" hasSider>
      <Sidebar />
      <Layout>
        <TopNav />
        <Content className="mx-auto w-full max-w-[1600px] px-4 py-6 lg:px-6">{children}</Content>
      </Layout>
    </Layout>
  );
}
