'use client';

import { App } from 'antd';

export function useCopyToClipboard() {
  const { message } = App.useApp();

  return async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      message.success('Copied!');
      return true;
    } catch {
      message.error('Unable to copy');
      return false;
    }
  };
}
