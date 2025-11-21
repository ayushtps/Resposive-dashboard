import {
  Activity,
  Calendar,
  ChartColumnBig,
  History,
  MoveDownLeft,
  MoveUpRight,
  Timer,
} from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="bg-white min-h-screen px-[15px] sm:px-[18px] sm:pt-[18px] pt-[18px] lg:pl-[8px] lg:p-[21px]">
      <div className="w-full space-y-4 sm:space-y-6">
        {/* Active Jobs Section */}
        <div>
          <h2 className="text-[12px] font-[500] text-[#000000] mb-[7px]">
            Active Jobs
          </h2>
          <div className="shadow-[0_0_4px_0_rgba(102,102,102,0.25)] rounded-[10px]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <div className="sm:pt-[15] pt-[12px] sm:pb-[23px] pb-[34px] sm:px-[18px] px-[12px] border-b border-[#DEDEDE]">
                  <div>
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="order-2 sm:order-1 text-[16px] text-[#000000] font-[500] sm:mb-[4px] mb-[6px]">
                          Sink Repairing - Est To Reach 32mins
                        </h3>
                        <div className="order-1 sm:order-2 flex items-center gap-[15px] mb-[18px] sm:mb-0">
                          <p className="text-[12px] text-[#919090] font-[400]">
                            Appointment ID:
                          </p>
                          <p className="text-[12px] text-[#000000] font-[500]">
                            #142268ASW
                          </p>
                        </div>
                      </div>
                      <p className="text-[12px] text-[#737373] font-[400]">
                        michelle.rivera@example.com,{" "}
                        <span className="text-[#919090] font-[400]">
                          (201) 445 452 148
                        </span>
                      </p>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="sm:py-[14px] py-[15px] sm:pl-[18px] pl-[15px] sm:pr-[23px] pr-[15px]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-[11px] gap-[7px]">
                    <div className="flex items-center">
                      <span className="bg-[#F69A9A3D] text-[#DD1E1E] text-[8px] font-[600] px-[6px] py-[2px] rounded-[7px]">
                        URGENT
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-between flex-1 flex-wrap">
                      <div className="flex items-center gap-[7px] text-[12px] text-[#737373] font-[400]">
                        <svg
                          className="w-[15px] h-[15px]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>6391 Elgin St. Celina, Delaware 10299</span>
                      </div>
                      <div>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                          <button className=" text-[#FF6C31] text-[12px] font-[600] flex items-center gap-[9px] transition-colors">
                            View Details
                            <svg
                              className="w-4 h-4"
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
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second Section */}
        <div>
          <p className="text-[12px] text-[#919090] font-[500] mb-[8px] sm:mb-[13px]">
            ServiceLead /{" "}
            <span className="text-[#000000] font-[500]">Dashboard</span>
          </p>
          <div className="flex flex-col lg:flex-row gap-[13px]">
            {/* Left Column - Job Performance & Recently Completed */}
            <div className="w-full lg:max-w-[353px] flex-[0_0_353px] h-auto">
              {/* Job Performance Insight */}
              <div className="bg-white rounded-[15px] shadow-[0_0_4px_0_rgba(102,102,102,0.25)] p-[18px] lg:p-[18px] h-full flex flex-col">
                <div className="flex items-center gap-[11px] mb-[26px]">
                  <Activity size={18} />
                  <h2 className="text-[12px] font-[500] text-[#515151]">
                    Your Job Performance Insight
                  </h2>
                </div>

                {/* Job Report */}
                <div className="mb-[8px] border-b border-[#DEDEDE]">
                  <div className="mb-[19px]">
                    <span className="text-[10px] font-[600] text-[#000000] uppercase">
                      Job Report
                    </span>
                  </div>
                  <div className="flex items-baseline gap-[6px] mb-[12px]">
                    <span className="text-[24px] font-[600] text-[#000000]">
                      854
                    </span>
                    <span className="text-[12px] font-[600] text-[#515151]">
                      / 987
                    </span>
                    <p className="text-[10px] text-[#919090] font-[600]">
                      <span className="text-[#01BE11]">+18</span> More jobs then
                      last month
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-[12px]">
                    <div className="w-full bg-[#DEDEDE] rounded-[6px] h-[24px] overflow-hidden">
                      <div className="h-full flex">
                        <div
                          className="bg-[#FF6C31] rounded-[6px]"
                          style={{ width: "86.5%" }}
                        ></div>
                        <div
                          className="bg-[#DEDEDE]"
                          style={{ width: "13.5%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center gap-[20px] mb-[22px]">
                    <div className="flex items-center gap-[9px]">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#FF6C31]"></div>
                      <span className="text-[#919090] font-[500] text-[8px]">
                        Noi's Of Jobs Completed
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#000000]"></div>
                      <span className="text-[#919090] font-[500] text-[8px]">
                        Noi's Of Jobs Canceled
                      </span>
                    </div>
                  </div>
                </div>

                {/* Recently Completed Jobs */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-[10px] font-[500] text-[#919090] mb-[19px]">
                    Recently Completed Jobs
                  </h3>
                  <div className="space-y-[15px] flex-1">
                    {[
                      {
                        name: "Sink Bottom Repair",
                        email: "michelle.rivera@example.c",
                        amount: "$147.3",
                        date: "20 Oct 25",
                      },
                      {
                        name: "Sink Bottom Repair",
                        email: "michelle.rivera@example.c",
                        amount: "$147.3",
                        date: "20 Oct 25",
                      },
                      {
                        name: "Sink Bottom Repair",
                        email: "michelle.rivera@example.c",
                        amount: "$147.3",
                        date: "20 Oct 25",
                      },
                      {
                        name: "Sink Bottom Repair",
                        email: "michelle.rivera@example.c",
                        amount: "$147.3",
                        date: "20 Oct 25",
                      },
                      {
                        name: "Sink Bottom Repair",
                        email: "michelle.rivera@example.c",
                        amount: "$147.3",
                        date: "20 Oct 25",
                      },
                    ].map((job, index) => (
                      <div
                        key={index}
                        className="flex items-center hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <div className="w-[35px] h-[35px] bg-gray-300 rounded-full flex-shrink-0 mr-[12px]"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12px] font-[500] text-[#000000] truncate">
                            {job.name}
                          </p>
                          <p className="text-[10px] font-[400] text-[#737373] truncate">
                            {job.email}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[12px] font-[500] text-[#000000]">
                            {job.amount}
                          </p>
                          <p className="text-[10px] font-[400] text-[#737373]">
                            {job.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-[19px] w-full justify-center text-[10px] text-[#919090] shadow-[0_0_4px_0_rgba(102,102,102,0.25)] hover:text-orange-700 font-[500] rounded-[6px] py-[9px] flex items-center gap-[7px]">
                    <History size={13} />
                    See All Jobs History
                  </button>
                </div>
              </div>
            </div>
            {/* Right Column - Earning Overview */}
            <div className="w-full">
              <div className="bg-white rounded-[15px] shadow-[0_0_4px_0_rgba(102,102,102,0.25)] p-[18px] lg:p-[21px]">
                <div className="flex flex-row items-center justify-between gap-[10px] pb-[15px]">
                  <div className="flex items-center gap-[11px]">
                    <ChartColumnBig size={18} />
                    <h2 className="text-[12px] font-[500] text-[#515151]">
                      Earning Overview
                    </h2>
                  </div>
                  <div className="relative inline-block flex-shrink-0">
                    <Calendar
                      size={14}
                      className="absolute left-[10px] top-1/2 -translate-y-1/2 text-[#515151] pointer-events-none z-10"
                    />
                    <select className="text-[10px] font-[600] text-[#515151] border border-[#CACACA] rounded-[9px] pl-[31px] pr-[27px] py-[7px] focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white cursor-pointer whitespace-nowrap">
                      <option>This Year</option>
                      <option>This Month</option>
                      <option>This Week</option>
                    </select>
                    <svg
                      className="absolute right-[10px] top-1/2 -translate-y-1/2 pointer-events-none text-[#515151] z-10"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Earning Cards */}
                <div className="mb-[26px] border-y border-[#DEDEDE] py-[22px]">
                  {/* Mobile: 2x2 Grid (no borders) | MD: 2x2 Grid (with borders) | XL: 4 columns in a row */}
                  <div className="grid grid-cols-2 gap-y-[20px] md:gap-y-0 xl:flex xl:flex-row">
                    {/* Card 1: INCOME - Mobile: Top-Left, MD: Top-Left, XL: 1st */}
                    <div className="flex items-center gap-[8px] md:gap-[12px] md:border-r border-[#DEDEDE] md:pr-[18px] lg:pr-[20px] md:mb-[20px] xl:mb-0 xl:flex-1 order-1">
                      <div className="w-[35px] h-[35px] md:w-[41px] md:h-[41px] rounded-full border border-[#DEDEDE] flex items-center justify-center flex-shrink-0">
                        <MoveDownLeft size={16} color="#0EC81D" />
                      </div>
                      <div className="flex flex-col gap-[3px] md:gap-[4px] min-w-0">
                        <p className="text-[9px] md:text-[10px] font-[500] text-[#919090]">
                          INCOME
                        </p>
                        <p className="text-[11px] md:text-[12px] font-[600] text-[#000000]">
                          $14,587.46{" "}
                          <span className="text-[7px] md:text-[8px] text-[#0EAB1B] font-[600] bg-[#9AF6A13D] px-[5px] md:px-[6px] py-[2px] rounded-[7px] whitespace-nowrap">
                            +7.4%
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Card 4: Current Balance - Mobile: Top-Right, MD: Top-Right, XL: 4th */}
                    <div className="flex items-center gap-[8px] md:gap-[12px] md:pl-[18px] lg:pl-[20px] md:mb-[20px] xl:mb-0 xl:flex-1 xl:pl-[18px] lg:xl:pl-[20px] order-2 xl:order-4">
                      <div className="flex flex-col gap-[3px] md:gap-[4px] min-w-0">
                        <p className="text-[9px] md:text-[10px] font-[500] text-[#919090]">
                          Current Balance
                        </p>
                        <p className="text-[11px] md:text-[12px] font-[600] text-[#000000]">
                          $14,578.36
                        </p>
                      </div>
                    </div>

                    {/* Card 2: WITHDRAWAL - Mobile: Bottom-Left, MD: Bottom-Left, XL: 2nd */}
                    <div className="flex items-center gap-[8px] md:gap-[12px] md:border-r border-[#DEDEDE] md:pr-[18px] md:pt-[20px] xl:pt-0 xl:flex-1 xl:px-[25px] 2xl:px-[50px] order-3 xl:order-2 xl:border-r">
                      <div className="w-[35px] h-[35px] md:w-[41px] md:h-[41px] border border-[#DEDEDE] rounded-full flex items-center justify-center flex-shrink-0">
                        <MoveUpRight size={16} color="#FF6C31" />
                      </div>
                      <div className="flex flex-col gap-[3px] md:gap-[4px] min-w-0">
                        <p className="text-[9px] md:text-[10px] font-[500] text-[#919090]">
                          WITHDRAWAL
                        </p>
                        <p className="text-[11px] md:text-[12px] font-[600] text-[#000000]">
                          $12,587.46
                        </p>
                      </div>
                    </div>

                    {/* Card 3: DUE AMOUNT - Mobile: Bottom-Right, MD: Bottom-Right, XL: 3rd */}
                    <div className="flex items-center gap-[8px] md:gap-[12px] md:pl-[18px] md:pt-[20px] xl:pt-0 xl:flex-1 xl:px-[25px] 2xl:px-[50px] order-4 xl:order-3 xl:border-r border-[#DEDEDE]">
                      <div className="w-[35px] h-[35px] md:w-[41px] md:h-[41px] border border-[#DEDEDE] rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar size={16} color="#05A8F3" />
                      </div>
                      <div className="flex flex-col gap-[3px] md:gap-[4px] min-w-0">
                        <p className="text-[9px] md:text-[10px] font-[500] text-[#919090]">
                          DUE AMOUNT
                        </p>
                        <p className="text-[11px] md:text-[12px] font-[600] text-[#000000]">
                          $2,887.46
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart Section */}
                {/* Chart Section */}
                <div className="hidden md:block mb-[8px] border-b border-[#DEDEDE]">
                  <div className="relative">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 bottom-[30px] flex flex-col justify-between text-[10px] md:text-[11px] lg:text-[11px] xl:text-[12px] text-[#919090] font-[500]">
                      <span>$20,000</span>
                      <span>$15,000</span>
                      <span>$10,000</span>
                      <span>$5,000</span>
                      <span>$0</span>
                    </div>

                    {/* Chart bars */}
                    <div className="ml-[50px] md:ml-[52px] lg:ml-[52px] xl:ml-[65px] bg-white py-[22px] md:py-[25px] lg:py-[28px] xl:py-[30px] pr-[5px] md:pr-[8px] lg:pr-[8px] xl:pr-[16px]">
                      <div className="h-[190px] md:h-[200px] lg:h-[210px] xl:h-[220px] flex items-end justify-between gap-[2px] md:gap-[3px] lg:gap-[2px] xl:gap-[7px]">
                        {[
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ].map((month, index) => {
                          const heights = [
                            85, 75, 90, 58, 78, 70, 95, 62, 88, 42, 72, 0,
                          ];
                          const targetHeights = [
                            15, 25, 10, 42, 22, 30, 5, 38, 12, 58, 28, 100,
                          ];
                          return (
                            <div
                              key={month}
                              className="flex-1 flex flex-col items-center min-w-0"
                            >
                              <div className="w-full h-[190px] md:h-[200px] lg:h-[210px] xl:h-[220px] flex flex-col justify-end items-center gap-[2px]">
                                {/* Gray bar (target/canceled) */}
                                <div
                                  className="w-full max-w-[17px] md:max-w-[24px] lg:max-w-[10px] xl:max-w-[43px] bg-[#E8E8E8] rounded-t-[3px]"
                                  style={{ height: `${targetHeights[index]}%` }}
                                ></div>

                                {/* Orange bar (completed) */}
                                <div
                                  className="w-full max-w-[17px] md:max-w-[24px] lg:max-w-[10px] xl:max-w-[43px] bg-[#FF6C31]"
                                  style={{ height: `${heights[index]}%` }}
                                ></div>
                              </div>
                              <span className="mt-[6px] md:mt-[7px] lg:mt-[8px] text-[10px] md:text-[11px] lg:text-[11px] xl:text-[12px] text-[#919090] font-[500]">
                                {month}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recently Transaction History */}
                <div className="pt-[8px]">
                  <h3 className="text-[10px] font-[500] text-[#919090] mb-[17px]">
                    Recently Transaction History
                  </h3>
                  <div className="space-y-[12px] md:space-y-[15px]">
                    <div className="flex items-center gap-[11px]">
                      <div className="w-[38px] h-[38px] border border-[#DEDEDE] rounded-full flex items-center justify-center flex-shrink-0">
                        <MoveDownLeft size={16} color="#0EC81D" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-[500] text-[#000000] truncate">
                          Sink Bottom Repair
                        </p>
                        <p className="text-[10px] font-[400] text-[#737373]">
                          Order ID: 17548684
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-[12px] font-[600] text-[#01BE11]">
                          + $147.3
                        </p>
                        <p className="text-[10px] font-[400] text-[#737373]">
                          20 Oct 25
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[11px]">
                      <div className="w-[38px] h-[38px] border border-[#DEDEDE] rounded-full flex items-center justify-center flex-shrink-0">
                        <MoveUpRight size={16} color="#FF6C31" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-[500] text-[#000000] truncate">
                          Withdrawal
                        </p>
                        <p className="text-[10px] font-[400] text-[#737373]">
                          Send to XXX XXXX 7458
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-[12px] font-[600] text-[#FF6C31]">
                          - $1100.80
                        </p>
                        <p className="text-[10px] font-[400] text-[#737373]">
                          20 Oct 25
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Jobs Received Section */}
        <div>
          <div className="flex items-center gap-2 mb-[13px]">
            <h2 className="text-[18px] font-[500] text-[#000000]">
              Jobs Received
            </h2>
            <span className="bg-[#FF6C31] text-white text-[10px] font-[700] px-2 py-0.5 rounded-full">
              1
            </span>
          </div>

          <div className="bg-white rounded-[15px] shadow-[0_0_4px_0_rgba(102,102,102,0.25)] rounded-[13px] p-[20px] lg:p-[21px]">
            <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] pb-[21px]">
              {/* Job Quotation Detail */}
              <div className="lg:border-r border-[#DEDEDE] lg:mr-[30px] lg:pr-[12px]">
                <div className="flex items-center gap-[12px] mb-[20px]">
                  <svg
                    className="w-[15px] h-[15px] text-[#515151]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="text-[12px] font-[500] text-[#515151]">
                    Your Job Quotation Detail
                  </h3>
                </div>
                <div className="flex items-center gap-[8px] mb-[16px]">
                  <h4 className="text-[18px] font-[500] text-[#000000]">
                    Sink Repairing
                  </h4>
                  <span className="bg-[#F69A9A3D] text-center flex items-center justify-center text-[#DD1E1E] text-[8px] font-[600] px-[6px] py-[2px] rounded-[7px]">
                    URGENT
                  </span>
                </div>
                <p className="text-[12px] font-[400] text-[#919090] mb-[4px]">
                  Appointment ID:{" "}
                  <span className="text-[#000000] font-[500]">#142268ASW</span>
                </p>
                <p className="text-[12px] font-[400] text-[#919090]">
                  Date of Creation:{" "}
                  <span className="text-[#000000] font-[500]">
                    06:46AM 15 Oct 2025
                  </span>
                </p>
              </div>

              {/* Requirement */}
              <div className="mt-[18px] md:mt-[18px] lg:mt-0">
                <h3 className="text-[12px] font-[500] text-[#515151] mb-[9px] md:mb-[9px] lg:mb-[13px]">
                  Requirement
                </h3>
                <p className="text-[14px] font-[500]  text-[#1E1E1E] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non........
                </p>
              </div>
            </div>

            {/* Assigned To */}
            <div className="border-t border-[#DEDEDE] pt-[20px] md:pt-[17px] flex flex-col md:flex-row md:justify-between md:items-center">
              {/* Profile Section */}
              <div className="flex items-center gap-[12px] mb-[20px] pb-[20px] md:pb-[0px] border-b border-[#E0E0E0] md:mb-[16px] md:border-b-0">
                <div className="w-[40px] h-[40px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] bg-gray-300 rounded-full flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-[8px] mb-[5px]">
                    <p className="text-[14px] font-[500] text-[#000000]">
                      Ralph Edwards
                    </p>
                    <svg
                      className="w-4 h-4 text-blue-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-[10px] text-[#737373] font-[400] truncate">
                    michelle.rivera@example.com |{" "}
                    <span className="text-[#919090] font-[400]">
                      (201) 445 452 148
                    </span>
                  </p>
                </div>
              </div>

              {/* Footer: Since Assigned + View Details Button */}
              <div className="flex flex-row flex-wrap items-center justify-between gap-[12px]">
                <div className="flex items-center gap-[8px] flex-wrap">
                  <span className="text-[11px] md:text-[12px] font-[500] text-[#919090] whitespace-nowrap">
                    Since Assigned:
                  </span>
                  <Timer size={20} color="#FF6C31" className="flex-shrink-0" />
                  <span className="text-[13px] md:text-[16px] font-[600] text-[#000000] whitespace-nowrap">
                    1 hour 30 mins
                  </span>
                </div>
                <button className="bg-[#FF6C31] hover:bg-orange-600 text-white px-[16px] md:px-[22px] py-[8px] rounded-[7px] text-[12px] font-[600] flex items-center gap-[8px] transition-colors whitespace-nowrap flex-shrink-0">
                  View Details
                  <MoveUpRight size={14} />
                </button>
              </div>
            </div>

            {/* Footer */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
