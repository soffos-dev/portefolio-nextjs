import React from "react";

export default function Project() {
    return (
        <div className="min-h-screen bg-black text-green-400 font-mono py-12">
            <div className="max-w-4xl mx-auto py-4 sm:py-8 px-2 sm:px-4">
                {/* Projets */}
                <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-gray-800 border-b border-gray-700 p-4">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm ml-4">projects.sh</span>
                            <div className="flex flex-col items-center justify-center">
                                <div className="text-gray-400 text-sm ml-4">sophie@fedora</div>
                                <div className="text-gray-400 text-xs">~/projects</div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="flex w-4 h-4 bg-gray-400 text-gray-950 rounded-full justify-center items-center">x</div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 sm:p-8">
                        <div className="">
                            <h2 className="text-lg font-semibold text-green-400 mb-4">
                                <span className="text-gray-600">## </span>Filtrer par language
                            </h2>
                        </div>
                    </div>

                    <div className="p-6 sm:p-8">
                        <div className="">
                            <h2 className="text-lg font-semibold text-green-400 mb-4">
                                <span className="text-gray-600">## </span>Projets
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}