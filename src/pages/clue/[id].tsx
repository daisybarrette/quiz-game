import CLUES from '../../definitions/clueData'

type ClueType = {
    id: string,
    clue: string,
    answer: string,
}

function Clue({ clueData }: { clueData: ClueType }) {
    return (
        <main className="flex min-h-screen flex-col items-center pt-24 text-center">
            <h1 className="text-2xl p-10 w-9/12">{`${clueData.clue}`}</h1>
        </main>
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
