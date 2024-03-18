import Link from "next/link";
export default function loginPage() {
  return (
    <>
      <div className="mt-32 flex h-4/5 items-start justify-center">
        <div className="flex w-4/5 flex-col justify-center overflow-hidden rounded-3xl bg-bg1 p-5 shadow-lg">
          <h1 className="mb-5 text-center text-3xl font-bold text-white">
            Login
          </h1>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Username"
              className="rounded-lg bg-bg2 p-2 text-white"
            />
            <input
              type="text"
              placeholder="Password"
              className="mb-5 rounded-lg bg-bg2 p-2 text-white"
            />
          </div>
          <div className="flex justify-end gap-2">
            <a href="loginPage.html">
              <button className="bg-bluee rounded-lg border-none px-5 pb-3 pr-5 pt-3 transition-transform duration-300 hover:scale-110 hover:border-solid hover:border-white">
                Login
              </button>
            </a>
          </div>
        </div>
      </div>
      <p className="p-5 text-center text-white">
        if you dont already have an account, you can &nbsp;
        <Link href="/signup" className="text-white underline">
          create one today
        </Link>
        !
      </p>
    </>
  );
}
