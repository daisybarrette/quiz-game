import Link from 'next/link'

import CLUES from '../definitions/clueData'


function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-24 text-center">
            <h1 className="text-2xl p-10 w-9/12">{'Error 404 — Page not found'}</h1>

            <Link
                className="py-8 px-10 border-white border-4 bg-main-background hover:bg-yellow-50 hover:text-black"
                href={`/`}
            >
                {'Return to the home page'}
            </Link>
        </main>
    )
}

export default NotFound
