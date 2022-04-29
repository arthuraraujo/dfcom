import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useAuth } from "../authContext";
import { auth } from "../config/firebaseClient";

const signIn = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    const result = await signInWithPopup(auth, provider);
};

const signOut = async () => {
    auth.signOut();
};

export default function Header() {
    const { user } = useAuth();
    return (
        <section className="relative w-full px-8 text-gray-700 bg-white body-font">
            <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                <Image src="/logo.png" alt="DFCom" width={145} height={95} />

                <nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
                    <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 text-center">
                        MongoDB Store
                        {user?.displayName && (
                            <>
                                <br />
                                <span className="text-base">
                                    Bem vindo {user.displayName}
                                </span>
                            </>
                        )}
                    </h2>
                </nav>

                <div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
                    {user ? (
                        <>
                            <button
                                onClick={() => signOut()}
                                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => signIn()}
                                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Login
                            </button>
                        </>
                    )}

                    <span className="inline-flex rounded-md shadow-sm"></span>
                </div>
            </div>
        </section>
    );
}
