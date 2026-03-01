"use client";

import * as React from "react";

function extractYouTubeId(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.replace("/", "");
    if (u.hostname.endsWith("youtube.com")) return u.searchParams.get("v");
  } catch {
    // ignore
  }
  return null;
}

export function YouTubeLite({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  React.useEffect(() => {
    // Registers the <lite-youtube> custom element on the client.
    void import("lite-youtube-embed");
  }, []);

  const id = React.useMemo(() => extractYouTubeId(url), [url]);
  if (!id) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/80 shadow-sm">
      <lite-youtube
        videoid={id}
        playlabel={`Play video: ${title}`}
        style={{ width: "100%" }}
      />
    </div>
  );
}

