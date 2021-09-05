interface Props {
    text: string;
}

export default function HeaderHoverAnimate({text}: Props) {
    return (
        <h2 className='text-[3.5rem] tracking-[.2rem] uppercase font-bold bg-gradient-to-r from-primary-light to-primary-dark
                            inline-block bg-clip-text text-transparent  transition-all duration-200 hover:skew-x-[15deg]
                            hover:scale-110 hover: hover:skew-y-2 hover:text-shadow-xl '>
            {text}
        </h2>
    )
}