import { profiles } from "@/app/lib/placeholder-data";
import Image from "next/image";
export default function ProfilePage({ params }) {
  const foundPerson = profiles.find(
    (person) => person.username === params.slug,
  );
  if (!(foundPerson === undefined)) {
    return (
      <>
        <div className="m-5 flex rounded-xl bg-bg1 p-4 shadow-lg">
          <Image
            src={foundPerson.image}
            width={9999}
            height={9999}
            alt="Picture of person"
            className="h-32 w-32 rounded-full shadow-lg"
          />
          <div className="w-{1px} ml-4 h-32 border-l-2 border-iconbg" />
          <div className="ml-3 flex flex-col justify-between">
            <div className="self-start">
              <h2 className="whitespace-nowrap text-3xl font-semibold text-white">
                @{foundPerson.username}
              </h2>
              <p className="m-0 p-0 text-iconbg">{foundPerson.name}</p>
            </div>
            <div className="">
              <p className="m-0 p-0 text-green-400">Staff</p>
              <p className="text-bluee">Routesetter</p>
            </div>
          </div>
        </div>
        <div className="ml-5 mr-5 flex justify-between">
          <div className="mr-2 flex w-full flex-col items-center rounded-xl bg-bg1 p-4 shadow-lg">
            <h2 className="gradient-text-blue m-0 p-0 text-8xl font-bold">
              12
            </h2>
            <p className="m-0 p-0 text-lg font-semibold text-white">ascents</p>
          </div>
          <div className="ml-3 flex w-full flex-col items-center rounded-xl bg-bg1 p-4 shadow-lg">
            <h2 className="gradient-text m-0 p-0 text-8xl font-bold">32</h2>
            <p className="m-0 p-0 text-lg font-semibold text-white">sets</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="h-screen w-screen justify-center text-3xl text-white">
        person-not-found
      </div>
    );
  }
}
