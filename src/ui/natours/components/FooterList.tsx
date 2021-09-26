import clsx from "clsx";

interface Props {
    text: string;
    isLast?: boolean;
}

export default function FooterList({text, isLast}: Props) {
    return (
        <>
            <li className={clsx('inline-block', isLast ? '' : 'mr-[1.5rem]',)}>
                <a href="#" className='transition-all bg-[#333] text-[#f7f7f7] uppercase inline-block hover:text-primary hover:shadow-superDark hover:rotate-[5deg] hover:scale-[1.3]'>
                    {text}
                </a>
            </li>
        </>
    )
}