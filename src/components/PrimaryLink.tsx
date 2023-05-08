import Link from 'next/link'


type PrimaryLinkProps = {
    href: string
    children: React.ReactNode,
    customStyles: string,
}

const primaryLinkStyles = 'shadow-inner shadow-black border-black border-2 bg-dark-blue font-bold text-light-yellow hover:bg-white hover:text-black hover:text-shadow-none'

const PrimaryLink = ({ href, children, customStyles }: PrimaryLinkProps) => {
    return (
        <Link
            className={`${primaryLinkStyles} ${customStyles}`}
            aria-label="View clue"
            href={href}
        >
            {children}
        </Link>
    )
}

export { primaryLinkStyles }
export default PrimaryLink
