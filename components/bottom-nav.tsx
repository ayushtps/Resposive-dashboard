"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNav = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around py-3 px-2">
        {/* Home */}
        <Link
          href="/dashboard"
          className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-colors ${
            isActive("/dashboard")
              ? "text-orange-500"
              : "text-gray-600"
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>

        {/* Accepted Jobs */}
        <Link
          href="/dashboard/accepted-jobs"
          className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-colors ${
            isActive("/dashboard/accepted-jobs")
              ? "text-orange-500"
              : "text-gray-600"
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </Link>

        {/* Earning / Shop */}
        <Link
          href="/dashboard/earning"
          className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-colors ${
            isActive("/dashboard/earning")
              ? "text-orange-500"
              : "text-gray-600"
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </Link>

        {/* Canceled Jobs */}
        <Link
          href="/dashboard/canceled-jobs"
          className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-colors ${
            isActive("/dashboard/canceled-jobs")
              ? "text-orange-500"
              : "text-gray-600"
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Link>

        {/* Completed Jobs / Dollar */}
        <Link
          href="/dashboard/completed-jobs"
          className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-colors ${
            isActive("/dashboard/completed-jobs")
              ? "text-orange-500"
              : "text-gray-600"
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>

        {/* Profile */}
        <Link
          href="/dashboard/profile"
          className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-colors ${
            isActive("/dashboard/profile")
              ? "text-orange-500"
              : "text-gray-600"
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;

