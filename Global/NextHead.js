import Head from "next/head";

export const NextHead = () => {
    return (
        <Head>
            {/* Favicon */}
            <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />

            {/* Title */}
            <title>Landing Page Website</title>

            {/* Google Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
    );
};