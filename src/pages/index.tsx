import Link from 'next/link'


function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-24 text-center">
            <h1 className="header text-5xl">Quiz Party</h1>

            <ul className="grid grid-cols-3 grid-rows-3 gap-6 list-none pt-28 text-xl">
                {CLUES.map(clue => (
                    <li className="flex" key={clue.id}>
                        <ClueLink />
                    </li>
                ))}
            </ul>
        </main>
    )
}

function ClueLink() {
    return (
        <Link
            className="py-10 px-12 border-white border-4 hover:bg-yellow-50 hover:text-black"
            href="/clue"
        >
            {'?'}
        </Link>
    )
}

// TODO: store elsewhere, eventually pull from API
const CLUES = [
    {
        id: '1',
        clue: 'Among the men who have walked on the Moon, his last name is alphabetically first',
        answer: 'Buzz Aldrin',
    },
    {
        id: '2',
        clue: 'Known for more philosophical works, he wrote the play "La Mandragola", in which Florentines are rewarded for immoral actions',
        answer: 'Machiavelli',
    },
    {
        id: '3',
        clue: 'Number of Canadian provinces that border the Great Lakes',
        answer: '1',
    },
    {
        id: '4',
        clue: 'A part of this marine mammal was prized by medieval folk, who thought it belonged to a unicorn',
        answer: 'Narwhal',
    },
    {
        id: '5',
        clue: 'Displayed in a new case in September 1997, it is the centerpiece of the Harry Winston Gallery',
        answer: 'The hope diamond',
    },



    {
        id: '6',
        clue: 'Number of Canadian provinces that border the Great Lakes',
        answer: '1',
    },

    {
        id: '7',
        clue: 'Among the men who have walked on the Moon, his last name is alphabetically first',
        answer: 'Buzz Aldrin',
    },

    {
        id: '8',
        clue: 'Number of Canadian provinces that border the Great Lakes',
        answer: '1',
    },
    {
        id: '9',
        clue: 'Displayed in a new case in September 1997, it is the centerpiece of the Harry Winston Gallery',
        answer: 'The hope diamond',
    },
]

export default Home
