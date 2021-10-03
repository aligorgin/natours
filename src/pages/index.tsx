import type {NextPage} from 'next';
import Head from 'next/head';
import App from "../ui/natours/App";

const Home: NextPage = () => {
    return (
        <html style={{scrollBehavior:'smooth'}} lang={'en'}>
            <Head>
                <title>Css Yard</title>
                <meta name='description' content='a yard for practicing advance css'/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
                      rel="stylesheet"/>
                <link rel='icon' href='/natours-img/favicon.png'/>
            </Head>
            <App/>
        </html>
    )
}

export default Home


