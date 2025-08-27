import Link from "next/link";
import { getNavigation } from "@/app/utils/configManager";


export function Navbar() {
    const navigation = getNavigation();

    return (
        <nav className="bg-gray-900 border-b border-gray-700 font-mono fixed w-full top-0 left-0">
            <div className="max-w-screen-xl mx-auto px-2 sm:px-4 py-2 sm:py-3">
                <div className="flex items-center justify-between">
                    {/*Left side*/}
                    <div className="flex items-center space-x-1 text-xs sm:text-sm">
                        <Link href={navigation.brandUrl} className="text-green-400 hover:text-green-300 font-bold text-sm sm:text-base">
                            {navigation.brandName}
                        </Link>
                    </div>
                    {/*right side*/}
                    <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
                        {navigation.links.map((link, index) => (
                            <span key={link.name}>
                                {index > 0 && <span className="text-grey-600 hidden sm:inline mr-2 sm:mr-4">|</span> }
                                {link.external ? (
                                    <a
                                        href={link.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`$(link.color || 'text-grey-400') hover:opacity-75 font-source tracking-wide transition-colors`}
                                        >
                                        <span className="hidden sm:inline">{link.name === 'tg' ? '@' : link.name === 'gh' ? 'git://' : './'}</span>{link.name}
                                    </a>
                                ) : (
                                    <Link
                                        href={link.path}
                                        className={`${link.color || 'text-gray-400'} hover:opacity-75 font-source tracking-wide transition-colors`}
                                        >
                                        <span className="hidden sm:inline">./</span>{link.name}
                                    </Link>
                                )}
                            </span>
                            ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}