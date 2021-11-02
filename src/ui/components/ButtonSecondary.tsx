import {ArrowNarrowRightIcon} from "@heroicons/react/solid";

interface Props {
    text: string;
}

export default function ButtonSecondary({text}: Props) {
    return (
        <div className='text-[1.6rem] text-primary inline-block border-b-[1px] border-solid border-primary p-[3px] transition-all duration-200
                        transform hover:bg-primary hover:text-white hover:shadow-light hover:translate-y-[-2px]
                        active:shadow-lessLight active:translate-y-0 group'>
            {text}
            <ArrowNarrowRightIcon className='ml-2 w-6 h-6 text-primary inline-block group-hover:text-white transition duration-200'/>
        </div>
    )
}