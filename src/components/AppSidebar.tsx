import { NavLink, useLocation } from "react-router-dom";
import { 
  User, 
  Users, 
  Camera, 
  Settings,
  MessageCircle
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
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "내 캐릭터",
    url: "/my-characters",
    icon: User,
  },
  {
    title: "커뮤니티 캐릭터",
    url: "/community",
    icon: Users,
  },
  {
    title: "채팅방",
    url: "/chats",
    icon: MessageCircle,
  },
  {
    title: "사진첩",
    url: "/gallery",
    icon: Camera,
  },
  {
    title: "설정",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path || currentPath.startsWith(path);
  
  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/20 text-primary border-r-2 border-primary" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar
      className="border-r border-border/50 bg-card/50 backdrop-blur-sm"
      collapsible="icon"
    >
      <SidebarContent className="bg-transparent">
        {/* Logo Section */}
        <div className="p-4 border-b border-border/50">
          {!isCollapsed ? (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-warm rounded-lg flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-foreground">캐릭터챗</span>
            </div>
          ) : (
            <div className="w-8 h-8 bg-gradient-warm rounded-lg flex items-center justify-center mx-auto">
              <MessageCircle className="w-4 h-4 text-primary-foreground" />
            </div>
          )}
        </div>

        <SidebarGroup className="px-2">
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : "text-muted-foreground"}>
            메뉴
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavClass}
                      title={isCollapsed ? item.title : undefined}
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      {!isCollapsed && (
                        <span className="ml-3 font-medium">{item.title}</span>
                      )}
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