//import { PlusIcon } from "lucide-react";
//import { Button } from "@/components/ui/button";
import AddDialog from "./AddDialog";
import TabsComponent from "./Tabs";

export default function Header() {
  return (
    <>
    <header className="bg-background shadow-sm">
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-3xl font-bold text-foreground mb-4 sm:mb-0">
              My Todo List
            </h1>
            <AddDialog isNew={true} />
          </div>
        </div>
      </div>
      </header>
      <TabsComponent />
    </>
  );
}
