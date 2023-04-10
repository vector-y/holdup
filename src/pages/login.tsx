import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sleeve</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white">
        <Link href="/" className="flex items-center">
          <span className="self-center font-work-sans text-5xl font-semibold whitespace-nowrap dark:text-white">Holdup</span>
        </Link>

        <div className="bg-white w-96 p-6 mx-auto mt-16 rounded shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Sign in</h2>
            <form>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                className="bg-green-400 hover:bg-green-500 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                >
                Sign in
                </button>
            </div>
            </form>
            <Link href="/forgotpassword" className="flex mt-4 items-center">
                <p className="text-blue-500 hover:underline">Forgot your password?</p>
            </Link>
        </div>
        <p className="self-center font-work-sans text-lg font-normal whitespace-nowrap mt-8 mb-2 dark:text-white">New to Holdup?</p>
        <Link href="/" className='text-white block px-3 py-2 text-base font-medium md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-800 transition-all bg-slate-400 hover:bg-indigo-700"' aria-current="page">Create your Holdup account</Link>
      </main>
    </>
  );
};

export default login;