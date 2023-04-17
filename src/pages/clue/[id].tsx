function Clue({ clueData }) {
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
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const clueData = CLUES.find(clue => clue.id == params.id)

    return {
        props: {
            clueData,
        },
    };
}




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


export default Clue
