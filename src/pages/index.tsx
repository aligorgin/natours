import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Basic from "~/ui/Basic";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Css Yard</title>
                <meta name='description' content='a yard for practicing advance css'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Basic/>
        </div>
    )
}

export default Home


