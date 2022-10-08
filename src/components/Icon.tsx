import Image from 'next/image';

type ImageExtensions = '.png' | '.jpg' | '.jpeg' | '';

interface IconProps {
  src: `/${string}${ImageExtensions}`;
  alt: string;
}

export const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return (
    <div className="justify-items-center w-36 h-36 rounded-full">
      <Image
        src={src}
        alt={alt}
        width={184}
        height={184}
        className="rounded-full"
        placeholder="blur"
        blurDataURL="loading..."
      />
    </div>
  );
};
