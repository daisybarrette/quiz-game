import Link from 'next/link'

import CLUES from '../../definitions/clueData'
import Layout from '../../components/Layout'


type ClueType = {
    id: string,
    clue: string,
    answer: string,
}

function Clue({ clueData }: { clueData: ClueType }) {
    return (
        <Layout
            pageTitle="Trivia Game | Clue"
        >
            <main className="flex flex-col items-center text-center">
            <h1 className="text-2xl mt-36 p-10 w-9/12">{`${clueData.clue}`}</h1>

                <Link
                    className="py-8 px-10 border-white border-4 bg-main-background hover:bg-yellow-50 hover:text-black"
                    href={`/`}
                >
                    {'Return'}
                </Link>
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
