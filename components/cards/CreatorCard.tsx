import { Avatar, Button, Card } from 'antd';
import { Creator } from '@/lib/api/types';

export function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <Card className="brand-card border-0">
      <div className="flex items-center gap-4">
        <Avatar size={56} src={creator.avatar}>{creator.name[0]}</Avatar>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold">{creator.name}</h3>
          <p className="text-sm text-brand-muted">{creator.handle}</p>
          <p className="text-xs text-brand-secondary">{creator.specialty}</p>
        </div>
        <Button>Follow</Button>
      </div>
    </Card>
  );
}
