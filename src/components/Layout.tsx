import React, { useContext } from 'react'
import Head from 'next/head'

import { PlayerContext } from './PlayerContext'

type LayoutProps = {
    pageTitle: string;
    children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
    const { gameState, } = useContext(PlayerContext);

    const scoreMessage = gameState.correct.length === 0 && gameState.incorrect.length === 0
        ? 'No answers yet'
        : `Correct: ${gameState.correct.length} Incorrect: ${gameState.incorrect.length}`

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta property="og:title" content={pageTitle} key="title" />
            </Head>

            <div className='min-h-screen flex flex-col'>
                <aside className='rounded-sm shadow-md shadow-black block w-[calc(12em+2vw)] ml-auto sticky top-0 p-2 bg-lightest-yellow text-center text-black text-shadow-none'>
                    {scoreMessage}
                </aside>

                {children}

                <footer className='mt-auto self-center'>
                    <p className='p-6'>
                        by <a className="underline hover:no-underline hover:bg-yellow-50 hover:text-black" href='https://www.daisybarrette.com/'>Daisy Barrette</a> on <a className="underline hover:no-underline hover:bg-yellow-50 hover:text-black" href='https://github.com/daisybarrette/quiz-game'>GitHub</a>
                    </p>
                </footer>
            </div>
        </>
    )
}

export default Layout
