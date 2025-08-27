import { getProfileData, getSocialLinks, getSkills, getAchievements } from "@/app/utils/configManager";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

export default function Profile() {
    const configProfile = getProfileData();
    const socialLinks = getSocialLinks();
    const configSkills = getSkills();
    const achievements = getAchievements();

    const profileData = {
        ...configProfile,
        socialLinks: socialLinks,
        skills: configSkills,
        achievements: achievements
    }

    if (!profileData) {
        return (
            <div className="min-h-screen bg-black text-green-400 font-mono pb-16 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-green-400 text-xl">Chargement du profile...</div>
                    <div className="text-gray-400">Merci de patienter pendant le chargement du profil</div>
                </div>
            </div>
        );
    }

    const skillsForDisplay = profileData.skills || configSkills || [];
    /*    const processedSkills = Array.isArray(skillsForDisplay) && typeof skillsForDisplay[0] === 'string'
            ? [{ category: 'Compétences', items: skillsForDisplay}]
            : skillsForDisplay.length > 0 ? skillsForDisplay : [
                { category: 'Languages', items: ["PHP", 'JavaScript', "TypeScript", "HTML5", "CSS3", "SQL"] },
                { category: 'Frameworks', items: ['Symfony', 'Laravel', 'NextJS'] },
                { category: 'Outils', items: ['Git', 'PHPStorm', 'Docker', 'tailwindCSS'] }
        ]*/

    return (
        <div className="min-h-screen bg-black text-green-400 font-mono py-12">
            <div className="max-w-4xl mx-auto py-4 sm:py-8 px-2 sm:px-4">

                {/* Profil */}
                <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-gray-800 border-b border-gray-700 p-4">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm ml-4">profile.sh</span>
                            <div className="flex flex-col items-center justify-center">
                                <div className="text-gray-400 text-sm ml-4">sophie@fedora</div>
                                <div className="text-gray-400 text-xs">~/profile</div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div
                                    className="flex w-4 h-4 bg-gray-400 text-gray-950 rounded-full justify-center items-center">x
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="p-6 sm:p-8">
                        <div className="text-center mb-8">
                            <div
                                className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-blue-400 overflow-hidden bg-gray-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    className="iconify iconify--emojione "
                                    viewBox="0 0 64 64"
                                >
                                    <circle cx={32} cy={32} r={30} fill="#9a9996"/>
                                    <path
                                        d="M25.8 37.6c.2 1.3.6 2.3 1.1 3 1 1.2 2.7 1.8 5.2 1.8 1.5 0 2.6-.2 3.6-.5 1.7-.6 2.6-1.7 2.6-3.4 0-1-.4-1.7-1.3-2.2-.8-.5-2.2-1-4-1.4l-3.1-.7c-3.1-.7-5.2-1.4-6.4-2.2-2-1.3-2.9-3.4-2.9-6.3 0-2.6 1-4.8 2.9-6.5 1.9-1.7 4.7-2.6 8.4-2.6 3.1 0 5.7.8 7.9 2.4 2.2 1.6 3.3 4 3.4 7.1h-5.8c-.1-1.7-.9-3-2.3-3.7-1-.5-2.2-.7-3.6-.7-1.6 0-2.9.3-3.8.9s-1.4 1.5-1.4 2.6c0 1 .5 1.8 1.4 2.3.6.3 1.9.7 3.9 1.2l5.1 1.2c2.2.5 3.9 1.2 5 2.1 1.7 1.4 2.6 3.3 2.6 5.9 0 2.7-1 4.9-3.1 6.6-2 1.8-4.9 2.6-8.7 2.6-3.8 0-6.8-.9-9-2.6-2.4-1.5-3.5-3.9-3.5-6.9h5.8"/>
                                </svg>
                            </div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
                                <span className="text-gray-600">$</span> {profileData.name}
                            </h1>
                            {/*<p className="text-blue-400 text-lg mb-2">@{profileData.username}</p>*/}
                            <p className="text-gray-300 text-sm sm:text-base">{profileData.description}</p>
                        </div>

                        {/* Social Link */}
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold text-green-400 mb-4">
                                <span className="text-gray-600">## </span>Réseaux sociaux
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {Object.entries(profileData.socialLinks).map(([platform, url], index) => (
                                    <a
                                        key={index}
                                        href={url as string}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 border border-gray-600 rounded-lg p-3 text-center hover:bg-gray-700 transition-colors"
                                    >
                                        <div className="text-blue-400 text-sm capitalize">{platform}</div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold text-green-400 mb-4">
                                <span className="text-gray-600">## </span>Compétences techniques
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Object.keys(skillsForDisplay).map((category, index) => {
                                    const key = category as keyof typeof skillsForDisplay;
                                    return (
                                        <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                                            <h3 className="text-yellow-400 font-semibold mb-2 text-sm">{key}</h3>
                                            <div className="flex flex-wrap gap-1">
                                                {skillsForDisplay[key].map((skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Achievement */}
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold text-green-400 mb-4">
                                <span className="text-gray-600">## </span> Succès
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {profileData.achievements.map((achievement, index: number) => (
                                    <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                                        <h3 className="text-yellow-400 font-semibold mb-1 text-sm">
                                            🏆 {achievement.title}
                                        </h3>
                                        <p className="text-gray-300 text-xs">{achievement.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Projet en cours */}
                        {profileData.currentFocus && profileData.currentFocus.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-green-400 mb-4">
                                    <span className="text-gray-600">## </span> En cours
                                </h2>
                                <div className="bg-gray-800 border border-gray-600 rounded-lg py-4">
                                    <ul className="space-y-2 text-gray-300 text-sm px-2">
                                        {profileData.currentFocus.map((item: string, index: number) => (
                                            <li key={index}>📌 {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* Funfact */}
                        {profileData.funFact && (
                            <div className="bg-blue-900 border border-blue-600 rounded-lg p-4 text-center">
                                <p className="text-blue-200 text-sm">
                                    <strong>Fun Fact:</strong> {profileData.funFact}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
