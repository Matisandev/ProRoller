import { VideoCard } from '@/components/cards/VideoCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { Section } from '@/components/ui/Section';
import { sectionIds } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getLatestVideos } from '@/services';

export async function VideosSection() {
  const { videos: messages } = getMessages();
  const videos = await getLatestVideos();

  return (
    <Section id={sectionIds.videos} eyebrow={messages.eyebrow} title={messages.title}>
      <CardGrid
        items={videos}
        getKey={(video) => video.id}
        renderItem={(video) => <VideoCard video={video} />}
        emptyMessage={messages.empty}
      />
    </Section>
  );
}
