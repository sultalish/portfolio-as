import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="px-6 mt-4 lg:mt-0">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Hire Me
                    </h1>
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                        EMAIL
                    </h2>
                    <a className="text-indigo-400 leading-relaxed">
                        alishersultangazin@gmail.com
                    </a>
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                        PHONE
                    </h2>
                    <p className="leading-relaxed">321-270-1741</p>
                </div>
            </div>
        </section>
    );
}