import React, { useState } from 'react'

import CLUES from '../../definitions/clueData'
import Layout from '../../components/Layout'
import PrimaryLink, { primaryLinkStyles } from '../../components/PrimaryLink'


type ClueType = {
    id: string,
    clue: string,
    answer: string,
}

function Clue({ clueData }: { clueData: ClueType }) {
    const [hasBeenClicked, setHasBeenClicked] = useState(false)

    return (
        <Layout
            pageTitle="Trivia Game | Clue"
        >
            <main className="flex flex-col items-center text-center">
                <h1 className="text-2xl mt-24 p-10 w-9/12">{`${clueData.clue}`}</h1>

                <div
                    className="flex flex-col justify-center w-[calc(12rem_+_20vw)] h-[calc(8rem_+_20vh)]"
                >
                    <button
                        className={`${hasBeenClicked ? 'hidden' : 'block'} py-8 px-10 ${primaryLinkStyles}`}
                        type="button"
                        onClick={() => setHasBeenClicked(true)}
                    >
                        {'Reveal answer'}
                    </button>

                    <p className={`${hasBeenClicked ? 'block' : 'hidden'} text-xl`}>
                        {`${clueData.answer}`}
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
