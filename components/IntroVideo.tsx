"use client";

import { useEffect, useRef, useState } from "react";

const FADE_DURATION_MS = 500;

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!video || reducedMotion) {
      setIsVisible(false);
      return;
    }

    let fadeTimer: number | undefined;
    const skipIntro = () => {
      window.clearTimeout(fadeTimer);
      setIsVisible(false);
    };
    const finishIntro = () => {
      setIsFading(true);
      fadeTimer = window.setTimeout(() => setIsVisible(false), FADE_DURATION_MS);
    };

    video.addEventListener("ended", finishIntro);
    video.addEventListener("error", skipIntro);

    video.play().catch(skipIntro);

    return () => {
      video.removeEventListener("ended", finishIntro);
      video.removeEventListener("error", skipIntro);
      window.clearTimeout(fadeTimer);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isVisible ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`intro-video${isFading ? " intro-video--fading" : ""}`} aria-hidden="true">
      <video
        ref={videoRef}
        className="intro-video__media"
        src="/intro_video.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="/sumix-logo.mp4" type="video/mp4" />
        <source src="/intro_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
