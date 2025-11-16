import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar";
import { Menu } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-14 border-b border-border bg-card flex items-center px-4 sticky top-0 z-10">
            <SidebarTrigger className="mr-4">
              <Menu className="h-5 w-5" />
            </SidebarTrigger>
            <div className="flex items-center justify-between w-full">
              <h1 className="text-xl font-heading font-bold text-foreground">
                Geotechnical Engineering Laboratory
              </h1>
              <span className="text-sm text-muted-foreground hidden md:block">
                Advanced Soil Analysis & Testing
              </span>
            </div>
          </header>
          
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
