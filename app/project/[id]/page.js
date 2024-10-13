import { person } from "@/app/data";
import Image from "next/image";

const AppDetails = ({ params }) => {
  if (!params.id) {
    return (
      <div className="text-center p-5">
        <svg
          aria-hidden="true"
          class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-500"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  }

  const appItem = person.projects.find((app) => app.id === Number(params?.id));

  return (
    <div className="bg-[#f2f5f9]">
      <div className="w-ful h-screen 2xl:w-4/5 xl:w-[90%] md:w-[95%] mx-auto p-5">
        <div className="app-details-header flex items-start sm:items-center justify-between my-3">
          <div className="logo-text flex items-start sm:items-center gap-x-2">
            <div className="logo w-1/4 sm:w-auto">
              <Image
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
                src={appItem.icon}
                alt={appItem.name}
              />
            </div>
            <div className="text w-3/4 sm:w-auto">
              <div className="text text-xl sm:text-2xl line-clamp-2 font-semibold capitalize">
                {appItem.name}
              </div>
              <div className="flex items-center gap-x-1 text-xs sm:text-sm mt-2.5">
                <div className="text flex items-center gap-x-1 text-xs border border-black rounded-3xl text-black capitalize px-3 py-1">
                  <span className="hidden sm:block">
                    {appItem.platform === "android" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    )}
                  </span>
                  {appItem.platform}
                </div>
              </div>
            </div>
          </div>
          <div className="button w-1/4 sm:w-auto">
            <a
              className={`block px-3 py-4 leading-[0] ${
                appItem.platform === "android"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-orange-500 hover:bg-orange-600"
              } text-sm font-medium text-center text-white rounded focus:ring-0 focus:outline-none capitalize`}
              href={appItem.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {appItem.platform === "android" ? (
                <span className="flex items-center gap-x-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  <span className="hidden sm:inline-block">download</span>
                </span>
              ) : (
                <span className="flex items-center gap-x-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  <span className="hidden sm:inline-block">browse</span>
                </span>
              )}
            </a>
          </div>
        </div>
        <div className="content">
          <div className="description section">
            <div className="text text-lg sm:text-xl font-semibold capitalize">
              description
            </div>
            <div className="text-sm text-slate-400 mt-3">
              {appItem.description?.charAt(0).toUpperCase() +
                appItem.description?.slice(1).toLowerCase()}
            </div>
          </div>
          <h1 className="mt-10 text-5xl">This page is under construction</h1>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
