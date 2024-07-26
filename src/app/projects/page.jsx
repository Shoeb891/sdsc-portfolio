// pages/projects.js
import React from "react";

const Projects = () => {
    return (
        <>
            <title>Projects</title>
            <section className="py-8 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 font-sans underline"></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-2xl font-sans">
                            <img 
                                src="/image.png" 
                                alt="PEANut Platform" 
                                className="w-full h-auto rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">PEANut</h3>
                            <p className="mb-4-8">
                                <strong>Peanut</strong> is an innovative online platform designed to cater to the educational needs of students of LIET, providing a comprehensive solution for learning and solving academic-related quizzes and assignments
                            </p>
                        </div>
                        {/* Add more project cards here if needed */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
