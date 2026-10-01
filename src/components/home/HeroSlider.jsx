import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import styles from "./Hero.module.css";

/**
 * Full-bleed background slider with a navy-to-amber overlay.
 * Slides are decorative (alt=""), so the controls carry the accessible labels.
 * Autoplay is off by default when the visitor prefers reduced motion.
 */
export const HeroSlider = ({ slides, interval = 6500 }) => {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(!prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) setPlaying(false);
  }, [prefersReducedMotion]);

  // A timeout keyed to `index` means clicking a dot also resets the timer.
  useEffect(() => {
    if (!playing || slides.length < 2) return;
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % slides.length),
      interval
    );
    return () => clearTimeout(id);
  }, [index, playing, interval, slides.length]);

  return (
    <div
      className={styles.slider}
      data-playing={playing}
      style={{ "--slide-ms": `${interval}ms` }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project photography"
    >
      <div className={styles.slides} aria-hidden="true">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`${styles.slide} ${i === index ? styles.slideActive : ""}`}
          >
            <img
              src={slide.src}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              draggable="false"
            />
          </div>
        ))}
      </div>

      <div className={styles.overlay} aria-hidden="true" />

      {slides.length > 1 && (
        <div className={styles.sliderControls}>
          <span className={styles.slideCaption}>{slides[index].label}</span>

          <div className={styles.dots}>
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                aria-label={`Show slide ${i + 1}: ${slide.label}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.pauseBtn}
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            onClick={() => setPlaying((p) => !p)}
          >
            {playing ? <Pause size={14} /> : <Play size={14} />}
          </button>
        </div>
      )}
    </div>
  );
};