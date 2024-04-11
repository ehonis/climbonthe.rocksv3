import EditRouteTiles from "../ui/edit/edit-route-tiles";

export default function editPage() {
  return (
    <>
      <div className="mt-8 flex justify-between">
        <h2 className="ml-5 self-center text-3xl font-bold text-white">
          Ropes
        </h2>
        <div id="editButton" className="flex pr-3 pt-2">
          <button className="h-10 w-10 self-center rounded-full bg-green-500">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="h-10 w-10 stroke-white"
                d="M6 12H18M12 6V18"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div id="edit-rope-route-container">
        <EditRouteTiles type="rope" />
      </div>
      <div className="flex justify-between">
        <h2 className="ml-5 self-center text-3xl font-bold text-white">
          Boulders
        </h2>
        <div id="editButton" className="flex pr-3 pt-2">
          <button className="h-10 w-10 self-center rounded-full bg-green-500">
            <svg
              className="h-10 w-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18M12 6V18"
                className="stroke-white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div id="edit-boulder-route-container">
        <EditRouteTiles type="boulder" />
      </div>
      <div className="flex justify-between">
        <h2 className="ml-5 self-center text-3xl font-bold text-white">
          Events
        </h2>
        <div id="editButton" className="flex pr-3 pt-2">
          <button className="h-10 w-10 self-center rounded-full bg-green-500">
            <svg
              className="h-10 w-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18M12 6V18"
                className="stroke-white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div id="edit-event-route-container" className="mb-24">
        <EditRouteTiles type="event" />
      </div>
    </>
  );
}
