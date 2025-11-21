import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import BottomNav from "@/components/bottom-nav";
import { SidebarProvider } from "@/contexts/SidebarContext";

const DashboardLayout = ({ children }: any) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar - Fixed on left, hidden on mobile by default */}
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col lg:ml-0 min-w-0">
          {/* Navbar - Fixed at top */}
          <Navbar />
          
          {/* Page Content - Add bottom padding on mobile for bottom nav */}
          <main className="flex-1 overflow-x-hidden pb-[75px] bg-white lg:pb-0">
            {children}
          </main>

          {/* Bottom Navigation - Only visible on mobile */}
          <BottomNav />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
