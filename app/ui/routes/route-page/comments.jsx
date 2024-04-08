import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { user } from "@/app/lib/placeholder-data";
import Image from "next/image";
import Link from "next/link";
import ExpandingTextarea from "./expanding-text-area";

function getProfile(name) {
  const foundPerson = user.find((person) => person.username === name);
  return foundPerson;
}

export default function Comments({ route }) {
  let count = 0;

  return (
    <>
      <h1 className="ml-5 mr-5 text-2xl font-bold text-white">Comments</h1>
      <div className="ml-5 mr-5 mt-3 flex flex-col justify-start gap-3 rounded-xl bg-bg1 p-3 shadow-lg">
        <div className="flex items-center justify-normal space-x-3">
          <ExpandingTextarea />
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-iconbg p-[6px]">
            <PaperAirplaneIcon className="h-8 w-8 stroke-white" />
          </button>
        </div>
        {route.comments.map((comment) => {
          const user = getProfile(comment.username);

          return (
            <div key={count++}>
              <div className="flex w-full rounded-lg bg-bg2 p-2 shadow-lg">
                <div className="mr-5 flex-shrink-0 self-center">
                  <Link href={user.href} className="w-30">
                    <Image
                      src={user.image}
                      width={100}
                      height={100}
                      alt="picture of the person who commment"
                      className="h-16 w-16 self-center rounded-full shadow-lg"
                    />
                  </Link>
                </div>
                <div>
                  <Link href={user.href}>
                    <p className="text-lg font-bold text-blue-400">
                      @{user.username}
                    </p>
                  </Link>
                  <p className="text-sm font-medium text-white ">
                    {comment.comment}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-20 text-opacity-0 opacity-0">footer</div>
    </>
  );
}
