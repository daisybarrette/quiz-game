import React from 'react'
import Head from 'next/head'


type LayoutProps = {
    pageTitle: string;
    children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => (
    <>
        <Head>
            <title>{pageTitle}</title>
            <meta property="og:title" content={pageTitle} key="title" />
        </Head>

        <div className='min-h-screen flex flex-col'>
            {children}

            <footer className='mt-auto self-center'>
                <p className='p-6'>
                    by <a className="hover:bg-yellow-50 hover:text-black" href='https://www.daisybarrette.com/'>Daisy Barrette</a> on <a className="hover:bg-yellow-50 hover:text-black" href='https://github.com/daisybarrette'>GitHub</a>
                </p>
            </footer>
        </div>
    </>

)

export default Layout
