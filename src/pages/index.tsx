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
            <main className="flex min-h-screen flex-col items-center pt-24 text-center">
                <h1 className="header text-5xl">Computer Science Trivia</h1>

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
