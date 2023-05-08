import Link from 'next/link'


type PrimaryLinkProps = {
    href: string
    children: React.ReactNode,
    customStyles: string,
}


const PrimaryLink = ({ href, children, customStyles }: PrimaryLinkProps) => {
    const sharedStyles = 'shadow-inner shadow-black border-black border-2 bg-dark-blue font-bold text-light-yellow hover:bg-white hover:text-black hover:text-shadow-none'
    const test = "w-full py-[calc(0.7rem_+_2vw)]"
    return (
        <Link
            className={`${sharedStyles} ${customStyles}`}
            aria-label="View clue"
            href={href}
        >
            {children}
        </Link>
    )
}

export default PrimaryLink
