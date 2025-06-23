import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    return (
        <div className="min-h-[80vh] flex justify-center items-center bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 text-white px-4">
            <div className="max-w-xl w-full bg-gray-800 rounded-lg shadow-lg p-6 text-center border border-orange-500">
                <img
                    src={data.avatar_url}
                    alt="GitHub Avatar"
                    className="w-32 h-32 rounded-full mx-auto border-4 border-orange-600"
                />
                <h2 className="text-3xl font-bold mt-4">{data.name}</h2>
                <p className="text-sm text-gray-300">@{data.login}</p>

                <div className="mt-4 space-y-2">
                    <p><span className="font-semibold text-orange-400">Public Repos:</span> {data.public_repos}</p>
                    <p><span className="font-semibold text-orange-400">Followers:</span> {data.followers}</p>
                    <p><span className="font-semibold text-orange-400">Following:</span> {data.following}</p>
                    <p><span className="font-semibold text-orange-400">Location:</span> {data.location || 'N/A'}</p>
                </div>

                <a
                    href={data.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-6 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition"
                >
                    Visit GitHub Profile
                </a>

                <p className="mt-6 text-xs text-gray-400">
                    React Router loader + fetch API | Built by Prateek Rai
                </p>
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Prat260104')
    return response.json()
}
