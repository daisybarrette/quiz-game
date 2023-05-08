import { createContext } from 'react';


export const PlayerContext = createContext({
    gameState: {},
    setGameState: (data: any) => { },
    // setGameState: (setGameStateFunc: (value: string) => void) => { },
});

