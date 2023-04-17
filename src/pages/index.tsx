import Link from 'next/link'

import CLUES from '../definitions/clueData'


function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-24 text-center">
            <h1 className="header text-5xl">Computer Science Trivia</h1>

            <ul className="grid grid-cols-3 grid-rows-3 gap-6 list-none pt-28 text-xl">
                {CLUES.map(clue => (
                    <li className="flex" key={clue.id}>
                        <ClueLink id={clue.id} />
                    </li>
                ))}
            </ul>
        </main>
    )
}

// TODO move to separate component file
function ClueLink({ id }: { id: string }) {

    return (
        <Link
            className="py-10 px-12 border-white border-4 hover:bg-yellow-50 hover:text-black"
            href={`/clue/${id}`}

        >
            {'?'}
        </Link>
    )
}

export default Home
