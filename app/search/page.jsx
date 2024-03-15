"use client";
import Search from "../ui/search/search";

export default function Page({ searchParams }) {
  const query = searchParams?.query || "";

  const page = Number(searchParams?.page) || 1;

  return (
    <div>
      <div class="ml-5 mr-5 mt-4 flex justify-between">
        <Search />
        <button className="rounded-full bg-bg1 p-2">
          <svg
            class="h-8 w-8 self-center fill-iconbg"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C11.381 15 12.6296 14.4415 13.5355 13.5355C14.4415 12.6296 15 11.381 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5719 16.481 13.0239 15.6063 14.1921L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1921 15.6063C13.0239 16.481 11.5719 17 10 17C6.13401 17 3 13.866 3 10Z"
            />
          </svg>
        </button>
      </div>
      <div
        className="m-5 flex h-full flex-col justify-center overflow-y-hidden rounded-3xl bg-bg1 p-3 shadow-lg"
        id="searchDivContainer"
      ></div>
    </div>
  );
}
