import React, { useState, useContext } from 'react'

import CLUES from '../../definitions/clueData'
import Layout from '../../components/Layout'
import PrimaryLink, { primaryLinkStyles } from '../../components/PrimaryLink'
import { PlayerContext } from '../../components/PlayerContext'
import { korinna } from '@/styles/fonts'


type ClueType = {
    id: string,
    clue: string,
    answer: string,
}

function Clue({ clueData }: { clueData: ClueType }) {
    const [hasRevealBeenClicked, sethasRevealBeenClicked] = useState(false)
    const { gameState, setGameState } = useContext(PlayerContext);

    return (
        <Layout
            pageTitle="Trivia Game | Clue"
        >
            <main className="flex flex-col items-center text-center">
                <h1 className={`${korinna.className} uppercase mt-[calc(1rem_+_10vh+5vw)] w-9/12 text-2xl`}>{`${clueData.clue}`}</h1>

                <div
                    className="flex flex-col justify-center w-[calc(12rem_+_20vw)] h-[calc(4rem_+_18vh)]"
                >
                    <button
                        className={`${hasRevealBeenClicked ? 'hidden' : 'block'} py-8 px-10 ${primaryLinkStyles}`}
                        type="button"
                        onClick={() => {
                            sethasRevealBeenClicked(true)
                            setGameState({
                                ...gameState,
                            })
                        }}
                    >
                        {'Reveal answer'}
                    </button>

                    <p className={`${hasRevealBeenClicked ? 'block' : 'hidden'} text-xl`}>
                        {`${clueData.answer}`}
                    </p>
                </div>

                <div className='flex items-center h-[calc(1rem_+_8vh)]'>
                    <button
                        className={`${hasRevealBeenClicked && gameState.unanswered.includes(clueData.id) ? 'block' : 'hidden'} py-8 px-10 ${primaryLinkStyles}`}
                        onClick={() => {
                            const updatedGameState = {
                                ...gameState,
                                unanswered: gameState.unanswered.filter(id => id !== clueData.id),
                                correct: [...gameState.correct, clueData.id],
                            }

                            setGameState(updatedGameState)
                        }}
                    >
                        {'Right'}
                    </button>

                    <button
                        className={`${hasRevealBeenClicked && gameState.unanswered.includes(clueData.id) ? 'block' : 'hidden'} py-8 px-10 ${primaryLinkStyles}`}
                        onClick={() => {
                            const updatedGameState = {
                                ...gameState,
                                unanswered: gameState.unanswered.filter(id => id !== clueData.id),
                                incorrect: [...gameState.incorrect, clueData.id],
                            }

                            setGameState(updatedGameState)
                        }}
                    >
                        {'Wrong'}
                    </button>

                    <p className={`${hasRevealBeenClicked && !gameState.unanswered.includes(clueData.id) ? 'block' : 'hidden'} text-m`}>
                        {`Answer marked ${gameState.correct.includes(clueData.id) ? 'correct' : 'incorrect'}`}
                    </p>
                </div>

                <PrimaryLink
                    customStyles="mt-8 py-8 px-10"
                    href={`/`}
                >
                    {'Return'}
                </PrimaryLink>
            </main>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = CLUES.map(clue => ({
        params: { id: clue.id }
    }))

    return {
        paths,
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }: { params: any }) {
    const clueData = CLUES.find(clue => clue.id == params.id)

    return {
        props: {
            clueData,
        },
    };
}

export default Clue
