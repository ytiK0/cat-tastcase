import styles from "./image.module.css";

interface ImageProps {
  src: string,
  alt: string
}

export default function Image({src, alt}: ImageProps) {
  return (
    <img className={styles.image} src={src} alt={alt} />
  );
}
