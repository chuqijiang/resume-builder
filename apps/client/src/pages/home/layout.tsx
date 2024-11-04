import { ScrollArea } from "@reactive-resume/ui";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => (
  <ScrollArea orientation="vertical" className="h-screen">
    <Outlet />
  </ScrollArea>
);
