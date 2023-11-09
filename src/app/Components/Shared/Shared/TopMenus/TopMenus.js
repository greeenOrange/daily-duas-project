import React from 'react'

const TopMenus = () => {
    return (
        <div className="flex justify-between">
            <div className="navbar bg-base-100">
                <div className="flex-none hidden">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl font-poppins">Dua Page</a>
                </div>
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Search by Dua Name"
                        className="input w-full max-w-xs pr-10"
                    />
                    <button className="inset-y-0 right-0 flex items-center px-3 text-gray-500">
                        <svg width="54" height="44" viewBox="0 0 54 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="54" height="44" rx="6" fill="#F3F4F6" />
                            <path d="M36 31L30 25L36 31ZM32 20C32 20.9193 31.8189 21.8295 31.4672 22.6788C31.1154 23.5281 30.5998 24.2997 29.9497 24.9497C29.2997 25.5998 28.5281 26.1154 27.6788 26.4672C26.8295 26.8189 25.9193 27 25 27C24.0807 27 23.1705 26.8189 22.3212 26.4672C21.4719 26.1154 20.7003 25.5998 20.0503 24.9497C19.4002 24.2997 18.8846 23.5281 18.5328 22.6788C18.1811 21.8295 18 20.9193 18 20C18 18.1435 18.7375 16.363 20.0503 15.0503C21.363 13.7375 23.1435 13 25 13C26.8565 13 28.637 13.7375 29.9497 15.0503C31.2625 16.363 32 18.1435 32 20Z" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <im src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default TopMenus