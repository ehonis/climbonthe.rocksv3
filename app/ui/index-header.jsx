import Link from "next/link";
import BasicButton from "./basic-button";
export default function IndexHeader() {
  return (
    <div className="m-5 flex flex-col flex-wrap justify-center overflow-hidden rounded-3xl bg-bg1 p-5 shadow-lg">
      <h1 className="justify-self-center p-8 text-center text-2xl font-bold text-primary">
        Welcome To&nbsp;
        <span className="gradient-text">On The Rocks</span>
        &nbsp;Interactive Guidebook
      </h1>
      <div className="flex justify-center">
        <Link href="/signup">
          <BasicButton text="Signup" color="green" />
        </Link>

        <Link href="/login">
          <BasicButton text="Login" color="blue" />
        </Link>
      </div>
    </div>
  );
}
