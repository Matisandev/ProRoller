import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { PlayIcon } from '@/components/ui/icons';
import type { Video } from '@/types';

interface VideoCardProps {
  video: Video;
}

const THUMBNAIL_WIDTH = 480;
const THUMBNAIL_HEIGHT = 360;

export function VideoCard({ video }: VideoCardProps) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <Card interactive className="flex h-full flex-col p-6">
        <div className="relative aspect-video overflow-hidden rounded-xl border border-line bg-carbon">
          <Image
            src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
            alt={video.title}
            width={THUMBNAIL_WIDTH}
            height={THUMBNAIL_HEIGHT}
            className="size-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-12 items-center justify-center rounded-full border border-brand/40 bg-night/70 text-brand backdrop-blur-sm">
              <PlayIcon />
            </span>
          </span>
        </div>
        <h3 className="mt-5 text-lg leading-snug font-semibold tracking-tight">{video.title}</h3>
        <p className="mt-2 text-sm text-ink-muted">{video.channel}</p>
      </Card>
    </a>
  );
}
