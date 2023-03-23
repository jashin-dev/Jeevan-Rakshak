import React from 'react'

export default function Login() {
    return (
        <div>
            <div className="flex items-center h-screen w-full justify-center">
                <div className="w-[40%] min-w-[360px] bg-white rounded-xl shadow-xl px-10 py-20 m-4 md:max-w-sm md:mx-auto border">
                    <span className="block w-full text-xl uppercase font-bold mb-10">Login</span>
                    <form className="mb-4" action="/" method="post">
                        <div className="mb-4 md:w-full">
                            <label for="email" className="block text-xs mb-1">Username or Email</label>
                            <input className="w-full border rounded p-2 outline-none focus:border-[#2593D2]" type="email" name="email" id="email" placeholder="Username or Email"/>
                        </div>
                        <div className="mb-6 md:w-full">
                            <label for="password" className="block text-xs mb-1">Password</label>
                            <input className="w-full border rounded p-2 outline-none focus:border-[#2593D2]" type="password" name="password" id="password" placeholder="Password"/>
                        </div>
                        <button className="bg-[#f45454] hover:bg-[#dc4545] text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>
                    </form>
                    <a className="text-blue-700 text-center text-sm" href="/login">Forgot password?</a>
                </div>
            </div>
        </div>
    )
}
