import { Card } from '@/components/ui/Card';
import { PlayIcon } from '@/components/ui/icons';
import type { Video } from '@/types';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Card interactive className="h-full p-6">
      <div className="flex aspect-video items-center justify-center rounded-xl border border-line bg-carbon">
        <span className="flex size-12 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-brand">
          <PlayIcon />
        </span>
      </div>
      <h3 className="mt-5 text-lg leading-snug font-semibold tracking-tight">{video.title}</h3>
      <p className="mt-2 text-sm text-ink-muted">{video.channel}</p>
      <p className="mt-4 text-xs text-ink-faint">{video.duration}</p>
    </Card>
  );
}
