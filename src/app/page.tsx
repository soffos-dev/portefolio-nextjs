import Image from "next/image";
import React from "react";
import {getProfileData, getSocialLinks} from "@/app/utils/configManager";

export default function Home() {
    const configProfile = getProfileData();
    const socialLinks = getSocialLinks();

    const profileData = {
        ...configProfile,
        socialLinks: socialLinks,
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

                      <div className="mb-8">
                          <h2 className="text-lg font-semibold text-green-400 mb-4">
                              <span className="text-gray-600">## </span>Navigation
                          </h2>
                          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                              <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                                  <h3 className="text-yellow-400 font-semibold mb-2 text-sm">./profile</h3>
                                  <div className="flex flex-wrap gap-1text-xs">
                                      <span
                                          className="text-gray-300 px-2 py-1 rounded text-xs"
                                      >
                                        Pour en savoir plus sur moi
                                      </span>
                                  </div>
                              </div>
                              <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                                  <h3 className="text-yellow-400 font-semibold mb-2 text-sm">./xp</h3>
                                  <div className="flex flex-wrap gap-1text-xs">
                                      <span
                                          className="text-gray-300 px-2 py-1 rounded text-xs"
                                      >
                                        Pour en savoir plus sur mon parcours
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="mb-8">
                          <h2 className="text-lg font-semibold text-green-400 mb-4">
                              <span className="text-gray-600">## </span>Me contacter
                          </h2>
                          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                              <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                                  <a className="flex flex-wrap gap-1text-xs"
                                     href={profileData.socialLinks.linkedin}
                                     target="_blank"
                                  >
                                      <span className="text-blue-400 text-sm capitalize">
                                        Linkedin
                                      </span>
                                  </a>
                              </div>
                              <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                                  <a className="flex flex-wrap gap-1text-xs"
                                     href={`mailto:${profileData.email}`}
                                  >
                                      <span className="text-blue-400 text-sm capitalize">
                                        Mail
                                      </span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
