import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = async (props: Props) => {
    const user = await currentUser()
    return (
        <header className='fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between'>
            {/* LEFT */}
            <aside className='flex items-center gap-[2px]'>
                <div className='flex gap-4 items-center'>
                    <div className='relative w-6 h-6'>
                        <Image
                            src="/autumn-eight-logo.png"
                            className='object-cover'
                            fill
                            alt="autumn eight logo"
                        />
                    </div>
                    <p className='text-xl font-bold'>Autumn Eight</p>
                </div>
            </aside>
            {/* MIDDLE */}
            <nav className='absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block'>
                <ul className='flex items-center gap-4 list-none'>
                    <li>
                        <Link href="#">Products</Link>
                    </li>
                    <li>
                        <Link href="#">Pricing</Link>
                    </li>
                    <li>
                        <Link href="#">Clients</Link>
                    </li>
                    <li>
                        <Link href="#">Resources</Link>
                    </li>
                    <li>
                        <Link href="#">Documentation</Link>
                    </li>
                    <li>
                        <Link href="#">Enterprise</Link>
                    </li>
                </ul>
            </nav>
            {/* RIGHT */}
            <aside className='flex items-center gap-4'>
                <Link href="/dashboard"
                    className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6  text-white inline-block">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(251,146,60,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 ">
                        <span>{user ? 'Dashboard' : 'Get Started'}</span>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M10.75 8.75L14.25 12L10.75 15.25"
                            ></path>
                        </svg>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-orange-400/0 via-orange-400/90 to-orange-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                </Link>
                {/* <SignedIn> */}
                {/* Mount the UserButton component */}
                {/* <UserButton /> */}
                {/* </SignedIn> */}
                {/* <SignedOut> */}
                {/* Signed out users get sign in button */}
                {/* <SignInButton /> */}
                {/* </SignedOut> */}
                {user ? <UserButton afterSignOutUrl='/' /> : null}
                <MenuIcon className='md:hidden' />
            </aside>
        </header>
    )
}

export default Navbar