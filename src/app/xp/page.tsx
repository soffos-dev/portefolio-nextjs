import { getSchools, getJobs } from "@/app/utils/configManager";
import React from "react";

export default function Xp() {
    const schools = getSchools();
    const jobs = getJobs();

    const xp = {
        schools: schools.length > 0 ? schools : [],
        jobs: jobs.length > 0 ? jobs : [],
    }

    if (!xp) {
        return (
            <div className="min-h-screen bg-black text-green-400 font-mono pb-16 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-green-400 text-xl">Chargement des expériences...</div>
                    <div className="text-gray-400">Merci de patienter pendant le chargement</div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black text-green-400 font-mono py-12">
            <div className="max-w-4xl mx-auto py-4 sm:py-8 px-2 sm:px-4">
                {/* Ex */}
                <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-gray-800 border-b border-gray-700 p-4">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm ml-4">xp.sh</span>
                            <div className="flex flex-col items-center justify-center">
                                <div className="text-gray-400 text-sm ml-4">sophie@fedora</div>
                                <div className="text-gray-400 text-xs">~/xp</div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="flex w-4 h-4 bg-gray-400 text-gray-950 rounded-full justify-center items-center">x</div>
                            </div>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="p-6 sm:p-8">
                        <div className="">
                            <h2 className="text-lg font-semibold text-green-400 mb-4">
                                <span className="text-gray-600">## </span>Expériences professionnelles
                            </h2>
                            {xp.jobs.map((job, index: number) => (
                                <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg p-4 mt-4">
                                    <h3 className="flex text-yellow-400 font-semibold mb-1 justify-between py-2">
                                        <span>{job.title}</span>
                                        <span className="text-gray-300 text-sm">{job.year}</span>
                                    </h3>
                                    <h2 className="flex justify-between text-gray-300 text-xs align-bottom">
                                        <span className="text-gray-300 text-sm font-bold">{job.enterprise}</span>
                                        <span className="text-right">{job.enterpriseDetails}</span>
                                    </h2>
                                    <p className="text-blue-400 text-sm pt-4">🎯 Missions :</p>
                                    <ul className="text-gray-300 text-xs py-4">
                                        {job.missions.map((mission, indexMission: number) =>(
                                            <li key={indexMission}>- {mission}</li>
                                        ))}
                                    </ul>
                                    <p className="text-blue-400 text-sm">📌 Éxemple de réalisation :</p>
                                    <ul className="text-gray-300 text-xs pt-4">
                                        {job.achievements.map((achievement, indexAchievement: number) =>(
                                            <li key={indexAchievement}>- {achievement}</li>
                                        ))}
                                    </ul>
                                    <p className="flex flex-wrap gap-1 pt-4">
                                        {job.stack.map((item,indexStack: number) => (
                                            <span key={indexStack}
                                                  className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                                            >{item}</span>
                                        ))}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-6 sm:p-8">
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold text-green-400 mb-4">
                                <span className="text-gray-600">## </span>Écoles & diplômes
                            </h2>
                                {xp.schools.map((school, index: number) => (
                                    <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg p-4 my-4">
                                        <h3 className="flex text-yellow-400 font-semibold mb-1 text-sm justify-between">
                                            <span>⭐ {school.title}</span>
                                            <span className="text-gray-300">{school.year}</span>
                                        </h3>
                                        <p className="text-gray-300 text-xs p-4 text-justify">
                                            {school.description.map((line, index: number) => (
                                                <React.Fragment key={index}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                            </p>
                                        <p className="text-right text-xs text-gray-300">{school.location}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}