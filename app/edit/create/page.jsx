import Link from "next/link";
import GradeSelect from "@/app/ui/edit/create/grade-select";

export default function createPage() {
  return (
    <>
      <div className="mt-32 flex h-4/5 items-start justify-center">
        <div className="flex w-4/5 flex-col justify-center overflow-hidden rounded-3xl bg-bg1 p-5 shadow-lg">
          <h1 className="mb-5 text-center text-3xl font-bold text-white">
            Create A New Route
          </h1>
          <div className="flex flex-col items-center gap-3">
            <input
              type="text"
              placeholder="Route Name"
              className="w-full rounded-lg bg-bg2 p-2 text-white"
            />
            <GradeSelect />
            <input
              type="text"
              placeholder="Setter Name"
              className="w-full rounded-lg bg-bg2 p-2 text-white"
            />
          </div>
        </div>
      </div>
    </>
  );
}
