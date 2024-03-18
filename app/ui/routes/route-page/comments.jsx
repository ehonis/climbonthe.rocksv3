import { profiles } from "@/app/lib/placeholder-data";
import Image from "next/image";
import Link from "next/link";

function getProfile(name) {
  const foundPerson = profiles.find((person) => person.username === name);
  return foundPerson;
}

export default function Comments({ route }) {
  return (
    <>
      <h1 className="ml-5 mr-5 text-2xl font-bold text-white">Comments</h1>
      <div className="ml-5 mr-5 mt-3 flex flex-col gap-3 rounded-xl bg-bg1 p-3 shadow-lg">
        {route.comments.map((comment) => {
          const user = getProfile(comment.username);

          return (
            <>
              <div className="flex w-full rounded-lg bg-bg2 p-2 shadow-lg">
                <div className="mr-5 flex-shrink-0 self-center">
                  <Link href={user.href} className="w-30">
                    <Image
                      src={user.image}
                      width={1000}
                      height={1000}
                      alt="picture of the person who commment"
                      className="h-16 w-16 self-center rounded-full shadow-lg"
                    />
                  </Link>
                </div>
                <div>
                  <Link href={user.href}>
                    <p className="text-blue-400 text-lg font-bold">
                      @{user.username}
                    </p>
                  </Link>
                  <p className="text-sm font-medium text-white ">
                    {comment.comment}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
