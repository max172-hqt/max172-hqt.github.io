import { useRouter } from "next/router";

export default function SecondaryNavbar({ setSidenavOpen }) {
  const router = useRouter();
  console.log(router)

  return (
    <div className="p-2 flex gap-2 relative top-0  border-b-slate-300 border-b bg-white">
      <button
        type="button"
        className="block text-gray-500 hover:text-amber-700 focus:text-amber-700 focus:outline-none"
        onClick={() => setSidenavOpen(true)}
      >
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
      </button>
      {true && (
        <div className="flex">
          <div className="flex items-center text-gray-500">
            <div>Leetcode</div>
            <svg
              width="3"
              height="6"
              aria-hidden="true"
              className="mx-3 overflow-visible text-gray-500"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <div className="font-semibold">TODO</div>
        </div>
      )}
    </div>
  );
}
