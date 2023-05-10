import { createContext } from 'react';


type GameStateType = {
    unanswered: string[],
    correct: string[],
    incorrect: string[],
}

type PlayerContextType = {
    gameState: GameStateType,
    setGameState: (data: any) => void,
}

export const PlayerContext = createContext<PlayerContextType>({
    gameState: {
        unanswered: [],
        correct: [],
        incorrect: [],
    },
    setGameState: (data: GameStateType) => { },
});

