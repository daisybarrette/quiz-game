import React, { useState } from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { PlayerContext } from '@/components/PlayerContext'


export default function App({ Component, pageProps }: AppProps) {
    const [gameState, setGameState] = useState({
        answeredClues: [],
        unansweredClues: []
    })

    console.table(gameState)

    return (
        <PlayerContext.Provider value={{
            gameState: gameState,
            setGameState: setGameState,
        }}>
            <span className='text-5xl'>{`${gameState.info}`}</span>
            <Component {...pageProps} />
        </PlayerContext.Provider>
    )
}
