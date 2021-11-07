import React from "react"

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Alisher.
                        <br className="hidden lg:inline-block" /> I love to build amazing apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm a Senior CS student in the University of Central Florida.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-gradient-to-r from-green-400 to-green-700 border-0 py-2 px-6 focus:outline-none hover:from-green-300 hover:to-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gradient-to-r from-gray-600 to-gray-900 border-2 border-gray-600 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            My Projects
                        </a>
                        <a
                            href="https://github.com/sultalish"
                            target="_blank"
                            className="ml-4 inline-flex text-graml-4 inline-flex text-transparent bg-clip-text bg-gradient-to-r from-pink-100 to-purple-700 border-2 border-purple-500 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lgy-400 bg-l-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            My Github Repo
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alisher-sultangazin/"
                            target="_blank"
                            className="ml-4 text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                            LinkedIn Profile
                        </a>
                        <a
                            href="https://ucf.joinhandshake.com/users/15123313"
                            target="_blank"
                            className="ml-4 text-white bg-gradient-to-r from-red-600 to-red-500 border-0 py-2 px-6 focus:outline-none hover:from-red-500 hover:to-red-400 rounded text-lg">
                            Handshake Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}