interface YouTubeEmbedProps {
  youtubeId: string;
  title: string;
}

/** Embed público de YouTube. ProRoller nunca descarga ni aloja los videos. */
export function YouTubeEmbed({ youtubeId, title }: YouTubeEmbedProps) {
  return (
    <div className="overflow-hidden rounded-card border border-line bg-carbon">
      <iframe
        title={title}
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
        className="aspect-video w-full"
      />
    </div>
  );
}
