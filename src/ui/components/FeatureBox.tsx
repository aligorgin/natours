import {ComponentProps, ComponentType} from "react";
import HeadingTerritory from "./HeadingTerritory";

interface Props {
    icon: ComponentType<ComponentProps<'svg'>>;
    header: string;
    text: string;
}

export default function FeatureBox({icon: Icon, header, text}: Props) {
    return (
        <div className='bg-white bg-opacity-80 text-[1.5rem] p-[2rem] lg:p-[2.5rem] text-center rounded-[3px] shadow-semiDarkLow
                        hover:translate-y-[-1.5rem] hover:scale-105 transition skew-y-[7deg] back-face-hidden'>

            <Icon className='w-[100px] h-[100px] mb-0 lg:mb-[1.5rem] text-primary-dark inline-block'/>

            <HeadingTerritory text={header}/>
            <p>
                {text}
            </p>

        </div>
    )
}