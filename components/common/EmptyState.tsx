import { Empty } from 'antd';

export default function EmptyState({ description }: { description: string }) {
  return <Empty description={description} image={Empty.PRESENTED_IMAGE_SIMPLE} />;
}
