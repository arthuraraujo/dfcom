export default function Component() {
    return (
        <>
            <section className="relative w-full px-8 text-gray-700 bg-white body-font">
                <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <a
                        href="#_"
                        className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"
                    >
                        tails.
                    </a>

                    <nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
                        <a
                            href="#_"
                            className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
                            x-data="{ hover: false }"
                        >
                            <span className="block">Home</span>
                            <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                                <span
                                    x-show="hover"
                                    className="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900"
                                    x-transition:enter="transition ease duration-200"
                                    x-transition:enter-start="scale-0"
                                    x-transition:enter-end="scale-100"
                                    x-transition:leave="transition ease-out duration-300"
                                    x-transition:leave-start="scale-100"
                                    x-transition:leave-end="scale-0"
                                ></span>
                            </span>
                        </a>
                        <a
                            href="#_"
                            className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
                            x-data="{ hover: false }"
                        >
                            <span className="block">Features</span>
                            <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                                <span
                                    x-show="hover"
                                    className="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900"
                                    x-transition:enter="transition ease duration-200"
                                    x-transition:enter-start="scale-0"
                                    x-transition:enter-end="scale-100"
                                    x-transition:leave="transition ease-out duration-300"
                                    x-transition:leave-start="scale-100"
                                    x-transition:leave-end="scale-0"
                                ></span>
                            </span>
                        </a>
                        <a
                            href="#_"
                            className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
                            x-data="{ hover: false }"
                        >
                            <span className="block">Pricing</span>
                            <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                                <span
                                    x-show="hover"
                                    className="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900"
                                    x-transition:enter="transition ease duration-200"
                                    x-transition:enter-start="scale-0"
                                    x-transition:enter-end="scale-100"
                                    x-transition:leave="transition ease-out duration-300"
                                    x-transition:leave-start="scale-100"
                                    x-transition:leave-end="scale-0"
                                ></span>
                            </span>
                        </a>
                        <a
                            href="#_"
                            className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
                            x-data="{ hover: false }"
                        >
                            <span className="block">Blog</span>
                            <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                                <span
                                    x-show="hover"
                                    className="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900"
                                    x-transition:enter="transition ease duration-200"
                                    x-transition:enter-start="scale-0"
                                    x-transition:enter-end="scale-100"
                                    x-transition:leave="transition ease-out duration-300"
                                    x-transition:leave-start="scale-100"
                                    x-transition:leave-end="scale-0"
                                ></span>
                            </span>
                        </a>
                    </nav>

                    <div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                        >
                            Sign in
                        </a>
                        <span className="inline-flex rounded-md shadow-sm">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Sign up
                            </a>
                        </span>
                    </div>
                </div>
            </section>

            <section className="px-2 py-32 bg-white md:px-0">
                <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-center sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-3">
                            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                    <span className="block xl:inline">
                                        Beautiful Pages to
                                    </span>
                                    <span className="block text-indigo-600 xl:inline">
                                        Tell Your Story!
                                    </span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                                    Its never been easier to build beautiful
                                    websites that convey your message and tell
                                    your story.
                                </p>
                                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                    <a
                                        href="#_"
                                        className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                                    >
                                        Try It Free
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 ml-1"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line
                                                x1="5"
                                                y1="12"
                                                x2="19"
                                                y2="12"
                                            ></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </a>
                                    <a
                                        href="#_"
                                        className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16 bg-white">
                <div className="max-w-7xl px-10 mx-auto sm:text-center">
                    <p className="text-blue-500 font-medium uppercase">
                        Our Application Integrations
                    </p>
                    <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3">
                        Connect with Your Favorite Apps.
                    </h2>
                    <p className="mt-4 text-gray-500 text-base sm:text-xl lg:text-2xl">
                        Weve built integrations with some of your favorite
                        services.
                        <br className="lg:hidden hidden sm:block" /> Checkem out
                        below 👇
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16">
                        <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                            <svg
                                className="w-16 h-auto"
                                viewBox="0 0 256 256"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMidYMid"
                            >
                                <path
                                    d="M159.999 128.056a76.55 76.55 0 0 1-4.915 27.024 76.745 76.745 0 0 1-27.032 4.923h-.108c-9.508-.012-18.618-1.75-27.024-4.919A76.557 76.557 0 0 1 96 128.056v-.112a76.598 76.598 0 0 1 4.91-27.02A76.492 76.492 0 0 1 127.945 96h.108a76.475 76.475 0 0 1 27.032 4.923 76.51 76.51 0 0 1 4.915 27.02v.112zm94.223-21.389h-74.716l52.829-52.833a128.518 128.518 0 0 0-13.828-16.349v-.004a129 129 0 0 0-16.345-13.816l-52.833 52.833V1.782A128.606 128.606 0 0 0 128.064 0h-.132c-7.248.004-14.347.62-21.265 1.782v74.716L53.834 23.665A127.82 127.82 0 0 0 37.497 37.49l-.028.02A128.803 128.803 0 0 0 23.66 53.834l52.837 52.833H1.782S0 120.7 0 127.956v.088c0 7.256.615 14.367 1.782 21.289h74.716l-52.837 52.833a128.91 128.91 0 0 0 30.173 30.173l52.833-52.837v74.72a129.3 129.3 0 0 0 21.24 1.778h.181a129.15 129.15 0 0 0 21.24-1.778v-74.72l52.838 52.837a128.994 128.994 0 0 0 16.341-13.82l.012-.012a129.245 129.245 0 0 0 13.816-16.341l-52.837-52.833h74.724c1.163-6.91 1.77-14 1.778-21.24v-.186c-.008-7.24-.615-14.33-1.778-21.24z"
                                    fill="#FF4A00"
                                ></path>
                            </svg>
                            <p className="font-bold mt-4">Zapier</p>
                            <p className="mt-2 text-sm text-gray-500">
                                Connect to 1,000+ apps
                            </p>
                        </div>
                        <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                            <svg
                                className="w-16 h-auto"
                                viewBox="0 0 54 54"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fill="none" fillRule="evenodd">
                                    <path
                                        d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386"
                                        fill="#36C5F0"
                                    ></path>
                                    <path
                                        d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387"
                                        fill="#2EB67D"
                                    ></path>
                                    <path
                                        d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386"
                                        fill="#ECB22E"
                                    ></path>
                                    <path
                                        d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387"
                                        fill="#E01E5A"
                                    ></path>
                                </g>
                            </svg>
                            <p className="font-bold mt-4">Slack</p>
                            <p className="mt-2 text-sm text-gray-500">
                                Messaging Platform
                            </p>
                        </div>
                        <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                            <svg
                                className="w-16 h-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 250 262"
                                fill="none"
                            >
                                <path
                                    d="M192.277 86.567V55.5a23.953 23.953 0 0 0 13.815-21.594v-.727a23.998 23.998 0 0 0-23.934-23.934h-.726a24 24 0 0 0-23.935 23.934v.727A23.949 23.949 0 0 0 171.312 55.5v31.132a67.887 67.887 0 0 0-32.278 14.202l-85.44-66.541A27.259 27.259 0 1 0 40.828 50.9l84.004 65.395a68.079 68.079 0 0 0 1.049 76.757l-25.564 25.565a21.93 21.93 0 0 0-6.343-1.033 22.187 22.187 0 0 0-20.502 13.699 22.19 22.19 0 1 0 42.693 8.492 21.858 21.858 0 0 0-1.033-6.343l25.29-25.29a68.198 68.198 0 0 0 58.778 11.746 68.196 68.196 0 0 0 45.342-39.203 68.198 68.198 0 0 0-3.13-59.858 68.188 68.188 0 0 0-49.183-34.26h.048Zm-10.523 102.354a34.988 34.988 0 0 1-34.225-41.871 34.99 34.99 0 0 1 69.295 6.898 34.99 34.99 0 0 1-34.989 34.989"
                                    fill="#FF7A59"
                                ></path>
                            </svg>
                            <p className="font-bold mt-4">Hubspot</p>
                            <p className="mt-2 text-sm text-gray-500">
                                Customer Relations
                            </p>
                        </div>
                        <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                            <svg
                                className="w-16 h-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 250 190"
                                fill="none"
                            >
                                <path
                                    d="M115.482 49.956V189.13H0L115.482 49.956ZM115.482 0A57.587 57.587 0 0 1 98.57 40.756a57.793 57.793 0 0 1-40.83 16.882c-15.313 0-30-6.073-40.828-16.882A57.586 57.586 0 0 1 0 0h115.482ZM134.507 189.13a57.586 57.586 0 0 1 16.912-40.757 57.792 57.792 0 0 1 40.829-16.881c15.313 0 30 6.072 40.828 16.881a57.586 57.586 0 0 1 16.912 40.757H134.507ZM134.507 139.174V0h115.494L134.507 139.174Z"
                                    fill="#03363D"
                                ></path>
                            </svg>
                            <p className="font-bold mt-4">Zendesk</p>
                            <p className="mt-2 text-sm text-gray-500">
                                Customer Messaging
                            </p>
                        </div>
                        <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                            <svg
                                className="w-16 h-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 250 215"
                                fill="none"
                            >
                                <path
                                    d="M0 162.02V69.962c0-3.137 3.137-5.378 6.095-4.302l106.849 41.592c3.047 1.165 3.316 5.378.448 6.812L6.633 166.144C3.585 167.668 0 165.427 0 162.02Z"
                                    fill="#F82B60"
                                ></path>
                                <path
                                    d="M123.611 94.792 16.942 51.766c-3.406-1.434-3.406-6.275 0-7.709L119.31 1.479c4.661-1.972 9.95-1.972 14.7 0l102.367 42.578c3.406 1.434 3.406 6.275 0 7.709L130.155 94.792a8.3 8.3 0 0 1-6.544 0Z"
                                    fill="#FCB400"
                                ></path>
                                <path
                                    d="m139.835 214.369 107.386-41.323c1.703-.628 2.778-2.241 2.778-4.034V69.424c0-3.047-2.958-5.11-5.736-4.033l-107.387 41.323c-1.703.627-2.778 2.241-2.778 4.033v99.588c0 3.048 2.958 5.109 5.737 4.034Z"
                                    fill="#18BFFF"
                                ></path>
                                <path
                                    d="M112.944 107.252 6.095 65.66c-1.434-.538-2.868-.269-4.033.448l75.295 65.525 36.035-17.569c2.868-1.523 2.599-5.736-.448-6.812Z"
                                    fill="#BA2048"
                                ></path>
                            </svg>
                            <p className="font-bold mt-4">Airtable</p>
                            <p className="mt-2 text-sm text-gray-500">
                                Data Management
                            </p>
                        </div>
                        <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                            <svg
                                className="w-16 h-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 250 250"
                                fill="none"
                            >
                                <path
                                    d="m146.101 236.335-42.529-41.47 91.337-93.269 44.032 43.155-92.84 91.584Z"
                                    fill="#8AB4F8"
                                ></path>
                                <path
                                    d="M146.283 52.982 103.907 9.717l-92.659 91.779c-11.944 11.944-11.944 31.308 0 43.265l91.267 91.863 43.156-40.37-69.536-73.125 70.148-70.147Z"
                                    fill="#4285F4"
                                ></path>
                                <path
                                    d="M238.329 102.209 146.45 10.332c-11.958-11.957-31.35-11.957-43.308 0-11.959 11.958-11.959 31.35 0 43.308l91.879 91.876c11.958 11.958 31.35 11.958 43.308 0 11.959-11.958 11.959-31.349 0-43.307Z"
                                    fill="#8AB4F8"
                                ></path>
                                <path
                                    d="M124.092 246.372c16.53 0 29.93-13.4 29.93-29.93 0-16.529-13.4-29.929-29.93-29.929-16.531 0-29.93 13.4-29.93 29.929 0 16.53 13.399 29.93 29.93 29.93Z"
                                    fill="#246FDB"
                                ></path>
                            </svg>
                            <p className="font-bold mt-4">Google Tag Manager</p>
                            <p className="mt-2 text-sm text-gray-500">
                                Web Tag Manager
                            </p>
                        </div>
                        <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                            {/* <svg
                                className="w-16 h-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                style="enableBackground:new 0 0 512 512"
                                xmlSpace="preserve"
                            >
                                <path d="M362.9 243.5c3.1-.4 6.2-.4 9.3 0 1.7-3.8 2-10.5.5-17.6-2.2-10.7-5.3-17.2-11.5-16.2s-6.5 8.8-4.2 19.5c1.1 5.9 3.4 11.1 5.9 14.3zm-53.7 8.5c4.5 2 7.2 3.3 8.3 2.1 1.9-1.9-3.5-9.4-12.1-13.1-10.2-4.2-21.8-2.8-30.7 3.7-3 2.2-5.8 5.2-5.4 7.1.9 3.7 10-2.7 22.7-3.5 6.9-.5 12.7 1.7 17.2 3.7zm-9 5.1c-9.1 1.4-15 6.5-13.5 10.1.9.3 1.2.8 5.2-.8 6-2.3 12.4-2.9 18.8-2 2.9.3 4.3.5 5-.5 1.3-2.1-5.8-7.9-15.5-6.8zm54.2 17.2c3.4-6.9-10.9-14-14.3-7-3.4 6.9 11 13.9 14.3 7zm15.7-20.5c-7.7-.1-8 15.8-.3 16 7.8 0 8.1-15.9.3-16zm-219.2 79c-1.3.3-6 1.5-8.5-2.4-5.2-8 11.1-20.4 3-35.9-9.1-17.5-27.9-13.6-35.1-5.6-8.7 9.6-8.7 23.6-5 24.1 4.3.6 4.1-6.5 7.4-11.7 3.9-6 11.8-7.7 17.8-3.8 0 0 .1 0 .1.1 11.6 7.6 1.4 17.8 2.3 28.7 1.4 16.7 18.5 16.4 21.6 9 .4-.7.3-1.7-.2-2.3 0 1.1.6-1.1-3.4-.2zm300.4-17.1c-3.4-11.8-2.6-9.2-6.8-20.6 2.5-3.7 15.3-24.1-3.1-43.3-10.4-10.9-34-16.6-41.2-18.6-1.5-11.4 4.7-58.8-21.6-83.2 20.8-21.6 33.8-45.4 33.8-65.8-.1-39.2-48.3-51.1-107.7-26.5L292.1 63c-.1-.1-22.8-22.3-23.1-22.6-67.6-59-279.4 176.3-211.7 233.5l14.8 12.5c-4 10.7-5.4 22.2-4.1 33.6 3.4 33.5 36.1 60.6 67.7 60.5 57.9 133.4 268.5 133.6 323 3 1.7-4.5 9.1-24.7 9.1-42.5s-10.1-25.3-16.5-25.3zM134.5 364c-22.9-.6-47.6-21.2-50-45.6-6.2-61.4 74.4-75.4 84.2-12.4 4.6 29.7-4.7 58.6-34.2 58zM116 249.5c-15.2 3-28.6 11.6-36.8 23.5-4.9-4.1-14-12-15.6-15-13-24.9 14.3-73.2 33.4-100.4C144.2 90.2 218.1 39.2 252.4 48.4c5.6 1.6 24 22.9 24 22.9s-34.2 19-65.9 45.5c-42.9 33-75.2 80.8-94.5 132.7zm239.4 101.4s-35.8 5.3-69.7-7.1c6.2-20.2 27.1 6.1 96.6-13.8 15.3-4.4 35.4-13 51.1-25.4 3.4 7.8 5.8 16 7.1 24.3 3.7-.7 14.3-.5 11.5 18.1-3.3 19.9-11.8 36.1-26 51-8.9 9.6-19.5 17.6-31.2 23.4-6.5 3.4-13.4 6.3-20.4 8.6-53.6 17.5-108.5-1.7-126.3-43.1-1.4-3.2-2.6-6.4-3.6-9.8-7.5-27.3-1.1-60 18.9-80.6 1.2-1.3 2.5-2.9 2.5-4.8-.2-1.7-.8-3.3-1.9-4.6-7-10.2-31.3-27.5-26.4-61 3.5-24.1 24.5-41 44.2-40l5 .3c8.5.5 15.9 1.6 22.9 1.9 11.7.5 22.3-1.2 34.7-11.6 4.2-3.5 7.6-6.6 13.3-7.5 4.7-1.2 9.6-.3 13.6 2.2 10 6.7 11.4 22.8 11.9 34.6.3 6.7 1.1 23.1 1.4 27.7.6 10.7 3.4 12.2 9.1 14 3.2 1.1 6.2 1.8 10.5 3.1 13.2 3.7 21 7.5 26.1 12.3 2.6 2.5 4.2 5.8 4.8 9.3 1.6 11.4-8.8 25.5-36.4 38.2-46.8 21.7-93.9 14.5-100.7 13.7-20.2-2.7-31.7 23.4-19.6 41.2 22.7 33.5 122.7 20 151.7-21.4.7-1 .1-1.6-.7-1-41.9 28.6-97.3 38.3-128.8 26.1-4.8-1.9-14.8-6.5-16-16.7 43.7 13.5 71.2.7 71.2.7s2.2-2.6-.4-2.3zM203.2 157.3c16.8-19.4 37.4-36.3 56-45.7.3-.2.8-.1 1 .3.1.2.1.5 0 .7-1.5 2.7-4.3 8.4-5.2 12.7-.1.4.2.8.6.9.2.1.4 0 .6-.1 11.5-7.8 31.6-16.3 49.1-17.3.4 0 .8.3.8.7 0 .3-.1.5-.3.7-2.9 2.2-5.5 4.8-7.7 7.8-.2.3-.2.8.2 1 .1.1.3.1.4.1 12.3.1 29.7 4.4 41.1 10.8.8.4.2 1.9-.6 1.7-69.7-16-123.4 18.6-134.8 26.9-.4.2-.8.1-1.1-.2-.3-.4-.3-.8-.1-1z"></path>
                            </svg> */}
                            <p className="font-bold mt-4">Mailchimp</p>
                            <p className="mt2 text-sm text-gray-500">
                                Email Marketing
                            </p>
                        </div>
                        <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                            <svg
                                className="h-16 w-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 250 343"
                                fill="none"
                            >
                                <path
                                    d="M163.818 0H23.736C10.59 0 0 10.663 0 23.736v294.771c0 13.146 10.663 23.737 23.736 23.737H226.19c13.147 0 23.737-10.664 23.737-23.737V85.159h-86.109V0Z"
                                    fill="#34A853"
                                ></path>
                                <path
                                    d="M250.001 85.16h-86.182V0l86.182 85.16Z"
                                    fill="#188038"
                                ></path>
                                <path
                                    d="M46.89 132.194V245.18h156.149V132.194H46.889Zm136.722 19.354v27.388h-49.08v-27.388h49.08Zm-68.507 0v27.388H66.317v-27.388h48.788Zm-48.788 74.131v-27.388h48.788v27.388H66.317Zm68.215 0v-27.388h49.08v27.388h-49.08Z"
                                    fill="#fff"
                                ></path>
                            </svg>
                            <p className="font-bold mt-4">Google Sheets</p>
                            <p className="mt-2 text-sm text-gray-500">
                                Spreadsheet
                            </p>
                        </div>
                    </div>
                    <a
                        href="#_"
                        className="px-8 py-4 sm:w-auto w-full text-center text-base font-medium inline-block rounded text-white hover:bg-blue-600 bg-blue-500"
                    >
                        View All Integrations
                    </a>
                </div>
            </section>

            <section className="w-full py-12 bg-white lg:py-24">
                <div className="max-w-6xl px-12 mx-auto text-center">
                    <div className="space-y-12 md:text-center">
                        <div className="max-w-3xl mb-20 space-y-5 sm:mx-auto sm:space-y-4">
                            <h2 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl">
                                Our Awesome Team
                            </h2>
                            <p className="text-xl text-gray-500">
                                We take pride in the people we work with. This
                                is because we all collectively help each other
                                become more awesome every day.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="w-full border border-gray-200 rounded-lg shadow-sm">
                            <div className="flex flex-col items-center justify-center p-10">
                                <img
                                    className="w-32 h-32 mb-6 rounded-full"
                                    src="https://cdn.devdojo.com/images/june2021/headshot2.jpg"
                                />
                                <h2 className="text-lg font-medium">
                                    John Doe
                                </h2>
                                <p className="font-medium text-blue-500">
                                    CEO and Founder
                                </p>
                                <p className="text-gray-400">
                                    Team member as of 2015
                                </p>
                            </div>

                            <div className="flex border-t border-gray-200 divide-x divide-gray-200">
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="w-full border border-gray-200 rounded-lg shadow-sm">
                            <div className="flex flex-col items-center justify-center p-10">
                                <img
                                    className="w-32 h-32 mb-6 rounded-full"
                                    src="https://cdn.devdojo.com/images/june2021/headshotguy.jpg"
                                />
                                <h2 className="text-lg font-medium">
                                    Mike Smith
                                </h2>
                                <p className="font-medium text-blue-500">
                                    CTO and Co-Founder
                                </p>
                                <p className="text-gray-400">
                                    Team member as of 2015
                                </p>
                            </div>

                            <div className="flex border-t border-gray-200 divide-x divide-gray-200">
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="w-full border border-gray-200 rounded-lg shadow-sm">
                            <div className="flex flex-col items-center justify-center p-10">
                                <img
                                    className="w-32 h-32 mb-6 rounded-full"
                                    src="https://cdn.devdojo.com/images/june2021/headshot-n.jpg"
                                />
                                <h2 className="text-lg font-medium">
                                    Fred Clemens
                                </h2>
                                <p className="font-medium text-blue-500">
                                    Marketing Manager
                                </p>
                                <p className="text-gray-400">
                                    Team member as of 2016
                                </p>
                            </div>

                            <div className="flex border-t border-gray-200 divide-x divide-gray-200">
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="w-full border border-gray-200 rounded-lg shadow-sm">
                            <div className="flex flex-col items-center justify-center p-10">
                                <img
                                    className="w-32 h-32 mb-6 rounded-full"
                                    src="https://cdn.devdojo.com/images/june2021/female-headshot-2.jpg"
                                />
                                <h2 className="text-lg font-medium">
                                    Sandra Mitchell
                                </h2>
                                <p className="font-medium text-blue-500">
                                    Lead Designer
                                </p>
                                <p className="text-gray-400">
                                    Team member as of 2017
                                </p>
                            </div>

                            <div className="flex border-t border-gray-200 divide-x divide-gray-200">
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="w-full border border-gray-200 rounded-lg shadow-sm">
                            <div className="flex flex-col items-center justify-center p-10">
                                <img
                                    className="w-32 h-32 mb-6 rounded-full"
                                    src="https://cdn.devdojo.com/images/june2021/headshot-female.jpg"
                                />
                                <h2 className="text-lg font-medium">
                                    Kelly Rogers
                                </h2>
                                <p className="font-medium text-blue-500">
                                    Designer
                                </p>
                                <p className="text-gray-400">
                                    Team member as of 2018
                                </p>
                            </div>

                            <div className="flex border-t border-gray-200 divide-x divide-gray-200">
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="w-full border border-gray-200 rounded-lg shadow-sm">
                            <div className="flex flex-col items-center justify-center p-10">
                                <img
                                    className="w-32 h-32 mb-6 rounded-full"
                                    src="https://cdn.devdojo.com/images/june2021/headshotf2.jpg"
                                />
                                <h2 className="text-lg font-medium">
                                    Sarah Neilson
                                </h2>
                                <p className="font-medium text-blue-500">
                                    Designer
                                </p>
                                <p className="text-gray-400">
                                    Team member as of 2018
                                </p>
                            </div>

                            <div className="flex border-t border-gray-200 divide-x divide-gray-200">
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#_"
                                    className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-auto fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                            <p className="font-medium text-blue-500 uppercase">
                                Building Businesses
                            </p>
                            <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                                Changing The Way People Do Business.
                            </h2>
                            <p className="text-xl text-gray-600 md:pr-16">
                                Learn how to engage with your visitors and teach
                                them about your mission. We re revolutionizing
                                the way customers and businesses interact.
                            </p>
                        </div>

                        <div className="w-full mt-16 md:mt-0 md:w-2/5">
                            <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                                <h3 className="mb-6 text-2xl font-medium text-center">
                                    Sign in to your Account
                                </h3>
                                <input
                                    type="text"
                                    name="email"
                                    className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                                    placeholder="Email address"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                                    placeholder="Password"
                                />
                                <div className="block">
                                    <button className="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg">
                                        Log Me In
                                    </button>
                                </div>
                                <p className="w-full mt-4 text-sm text-center text-gray-500">
                                    Don t have an account?{" "}
                                    <a
                                        href="#_"
                                        className="text-blue-500 underline"
                                    >
                                        Sign up here
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row">
                        <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
                            <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                                    <div className="relative">
                                        <p className="mb-2 font-medium text-gray-700 uppercase">
                                            Work smarter
                                        </p>
                                        <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">
                                            Features to help you work smarter
                                        </h2>
                                    </div>
                                    <p className="text-2xl text-gray-700">
                                        We ve created a simple formula to follow
                                        in order to gain more out of your
                                        business and your application.
                                    </p>
                                    <a
                                        href="#_"
                                        className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
                                    >
                                        Get Started Today
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
                            <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                                <h4 className="w-full text-3xl font-bold">
                                    Signup
                                </h4>
                                <p className="text-lg text-gray-500">
                                    or, if you have an account you can{" "}
                                    <a
                                        href="#_"
                                        className="text-blue-600 underline"
                                    >
                                        sign in
                                    </a>
                                </p>
                                <div className="relative w-full mt-10 space-y-8">
                                    <div className="relative">
                                        <label className="font-medium text-gray-900">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                                            placeholder="Enter Your Name"
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className="font-medium text-gray-900">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                                            placeholder="Enter Your Email Address"
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className="font-medium text-gray-900">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="relative">
                                        <a
                                            href="#_"
                                            className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
                                        >
                                            Create Account
                                        </a>
                                        <a
                                            href="#_"
                                            className="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
                                        >
                                            Sign up with Google
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-700 bg-white body-font">
                <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
                    <a
                        href="#_"
                        className="text-xl font-black leading-none text-gray-900 select-none logo"
                    >
                        tails<span className="text-indigo-600">.</span>
                    </a>
                    <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
                        © 2021 Tails - Tailwindcss Page Builder
                    </p>
                    <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Facebook</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>

                        <a
                            href="#"
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Instagram</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>

                        <a
                            href="#"
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Twitter</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                        </a>

                        <a
                            href="#"
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">GitHub</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>

                        <a
                            href="#"
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Dribbble</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </span>
                </div>
            </section>
        </>
    );
}
