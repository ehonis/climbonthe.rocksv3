import Link from "next/link";
export default function signupPage() {
  return (
    <>
      <div className="mt-32 flex h-4/5 items-start justify-center">
        <div className="flex w-4/5 flex-col justify-center overflow-hidden rounded-3xl bg-bg1 p-5 shadow-lg">
          <h1 className="mb-5 text-center text-3xl font-bold text-white">
            Signup
          </h1>
          <div class="flex flex-col gap-3">
            <div class="flex gap-2">
              <input
                type="text"
                placeholder="First"
                class="w-1/2 rounded-lg bg-bg2 p-2 text-white"
              />
              <input
                type="text"
                placeholder="Last"
                class="w-1/2 rounded-lg bg-bg2 p-2 text-white"
              />
            </div>
            <input
              type="text"
              placeholder="Email"
              class="mt-5 rounded-lg bg-bg2 p-2 text-white"
            />
            <input
              type="text"
              placeholder="Confirm Email"
              class="rounded-lg bg-bg2 p-2 text-white"
            />
            <input
              type="text"
              placeholder="Password"
              class="mt-5 rounded-lg bg-bg2 p-2 text-white"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              class="mb-5 rounded-lg bg-bg2 p-2 text-white"
            />
          </div>
          <div class="flex justify-end gap-2">
            <a href="loginPage.html">
              <button class="rounded-lg border-none bg-green-400 px-5 pb-3 pr-5 pt-3 transition-transform duration-300 hover:scale-110 hover:border-solid hover:border-white">
                Signup
              </button>
            </a>
          </div>
          {/* <div>
            <h2 className="text-lg text-white">Pick a Username!</h2>
            <div className="mt-3 flex">
              <p className="self-center rounded-l-lg bg-bg0 p-2 text-iconbg">
                @
              </p>
              <input
                type="text"
                placeholder="Username"
                className="rounded-r-lg bg-bg2 p-2"
              />
              <button className="lg rounded bg-green-400 px-2 py-0">Go</button>
            </div>
            <h2 />
          </div> */}
        </div>
      </div>
      <p className="p-5 text-center text-white">
        if you already have an account, you can&nbsp;
        <Link href="/login" className="text-white underline">
          login
        </Link>
        !
      </p>
    </>
  );
}
