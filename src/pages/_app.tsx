import React, { useState } from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import CLUES from '../definitions/clueData'
import { PlayerContext } from '@/components/PlayerContext'


export default function App({ Component, pageProps }: AppProps) {
    const [gameState, setGameState] = useState({
        unanswered: CLUES.map(clue => clue.id),
        correct: [],
        incorrect: [],
    })

    return (
        <PlayerContext.Provider value={{
            gameState: gameState,
            setGameState: setGameState,
        }}>
            <Component {...pageProps} />
        </PlayerContext.Provider>
    )
}
