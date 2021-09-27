interface Props {
    text: string;
}

export default function NavItem({text}: Props) {
    return (
        <>
            <li>
                <a href="#">
                    {text}
                </a>
            </li>
        </>
    )
}