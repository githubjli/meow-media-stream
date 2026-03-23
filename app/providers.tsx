'use client';

import { App, ConfigProvider, theme } from 'antd';
import { PropsWithChildren } from 'react';
import { tokens } from '@/styles/tokens';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: tokens.colors.primary,
          colorText: tokens.colors.text,
          colorTextSecondary: tokens.colors.muted,
          colorBgLayout: tokens.colors.background,
          colorBgContainer: '#FFFFFF',
          borderRadius: tokens.radius.md,
          fontFamily: 'Arial, Helvetica, sans-serif',
        },
        components: {
          Card: {
            borderRadiusLG: tokens.radius.md,
          },
          Layout: {
            siderBg: '#fffaf0',
            bodyBg: tokens.colors.background,
            headerBg: 'rgba(255, 252, 243, 0.92)',
          },
          Button: {
            primaryShadow: 'none',
          },
        },
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  );
}
