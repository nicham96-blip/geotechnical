import { NavLink } from "@/components/NavLink";
import { useSidebar } from "@/components/ui/sidebar";
import { 
  Home, 
  Layers, 
  FlaskConical, 
  BarChart3, 
  Images, 
  AlertTriangle, 
  Users 
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navigation = [
  { title: "Home", url: "/", icon: Home },
  { title: "Soil Samples", url: "/samples", icon: Layers },
  { title: "Test Dashboard", url: "/tests", icon: FlaskConical },
  { title: "Analysis", url: "/analysis", icon: BarChart3 },
  { title: "Gallery", url: "/gallery", icon: Images },
  { title: "Lab Notes", url: "/notes", icon: AlertTriangle },
  { title: "Team", url: "/team", icon: Users },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar
      className={`${collapsed ? "w-14" : "w-64"} transition-all duration-300 bg-sidebar border-sidebar-border`}
    >
      <SidebarContent>
        <div className="p-4 border-b border-sidebar-border">
          <h2 className={`text-sidebar-foreground font-heading font-bold ${collapsed ? "text-xs text-center" : "text-lg"}`}>
            {collapsed ? "GTL" : "Geotech Lab"}
          </h2>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60">
            {!collapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className="hover:bg-sidebar-accent transition-colors duration-200"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
