import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { languages, tools } from "../data";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-15">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                </div>
                {/* Programming Languages */}
                <div className="text-center mb-10">
                    Programming Languages
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm: mb-2 -mx-2">
                    {languages.map((language) => (
                        <div key={language} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-green-400 w-6 h-6 flex-shrink-0 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                                <span className="title-font font-medium text-white">
                                    {language}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Technologies */}
                <div className="text-center mb-10">
                    Developer Tools
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm: mb-2 -mx-2">
                    {tools.map((tool) => (
                        <div key={tool} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                                <span className="title-font font-medium text-white">
                                    {tool}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}