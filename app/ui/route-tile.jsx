import { ropeRoutes, boulderRoutes, events } from "../lib/placeholder-data";

export default function RouteTile() {
  <>
    <h2 class="ml-5 text-3xl font-bold text-white">New Routes & Boulders</h2>
    <div class="m-5 flex flex-col justify-center overflow-y-hidden rounded-3xl bg-bg1 p-3 shadow-lg">
      <div class="gradient-background-blue mb-4 flex h-20 w-full rounded-full last:mb-0">
        <div class="m-1 flex w-full justify-between overflow-hidden rounded-full bg-bg2">
          <img
            src="img/rope1.jpg"
            alt="picture of route"
            class="m-1 w-12 rounded-l-full"
          />
          <p class="self-center text-center text-2xl font-semibold text-white">
            The Wurliest Burliest Man
          </p>
          <p class="mr-3 self-center font-semibold text-white">5.12-</p>
        </div>
      </div>
      <div class="gradient-background-red mb-4 flex h-20 w-full rounded-full last:mb-0">
        <div class="m-1 flex w-full justify-between overflow-hidden rounded-full bg-bg2">
          <img
            src="img/rope2.jpg"
            alt="picture of route"
            class="m-1 w-12 rounded-l-full"
          />
          <p class="self-center text-2xl font-semibold text-white">
            The Long Dive
          </p>
          <p class="mr-3 self-center font-semibold text-white">5.10&nbsp;</p>
        </div>
      </div>
      <div class="gradient-background-black mb-4 flex h-20 w-full rounded-full last:mb-0">
        <div class="m-1 flex w-full justify-between overflow-hidden rounded-full bg-bg2">
          <img
            src="img/boulder1.jpg"
            alt="picture of route"
            class="m-1 w-12 rounded-l-full"
          />
          <p class="self-center text-center text-2xl font-semibold text-white">
            The Worldest Longest Boulder
          </p>
          <p class="mr-3 self-center font-semibold text-white">
            V3&nbsp;&nbsp;
          </p>
        </div>
      </div>
    </div>
  </>;
}
