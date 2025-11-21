"use client";

import { useSidebar } from "@/contexts/SidebarContext";

const Navbar = () => {
  const { toggle } = useSidebar();

  return (
    <header className="bg-white sticky top-0 z-20">
      {/* Mobile Logo Header */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex flex-col -space-y-0.5">
            <span className="text-base font-bold text-gray-900">Service<span className="text-orange-500">Lead</span></span>
            <span className="text-[9px] text-gray-500 font-medium">Your One Stop Solution</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center" aria-label="Notifications">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>
          <div className="flex items-center gap-1.5 bg-gray-50 rounded-full px-3 py-1.5">
            <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 13.24a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 00.22-.53V6.75z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium text-gray-900">Notification</span>
          </div>
        </div>
      </div>

      {/* Desktop Header Content */}
      <div className="hidden lg:flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 lg:gap-4 px-3 sm:px-4 lg:px-6 py-3 lg:py-4">
        {/* Left Section - Greeting */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 w-full lg:w-auto">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
          <div className="min-w-0">
            <div className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 truncate">
              Good Morning, Sunny 36°C
            </div>
            <div className="text-[10px] lg:text-xs font-medium text-gray-500 truncate">
              Welcome Back To ServiceLead
            </div>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex items-center gap-4 flex-1 w-full lg:w-auto lg:max-w-md order-3 lg:order-2">
          <div className="relative w-full">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
            />
          </div>
        </div>

        {/* Right Section - Notification */}
        <div className="flex items-center gap-2 sm:gap-4 order-2 lg:order-3">
          <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" aria-label="Notifications">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
