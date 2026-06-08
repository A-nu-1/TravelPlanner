"use client";

import Image from "next/image";
import Link from "next/link";
import { login, logout } from "@/lib/auth-actions";
import { Session } from "next-auth";
import { useState } from "react";

export default function Navbar({ session }: { session: Session | null }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-t from-blue-200 to-pink-200 shadow-md py-4 border-b border-gray-200">
            <div className="container mx-auto px-6 flex items-center justify-between lg:px-8">
                <Link href="/" className="flex items-center">
                    <Image title="HomePage" src={"/alogo_travel.svg"} alt="Logo" width={100} height={50} />
                </Link>
                <div className="flex items-center space-x-4">
                    {session ? (
                        <>
                            <Link href="/trips" className="text-slate-900 hover:text-sky-500 transition-colors duration-300">My Trips</Link>
                            <Link href="/globe" className="text-slate-900 hover:text-sky-500 transition-colors duration-300">Globe</Link>
                            <button className=" flex items-center justify-center bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white  p-2 rounded-sm cursor-pointer"
                                onClick={() => logout()}>Sign Out  </button>

                        </>) : (
                        <>
                            <div className="relative">
                                <button onClick={() => setIsOpen(!isOpen)} className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white text-md p-2 rounded-sm cursor-pointer">Sign In &#x2B9B;</button>
                                {isOpen && (
                                    <div className="absolute flex flex-col items-center justify-center top-full right-0 mt-2 bg-transparent border border-gray-200 rounded-md shadow-md space-y-2 p-2  z-10">
                                        <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white p-2 rounded-sm cursor-pointer"
                                            onClick={() => login('github')}>GitHub<svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3.01.41 2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.23 0 1.61-.02 2.91-.02 3.31 0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                                            </svg></button>
                                        <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600  text-white p-2 rounded-sm cursor-pointer"
                                            onClick={() => login('google')}>Google<svg className="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" stroke="white" viewBox="0 0 48 48">
                                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                            </svg></button>
                                    </div>
                                )}
                            </div>
                         </>
                    )}
                </div>
            </div>
        </nav>
    );
}