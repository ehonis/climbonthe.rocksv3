export default function NavBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 left-0 h-16 overflow-hidden bg-bg1">
      <ul className="flex h-full justify-around">
        <li className="h-14 w-14 self-center rounded-2xl p-2">
          <a href="routes.html" className="cursor-pointer">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="h-12 w-12 self-center fill-iconbg"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.96 4.13a.75.75 0 0 1 .369-1.264l4.767-1.045a.75.75 0 0 1 .893.893l-1.046 4.767a.75.75 0 0 1-1.262.37L6.959 4.129zm6.737 18.465a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2zM7.407 7.403a1 1 0 0 0-1.414 0L3.69 9.705a4.246 4.246 0 0 0 0 6.005l.004.003a4.253 4.253 0 0 0 6.01-.003l6.005-6.005c.88-.88 2.305-.88 3.185-.002.878.876.879 2.298.003 3.176l-.002.001-1.77 1.77a1 1 0 0 0 1.414 1.415l1.77-1.77.004-.004a4.246 4.246 0 0 0-.007-6.004 4.253 4.253 0 0 0-6.01.003L8.29 14.295c-.879.88-2.304.88-3.185 0a2.246 2.246 0 0 1 0-3.175l2.302-2.303a1 1 0 0 0 0-1.414z"
              />
            </svg>
          </a>
        </li>
        <li className="h-14 w-14 self-center rounded-2xl p-2">
          <a href="search.html" className="cursor-pointer">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="h-12 w-12 self-center fill-iconbg"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C11.381 15 12.6296 14.4415 13.5355 13.5355C14.4415 12.6296 15 11.381 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5719 16.481 13.0239 15.6063 14.1921L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1921 15.6063C13.0239 16.481 11.5719 17 10 17C6.13401 17 3 13.866 3 10Z"
              />
            </svg>
          </a>
        </li>
        <li className="h-14 w-14 self-center rounded-2xl p-2">
          <a href="editRoute.html" className="cursor-pointer">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                className="h-12 w-12 self-center fill-iconbg"
                stroke="#8b8c8f"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 4 4 20M4 7h3m3 0H7m0 0V4m0 3v3m7 7h6"
              />
            </svg>
          </a>
        </li>
        <li className="h-14 w-14 self-center rounded-2xl p-2">
          <a href="profile.html" className="cursor-pointer">
            <svg
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-180.000000, -2159.000000)"
                  fill="#8B8C8F"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      className="h-12 w-12 self-center fill-iconbg"
                      d="M134,2008.99998 C131.783496,2008.99998 129.980955,2007.20598 129.980955,2004.99998 C129.980955,2002.79398 131.783496,2000.99998 134,2000.99998 C136.216504,2000.99998 138.019045,2002.79398 138.019045,2004.99998 C138.019045,2007.20598 136.216504,2008.99998 134,2008.99998 M137.775893,2009.67298 C139.370449,2008.39598 140.299854,2006.33098 139.958235,2004.06998 C139.561354,2001.44698 137.368965,1999.34798 134.722423,1999.04198 C131.070116,1998.61898 127.971432,2001.44898 127.971432,2004.99998 C127.971432,2006.88998 128.851603,2008.57398 130.224107,2009.67298 C126.852128,2010.93398 124.390463,2013.89498 124.004634,2017.89098 C123.948368,2018.48198 124.411563,2018.99998 125.008391,2018.99998 C125.519814,2018.99998 125.955881,2018.61598 126.001095,2018.10898 C126.404004,2013.64598 129.837274,2010.99998 134,2010.99998 C138.162726,2010.99998 141.595996,2013.64598 141.998905,2018.10898 C142.044119,2018.61598 142.480186,2018.99998 142.991609,2018.99998 C143.588437,2018.99998 144.051632,2018.48198 143.995366,2017.89098 C143.609537,2013.89498 141.147872,2010.93398 137.775893,2009.67298"
                      id="profile-[#1341]"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
