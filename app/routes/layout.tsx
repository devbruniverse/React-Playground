import { Outlet } from "react-router";
import { Nav } from "~/ui/Nav";

export default function Dashboard() {
  return (
    <div className="container m-auto">
      <div className="grid grid-cols-12">
        <Nav />
        <div className="col-span-12 md:col-span-9 p-4 h-screen shadow-[-15px_0px_10px_-15px_rgba(0,0,0,0.25)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
