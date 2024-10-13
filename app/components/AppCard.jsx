import Image from "next/image";

const AppCard = ({ item }) => {
  return (
    <div className="item-item bg-white relative block border border-gray-200 rounded-lg shadow p-3">
      <div className="content w-[90%]">
        <a className="block" href={"/project/" + item.id}>
          <div className="item-icon-name flex items-center gap-x-2">
            <Image
              className="w-10 h-10 rounded-full"
              src={item.icon}
              alt={item.name}
            />
            <div className="text">
              <div
                className="text text-sm text-black font-semibold line-clamp-1"
                title={item.name}
              >
                {item.name}
              </div>
              <div className="text text-xs text-slate-400 font-medium mt-1 capitalize">
                platform: {item.platform}
              </div>
            </div>
          </div>
          <div className="description h-8 mt-3 text-xs text-slate-400 line-clamp-2">
            {item.description?.charAt(0).toUpperCase() +
              item.description?.slice(1).toLowerCase()}
          </div>
          <div className="platform-icon absolute top-3 right-3 flex items-center gap-x-2">
            <Image className="w-6" src={item.platformIcon} alt={item.name} />
          </div>
        </a>
      </div>
      <div className="button flex justify-between mt-5">
        <a
          className="flex items-center gap-x-1 text-xs font-medium text-blue-500 capitalize"
          href={"/project/" + item.id}
        >
          Details
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
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
        <a
          className={`px-2 py-1.5 ${
            item.platform === "android"
              ? "bg-green-500 hover:bg-green-600"
              : "bg-orange-500 hover:bg-orange-600"
          } text-xs font-medium text-center text-white rounded focus:ring-0 focus:outline-none capitalize`}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.platform === "android" ? (
            <span className="flex items-center gap-x-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              download
            </span>
          ) : (
            <span className="flex items-center gap-x-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              browse
            </span>
          )}
        </a>
      </div>
    </div>
  );
};

export default AppCard;
