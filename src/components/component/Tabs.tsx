import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TabsComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("today");

  useEffect(() => {
    const currentPath = location.pathname.split("/").pop() || "today";
    setActiveTab(currentPath);
  }, [location.pathname]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };

  return (
    <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between items-center">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          defaultValue="today"
          className="w-full py-4"
        >
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 h-auto">
            <TabsTrigger
              value="left"
              className="text-lg sm:text-xl lg:text-2xl px-2 sm:px-4 py-3 h-14"
            >
              Left
            </TabsTrigger>
            <TabsTrigger
              value="today"
              className="text-lg sm:text-xl lg:text-2xl px-2 sm:px-4 py-3 h-14"
            >
              Today
            </TabsTrigger>
            <TabsTrigger
              value="expired"
              className="text-lg sm:text-xl lg:text-2xl px-2 sm:px-4 py-3 h-14"
            >
              Expired
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="text-lg sm:text-xl lg:text-2xl px-2 sm:px-4 py-3 h-14"
            >
              Completed
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
