interface Props {
    text: string
}

export default function HeadingTerritory({text}: Props) {

    return (
        <h3 className='text-[1.6rem] mb-[1.5rem] font-bold uppercase'>
            {text}
        </h3>
    )
}