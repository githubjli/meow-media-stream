'use client';

import { Button } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { useCopyToClipboard } from '@/lib/hooks/useCopyToClipboard';

export function CopyButton({ value, label = 'Copy' }: { value: string; label?: string }) {
  const copy = useCopyToClipboard();

  return (
    <Button icon={<CopyOutlined />} onClick={() => copy(value)}>
      {label}
    </Button>
  );
}
