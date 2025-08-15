import React, { useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ReelCardProps {
  videoSrc: string; // from /public folder or external link
  poster?: string; // HTML video poster
  thumbnail?: string; // fallback thumbnail if no poster
  username: string;
  displayName?: string;
  caption?: string;
}

export default function InstagramReelCard({
  videoSrc,
  poster,
  thumbnail,
  username,
  displayName,
  caption,
}: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }

  function toggleMute(e?: React.MouseEvent) {
    e?.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  return (
    <Card className="max-w-[380px] max-h-[840px] w-full rounded-2xl overflow-hidden shadow-lg bg-white m-auto">
      {/* Header */}
      <CardHeader className="flex items-center gap-3 p-4 pt-0 pb-0">
        {/* Avatar replacement */}
        <div className="w-[50px] h-[50px] relative rounded-full overflow-hidden">
          <Image
            src="/logo1.png"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="font-medium text-sm">{displayName ?? username}</div>
          <div className="text-xs text-muted-foreground">@{username}</div>
        </div>
        <Link href='https://www.instagram.com/dpsmunjodhpur/' target='_blank'>
        <Button size="sm" variant="outline">
          Follow
        </Button>
        </Link>
      </CardHeader>

      {/* Video frame */}
      <div
        className="relative bg-black aspect-[9/16] cursor-pointer"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster ?? thumbnail}
          className="w-full h-full object-cover"
          preload="metadata"
          playsInline
          muted={muted}
        />

        {!isPlaying && (
          <>
            {!poster && thumbnail && (
              <Image
                src={thumbnail}
                alt="Video thumbnail"
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Play className="w-8 h-8 text-white" />
            </div>
          </>
        )}

        <button
          onClick={toggleMute}
          className="absolute bottom-3 right-3 p-2 bg-white/90 rounded-full shadow"
        >
          {muted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Caption */}
      {caption && (
        <CardContent className="p-4 text-sm text-muted-foreground">
          {caption}
        </CardContent>
      )}
    </Card>
  );
}


