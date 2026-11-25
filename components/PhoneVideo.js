import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";

// A looping screen recording with a pause button (WCAG 2.2.2).
// It doesn't autoplay when the visitor has asked for reduced motion.
export default function PhoneVideo({ src, poster, width, height, label }) {
	const video = useRef(null);
	const [playing, setPlaying] = useState(false);

	useEffect(() => {
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (!reduce) video.current?.play().catch(() => {});
	}, []);

	const toggle = () => {
		const v = video.current;
		if (!v) return;
		v.paused ? v.play().catch(() => {}) : v.pause();
	};

	return (
		<div className={styles.videoWrap}>
			<video
				ref={video}
				className={styles.phoneVideo}
				src={src}
				poster={poster}
				width={width}
				height={height}
				aria-label={label}
				muted
				loop
				playsInline
				preload="metadata"
				onPlay={() => setPlaying(true)}
				onPause={() => setPlaying(false)}
			/>
			<button type="button" className={styles.videoToggle} onClick={toggle}>
				{playing ? "Pause recording" : "Play recording"}
			</button>
		</div>
	);
}
