import Image from "next/image";
import nat4 from "../../../../public/natours-img/nat-4.jpg";
import FeatureBox from "../components/FeatureBox";
import {ClockIcon, GlobeIcon, HeartIcon, MapIcon} from "@heroicons/react/outline";
import Words from "../contents/Words";

export default function Features() {
    return (
        <>
            <section className='mt-[-10rem] xl:mt-[-15rem] relative py-[20rem] px-0 bg-gradient-to-br from-[rgba(126,213,111,0.8)] to-[rgba(40,180,131,0.8)] skew-y-[-7deg]'>

                <div className='absolute top-0 left-0 w-full h-full opacity-20'>
                    <Image src={nat4} alt='nature image' layout="fill" objectFit="cover"/>
                </div>

                <div className='max-w-[50rem] lg:max-w-[114rem] mx-auto'>
                    <div className='grid px-12 md:px-0 place-items-center gap-y-12 grid-cols-1 md:grid-cols-2 md:gap-12  xl:grid-cols-4 xl:gap-[6rem]'>

                        <FeatureBox
                            icon={GlobeIcon}
                            header={Words.featureHeader1}
                            text={Words.p2}
                        />

                        <FeatureBox
                            icon={ClockIcon}
                            header={Words.featureHeader2}
                            text={Words.p2}
                        />

                        <FeatureBox
                            icon={MapIcon}
                            header={Words.featureHeader3}
                            text={Words.p2}
                        />

                        <FeatureBox
                            icon={HeartIcon}
                            header={Words.featureHeader4}
                            text={Words.p2}
                        />


                    </div>
                </div>
            </section>
        </>
    )
}