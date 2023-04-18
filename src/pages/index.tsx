import Head from 'next/head'
import Link from 'next/link'

import CLUES from '../definitions/clueData'


function Home() {
    return (
        <>
            <Head>
                <title>Trivia Game | Home</title>
                <meta property="og:title" content="Trivia Game" key="title" />
            </Head>

            <div className='min-h-screen flex flex-col'>
                <main className="flex  flex-col items-center text-center">
                    <h1 className="header text-5xl pt-[calc(2rem_+_5vh+1vw)]">Computer Science Trivia</h1>

                    <div className='mt-28'>
                        <ul className="grid grid-cols-3 grid-rows-3 gap-6 list-none text-xl">
                            {CLUES.map(clue => (
                                <li className="flex" key={clue.id}>
                                    <ClueLink id={clue.id} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>

                <footer className='mt-auto self-center'>
                    <p className='p-6'>
                        by <a className="hover:bg-yellow-50 hover:text-black" href='https://www.daisybarrette.com/'>Daisy Barrette</a> on <a className="hover:bg-yellow-50 hover:text-black" href='https://github.com/daisybarrette'>GitHub</a>
                    </p>
                </footer>
            </div>
        </>
    )
}

function ClueLink({ id }: { id: string }) {
    return (
        <Link
            className="py-10 px-12 border-white border-4 bg-main-background hover:bg-yellow-50 hover:text-black"
            aria-label="View clue"
            href={`/clue/${id}`}
        >
            {'?'}
        </Link>
    )
}

export default Home
