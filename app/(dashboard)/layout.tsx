import Navbar from "@/components/Navbar";
import { checkSubscription } from "@/lib/subscription";
import { getApiLimitCount } from "@/lib/api-limit";
import Sidebar from "@/components/sidebar";
import { Toaster } from "@/components/ui/toaster";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    const apiLimitCount = await getApiLimitCount();
    const isPro = await checkSubscription();
  return (
    <div className="h-full relative">
      <div className="hidden  h-full md:flex md:flex-col md:w-72 md:fixed md:inset-y-0 z-[80] bg-gray-900">
       <Sidebar  isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>

      <main className="md:pl-72">
        <Navbar />
        <Toaster/>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
