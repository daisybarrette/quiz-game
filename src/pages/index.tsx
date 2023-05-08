import Link from 'next/link'

import CLUES from '../definitions/clueData'
import Layout from '../components/Layout'
import PrimaryLink from '../components/PrimaryLink'


function Home() {
    return (
        <Layout
            pageTitle="Trivia Game | Home"
        >
            <main className="flex flex-col items-center text-center">
                <h1 className="main-title header text-5xl py-[calc(2rem_+_2vh+1vw)]">Computer Science Trivia</h1>

                <div className='w-full mt-2.5 text-center p-2.5'>
                    <ul className="m-auto min-w-[40%] max-w-xs grid grid-cols-3 grid-rows-3 gap-6 auto-cols-fr justify-items-center list-none text-xl">
                        {CLUES.map(clue => (
                            <li className="flex w-full shadow-md shadow-black" key={clue.id}>
                                <ClueLink id={clue.id} />
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </Layout >

    )
}

function ClueLink({ id }: { id: string }) {
    const value = `$${id}00`
    return (
        <PrimaryLink
            customStyles="w-full py-[calc(0.7rem_+_2vw)]"
            aria-label="View clue"
            href={`/clue/${id}`}
        >
            {value}
        </PrimaryLink>
    )
}

export default Home
