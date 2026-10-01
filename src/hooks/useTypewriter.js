import { useEffect, useState } from "react";

/**
 * Hook to type out text one character at a time.
 */
export function useTypewriter(
  text,
  { speed = 40, delay = 0, enabled = true, instant = false, loop = false, loopDelay = 5000 } = {}
) {
  const [count, setCount] = useState(instant ? text.length : 0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (instant) {
      setCount(text.length);
      return;
    }

    setCount(0);
    if (!enabled) return;

    let i = 0;
    let interval;

    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, delay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, delay, enabled, instant, cycle]);

  useEffect(() => {
    if (!loop || instant || count < text.length) return;

    const timer = setTimeout(() => {
      setCycle((c) => c + 1);
    }, loopDelay);

    return () => clearTimeout(timer);
  }, [loop, loopDelay, instant, count, text.length]);

  return { typed: text.slice(0, count), done: count >= text.length };
}

/**
 * Coordinated typewriter hook for Hero eyebrow and headline.
 * Cycles the entire text with a configurable pause (default: 5 seconds)
 * while keeping layout locked and accessible.
 */
export function useHeroTypewriter(
  eyebrowText,
  headlineText,
  {
    eyebrowSpeed = 28,
    headlineSpeed = 36,
    initialDelay = 400,
    loopDelay = 5000,
    instant = false,
  } = {}
) {
  const [eyebrowCount, setEyebrowCount] = useState(instant ? eyebrowText.length : 0);
  const [headlineCount, setHeadlineCount] = useState(instant ? headlineText.length : 0);
  // 'eyebrow' -> 'pause' -> 'headline' -> 'waiting'
  const [phase, setPhase] = useState(instant ? "waiting" : "eyebrow");
  const [hasFinishedOnce, setHasFinishedOnce] = useState(instant);

  useEffect(() => {
    if (instant) {
      setEyebrowCount(eyebrowText.length);
      setHeadlineCount(headlineText.length);
      setPhase("waiting");
      setHasFinishedOnce(true);
      return;
    }

    let timer;
    let interval;

    if (phase === "eyebrow") {
      setHeadlineCount(0);
      let current = 0;
      timer = setTimeout(() => {
        interval = setInterval(() => {
          current += 1;
          setEyebrowCount(current);
          if (current >= eyebrowText.length) {
            clearInterval(interval);
            setPhase("pause");
          }
        }, eyebrowSpeed);
      }, initialDelay);
    } else if (phase === "pause") {
      timer = setTimeout(() => {
        setPhase("headline");
      }, 180);
    } else if (phase === "headline") {
      let current = 0;
      interval = setInterval(() => {
        current += 1;
        setHeadlineCount(current);
        if (current >= headlineText.length) {
          clearInterval(interval);
          setPhase("waiting");
          setHasFinishedOnce(true);
        }
      }, headlineSpeed);
    } else if (phase === "waiting") {
      // Pause for loopDelay (5s), then start cycling the entire text again
      timer = setTimeout(() => {
        setEyebrowCount(0);
        setHeadlineCount(0);
        setPhase("eyebrow");
      }, loopDelay);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [
    phase,
    eyebrowText,
    headlineText,
    eyebrowSpeed,
    headlineSpeed,
    initialDelay,
    loopDelay,
    instant,
  ]);

  return {
    eyebrowTyped: eyebrowText.slice(0, eyebrowCount),
    eyebrowDone: eyebrowCount >= eyebrowText.length,
    headlineTyped: headlineText.slice(0, headlineCount),
    headlineDone: headlineCount >= headlineText.length,
    showEyebrowCursor: phase === "eyebrow",
    showHeadlineCursor: phase === "headline" || phase === "pause",
    isReady: hasFinishedOnce,
  };
}