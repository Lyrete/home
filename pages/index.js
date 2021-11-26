import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
      <Head>
        <title>@lyrete</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="container mx-auto justify-center text-center space-y-4">
          <h1 className="text-3xl md:text-7xl font-bold">Tommi Alajoki</h1>          
          <h2 className="text-xl md:text-l">Web Developer</h2>       
          <hr className="w-80 my-4 border-2 justify-self-center mx-auto" />
          <div id="logos" className="flex items-center justify-center mx-auto space-x-3">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/lyrete">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-200 w-6 h-6 hover:text-yellow-500">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tommi-alajoki-561233113/">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-200 w-6 h-6 hover:text-yellow-500">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/lyrete">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-200 w-6 h-6 hover:text-yellow-500">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitch.tv/lyrete">
            <svg viewBox="0 0 256 268" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-200 w-6 h-6 hover:text-yellow-500" preserveAspectRatio="xMidYMid meet">
            <path d="M17.4579119,0 L0,46.5559188 L0,232.757287 L63.9826001,232.757287 L63.9826001,267.690956 L98.9144853,267.690956 L133.811571,232.757287 L186.171922,232.757287 L256,162.954193 L256,0 L17.4579119,0 Z M40.7166868,23.2632364 L232.73141,23.2632364 L232.73141,151.29179 L191.992415,192.033461 L128,192.033461 L93.11273,226.918947 L93.11273,192.033461 L40.7166868,192.033461 L40.7166868,23.2632364 Z M104.724985,139.668381 L127.999822,139.668381 L127.999822,69.843872 L104.724985,69.843872 L104.724985,139.668381 Z M168.721862,139.668381 L191.992237,139.668381 L191.992237,69.843872 L168.721862,69.843872 L168.721862,139.668381 Z" />
            </svg></a>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-center mx-auto text-gray-400">
        <div className="flex items-center justify-center mx-auto space-x-3">
          <div className="self-end">© 2021</div>
          <div>|</div>        
          <div className="self-start">Tommi Alajoki</div>
        </div>
      </footer>
    </div>
  )
}
