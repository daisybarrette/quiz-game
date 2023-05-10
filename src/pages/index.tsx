import React, { useContext } from 'react'

import CLUES from '../definitions/clueData'
import Layout from '../components/Layout'
import PrimaryLink, { primaryLinkStyles } from '../components/PrimaryLink'
import { PlayerContext } from '../components/PlayerContext'


function Home() {
    const { gameState, } = useContext(PlayerContext);
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
                                <ClueLink
                                    id={clue.id}
                                    isAnswered={!gameState.unanswered.includes(clue.id)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </Layout >
    )
}

function ClueLink({ id, isAnswered }: { id: string, isAnswered: boolean }) {
    const value = `$${id}00`
    const spacingStyles = "w-full py-[calc(0.7rem_+_2vw)]"
    const answeredStyles = 'shadow-inner shadow-black bg-dark-blue'

    return (
        isAnswered ? (
            <div className={`${spacingStyles} ${answeredStyles}`}/>
        )
        :
        (<PrimaryLink
            customStyles={spacingStyles}
            aria-label="View clue"
            href={`/clue/${id}`}
        >
            {value}
        </PrimaryLink>)
    )
}

export default Home
