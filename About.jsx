import React from 'react'

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          {/* Image Section */}
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="React Development"
            />
          </div>

          {/* Text Content Section */}
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Built with React, Tailwind CSS, and Passion
            </h2>
            <p className="mt-6 text-gray-600">
              This project is a frontend application crafted using modern tools like <strong>React</strong> and <strong>Tailwind CSS</strong>. It features clean routing powered by <strong>React Router</strong> and showcases practical component-based architecture.
            </p>
            <p className="mt-4 text-gray-600">
              The goal of this project was to build a well-structured and visually appealing multi-page React app that demonstrates real-world UI development skills. It's responsive, scalable, and a great starting point for anyone diving into React.
            </p>
            <p className="mt-4 text-gray-600">
              Designed and developed by <strong>Prateek Rai</strong>, this project reflects both technical knowledge and creativity. Whether you're a beginner or someone exploring modern web frameworks, this app offers clarity and simplicity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
