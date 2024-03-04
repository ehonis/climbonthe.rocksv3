import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="m-5 flex flex-col flex-wrap justify-center overflow-hidden rounded-3xl bg-bg1 p-5 shadow-lg">
        <h1 className="justify-self-center p-8 text-center text-2xl font-bold text-primary">
          Welcome To&nbsp;
          <span className="gradient-text">On The Rocks</span>
          &nbsp;Interactive Guidebook
        </h1>
        <div className="flex justify-center">
          <a href="loginPage.html">
            <button className="mb-5 mr-5 rounded-md border-none bg-green-400 px-5 pb-3 pt-3 transition-transform duration-300 hover:scale-110 hover:border-solid hover:border-white">
              Signup
            </button>
          </a>
          <a href="loginPage.html">
            <button className="mb-5 mr-5 rounded-md border-none bg-blue px-5 pb-3 pr-5 pt-3 transition-transform duration-300 hover:scale-110 hover:border-solid hover:border-white">
              Login
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="ml-5 text-3xl font-bold text-white">
          New Routes &amp; Boulders
        </h2>
        <div className="m-5 flex flex-col justify-center overflow-y-hidden rounded-3xl bg-bg1 p-3 shadow-lg">
          <div className="gradient-background-blue mb-4 flex h-20 w-full rounded-full last:mb-0">
            <div className="m-1 flex w-full justify-between overflow-hidden rounded-full bg-bg2">
              <img
                src="img/rope1.jpg"
                alt="picture of route"
                className="m-1 w-12 rounded-l-full"
              />
              <p className="self-center text-center text-2xl font-semibold text-white">
                The Wurliest Burliest Man
              </p>
              <p className="mr-3 self-center font-semibold text-white">5.12-</p>
            </div>
          </div>
          <div className="gradient-background-red mb-4 flex h-20 w-full rounded-full last:mb-0">
            <div className="m-1 flex w-full justify-between overflow-hidden rounded-full bg-bg2">
              <img
                src="img/rope2.jpg"
                alt="picture of route"
                className="m-1 w-12 rounded-l-full"
              />
              <p className="self-center text-2xl font-semibold text-white">
                The Long Dive
              </p>
              <p className="mr-3 self-center font-semibold text-white">
                5.10&nbsp;
              </p>
            </div>
          </div>
          <div className="gradient-background-black mb-4 flex h-20 w-full rounded-full last:mb-0">
            <div className="m-1 flex w-full justify-between overflow-hidden rounded-full bg-bg2">
              <img
                src="img/boulder1.jpg"
                alt="picture of route"
                className="m-1 w-12 rounded-l-full"
              />
              <p className="self-center text-center text-2xl font-semibold text-white">
                The Worldest Longest Boulder
              </p>
              <p className="mr-3 self-center font-semibold text-white">
                V3&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="ml-5 text-3xl font-bold text-white">Current Events</h2>
        <div className="m-5 flex flex-col justify-center overflow-y-hidden rounded-3xl bg-bg1 p-3 shadow-lg last:mb-20">
          <div className="gradient-background-comp mb-4 flex h-20 w-full rounded-full last:mb-0">
            <div className="m-1 flex w-full items-center justify-between overflow-hidden rounded-full bg-bg2">
              <img
                src="img/trophy.png"
                alt="picture of trophy"
                className="ml-4 h-12 w-12 self-center justify-self-start"
              />
              <p className="mr-4 self-center text-center text-2xl font-semibold text-white">
                2024 Ropes League
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
