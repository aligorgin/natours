interface Props {
    text: string,
    isLastOne?: boolean
}

export default function Paragraph({text}: Props) {
    return (
        <p className={`mb-[3rem] text-[1.6rem]`}>
            {text}
        </p>
    )
}