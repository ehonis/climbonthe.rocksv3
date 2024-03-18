import { currentUser } from "../lib/placeholder-data";
import Image from "next/image";
import Link from "next/link";
export default function ProfileHeader() {
  return (
    <div className="m-5 flex items-center justify-between overflow-hidden rounded-3xl bg-bg1 p-5 shadow-lg">
      <Image
        width={9999}
        height={9999}
        src={currentUser.image}
        className="h-28 w-28 rounded-full"
      />
      <div className="flex flex-col items-center justify-center p-2">
        <h1 className="justify-self-center text-center text-2xl font-bold text-primary">
          Welcome Back,
        </h1>
        <Link href={currentUser.href}>
          <span className="gradient-text text-2xl font-bold text-primary">
            @{currentUser.username}
          </span>
        </Link>
      </div>
    </div>
  );
}
