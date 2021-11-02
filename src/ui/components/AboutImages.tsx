import Image from "next/image";

interface Props {
    src: any;
    alt: string;
}

export default function AboutImages({src, alt}: Props) {
    return (
        <div className='shadow-semiDark '>
                <Image src={src} alt={alt} layout='fixed' />
        </div>
    )
}