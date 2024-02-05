import { FaGithubSquare } from "react-icons/fa";
import Server from "./Server"

function Discord() {
  return (
    <>
      <div className="bg-gray-800 p-4">
        <div className="bg-white w-12 h-12 text-gray-800 text-medium font-bold rounded-full flex items-center justify-center">
          TW
        </div>
      </div>
      <div className="bg-gray-700 w-60 flex flex-col">
        <div className="p-4 shadow-md">TailwindCSS</div>
        <div className="p-4 flex-1">
          <Server />
        </div>
      </div>
      <div className="bg-gray-600 flex-1 flex flex-col">
        <div className="p-4 shadow-md">General</div>
        <div className="p-4 flex-1 flex flex-col ">
          <div className="flex flex-col hover:bg-gray-800 hover:bg-opacity-30">
            <div className="flex items-center ">
              <img
                src="/static/images/allan.jpg"
                alt="allan portrait"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div className="flex items-center">
                <a
                  href="#"
                  className="underline-none hover:underline hover:text-green-900 cursor-pointer"
                >
                  <span className="mr-2 text-green-300 hover:text-green-400 text-lg">
                    Allan Abok
                  </span>
                </a>
                <p className="text-gray-300 font-medium text-sm">05-02-2024</p>
              </div>
            </div>
            <div className="px-14 mb-4">
              <div className="flex flex-col ">
                <div>
                  <h1 className="text-2xl font-bold mt-2 mb-4">
                    👋 Welcome to Allan Coder Channel, You are welcomed
                  </h1>
                </div>
                <p className="mb-3">
                  We share a passion for all things coded, from web dev to game
                  development. We tackle challenges together, learning from each
                  other and pushing our limits. We create a supportive
                  environment where everyone is welcome, regardless of
                  experience. Ready to write your first line of code with our
                  community? Introduce yourself, tell us what you&apos;re
                  working on, and dive into the world of programming!
                </p>
                <p className="text-gray-200 text-sm font-semibold mt-2 mb-4">
                  Ahoy Coders, Welcome to Allan Coders! ⚓️ Grab your keyboard,
                  pick your role, and join the code crew! This channel is your
                  one-stop shop for: Cracking coding challenges (beginner or
                  beyond!) Sharing projects and getting feedback Asking
                  questions and getting expert tips Making friends and having
                  fun with code Ready to embark on your coding journey?
                  Introduce yourself and say hi!
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col hover:bg-gray-800 hover:bg-opacity-30">
            <div className="flex items-center ">
              <img
                src="/static/images/patricia.jpeg"
                alt="allan portrait"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div className="flex items-center">
                <a
                  href="#"
                  className="underline-none hover:underline hover:text-green-900 cursor-pointer"
                >
                  <span className="mr-2 text-green-300 hover:text-green-400 text-lg">
                    Patricia
                  </span>
                </a>
                <p className="text-gray-300 font-medium text-sm">05-02-2024</p>
              </div>
            </div>
            <div className="px-14">
              <p className="">
                &lsquo;That&apos;s a great point! I&apos;ve actually been working on a project
                that tackles that exact challenge. Here are some resources you
                might find helpful...&rsquo;
              </p>
              <a href="https://github.com/abok-cymk/" className="flex items-center gap-3 my-4 hover:underline hover:text-blue-500 cursor-pointer"
              target="_blank" rel="noreferrer">
                <span className="text-sm">Here is the Github repo </span>
                <FaGithubSquare className="text-2xl text-neutral-700 rounded bg-white border border-white"/>
              </a>
              <p className="text-gray-200 text-sm font-semibold mt-2 mb-4">
                Ahoy Coders, Welcome to Allan Coders! ⚓️ Grab your keyboard,
                pick your role, and join the code crew! This channel is your
                one-stop shop for: Cracking coding challenges (beginner or
                beyond!) Sharing projects and getting feedback Asking questions
                and getting expert tips Making friends and having fun with code
                Ready to embark on your coding journey? Introduce yourself and
                say hi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discord;
