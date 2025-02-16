import Image from "next/image";

export const Pic = ({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) => {
  return <Image priority src={src} alt={alt} height={height} width={width} />;
};
