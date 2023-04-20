import Link from 'next/link'

import Layout from '../components/Layout'


function NotFound() {
    return (
        <Layout
            pageTitle="Trivia Game | 404"
        >
            <main className="flex flex-col items-center text-center">
                <h1 className="text-2xl mt-36 p-10 w-9/12">{'Error 404 — Page not found'}</h1>

                <Link
                    className="py-8 px-10 border-white border-4 bg-dark-blue hover:bg-yellow-50 hover:text-black"
                    href={`/`}
                >
                    {'Return to the home page'}
                </Link>
            </main>
        </Layout>
    )
}

export default NotFound
