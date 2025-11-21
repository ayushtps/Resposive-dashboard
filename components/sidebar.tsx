"use client";

import Link from "next/link";
import { useSidebar } from "@/contexts/SidebarContext";

const Sidebar = () => {
  const { isOpen: isMobileMenuOpen, close } = useSidebar();

  return (
    <>
      {/* Mobile Menu Button - Hidden as navbar has menu button */}
      {/* Menu is controlled by navbar hamburger button on mobile */}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 h-screen left-0 z-40 w-[270px] p-[13px]  bg-white  transform transition-transform duration-300 ease-in-out overflow-y-hidden overflow-x-hidden ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
        style={{ overflowY: "hidden", overflowX: "hidden" }}
      >
        <div
          className="h-full p-[18px]  max-h-screen flex flex-col overflow-y-hidden overflow-x-hidden rounded-[12px] shadow-[0_0_4px_0_rgba(102,102,102,0.25)]"
          style={{ overflowY: "hidden", overflowX: "hidden" }}
        >
          {/* Logo Section */}
          <div className="border-b border-[#DEDEDE] flex-shrink-0 pb-[24px] mb-[22px]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1E3A8A] rounded flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h1 className="text-lg font-bold text-gray-900">ServiceLead</h1>
                <p className="text-xs text-gray-500">Your One Stop Solution</p>
              </div>
            </div>
          </div>

          {/* Main Menu */}
          <nav
            className="flex-1 overflow-y-hidden overflow-x-hidden min-h-0 flex flex-col max-h-full"
            style={{ overflowY: "hidden" }}
          >
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2 flex-shrink-0">
              MAIN MENU
            </h2>
            <ul
              className="space-y-1 flex-1 min-h-0 overflow-y-hidden overflow-x-hidden"
              style={{ overflowY: "hidden" }}
            >
              <li>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 px-3 py-1.5 rounded-lg bg-orange-50 text-orange-600 font-medium"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span className="text-sm">Dashboard Overview</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/accepted-jobs"
                  className="flex items-center gap-3 px-3 py-1.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm">Accepted Jobs</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/completed-jobs"
                  className="flex items-center gap-3 px-3 py-1.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
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
                  <span className="text-sm">Completed Jobs</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/canceled-jobs"
                  className="flex items-center gap-3 px-3 py-1.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
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
                  <span className="text-sm">Canceled Jobs</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/earning"
                  className="flex items-center gap-3 px-3 py-1.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
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
                  <span className="text-sm">Earning</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/profile"
                  className="flex items-center gap-3 px-3 py-1.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
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
                  <span className="text-sm">Profile</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* AI Powered Section */}
          <div className="px-4 py-2 flex-shrink-0">
            <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-lg p-2.5 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full -mr-12 -mt-12"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white rounded-full -ml-10 -mb-10"></div>
              </div>
              <p className="text-[10px] font-medium relative z-10 leading-tight">
                Whole Desktop is Powered By ServiceLead AI
              </p>
            </div>
          </div>

          {/* AI Assistance Section */}
          <div className="px-4 py-2 flex-shrink-0">
            <div className="bg-gray-50 rounded-lg p-2.5">
              <h3 className="text-[10px] font-semibold text-gray-900 mb-1">
                Need AI Assistance?
              </h3>
              <p className="text-[10px] text-gray-600 mb-1.5 line-clamp-2 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
                tempo
              </p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-[10px] font-medium py-1 px-2 rounded-lg transition-colors">
                Talk Now!
              </button>
            </div>
          </div>

          {/* User Profile Card - Bottom */}
          <div className="p-4 border-t flex-shrink-0 mt-auto">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-gray-600 font-semibold text-sm">WW</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  Wade Warren
                </p>
                <p className="text-xs text-gray-500 truncate">
                  example@yahoo.com
                </p>
              </div>
              <svg
                className="w-4 h-4 text-gray-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={close}
        />
      )}
    </>
  );
};

export default Sidebar;
