import clsx from "clsx";

interface Props {
    text: string;
    isAnimated?: boolean;
    color: string;
    textColor: string;
    colorAfter:string;
}

export default function Button({text, isAnimated, color, textColor, colorAfter}: Props) {
    return (
        <div
            className={clsx('text-[1.6rem] cursor-pointer transition-all duration-200 transform  hover:-translate-y-2 rounded-full uppercase ',
                'py-[1.5rem] px-[4rem] inline-block relative active:-translate-y-1 hover:shadow-light active:shadow-lessLight after:inline-block after:h-full after:w-full after:rounded-full after:absolute ',
                'after:top-0 after:left-0 after:-z-1 after:transform hover:after:scale-x-140 hover:after:scale-y-160 hover:after:opacity-0 hover:after:transition-all hover:after:duration-400 ',
                color, textColor, colorAfter, isAnimated && ' animate-moveInBottom animate-fill-backwards')}>
            {text}
        </div>
    )
}