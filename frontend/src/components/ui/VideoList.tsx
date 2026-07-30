import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed';
import type { Video } from '@/types';

interface VideoListProps {
  videos: readonly Video[];
  notice?: string;
}

export function VideoList({ videos, notice }: VideoListProps) {
  return (
    <>
      <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {videos.map((video) => (
          <li key={video.id}>
            <YouTubeEmbed youtubeId={video.youtubeId} title={video.title} />
            <p className="mt-3 text-sm font-medium">{video.title}</p>
            <p className="text-xs text-ink-faint">{video.channel}</p>
          </li>
        ))}
      </ul>
      {notice !== undefined && <p className="mt-6 text-xs text-ink-faint">{notice}</p>}
    </>
  );
}
