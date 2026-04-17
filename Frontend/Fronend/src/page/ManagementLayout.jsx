import { Outlet } from "react-router-dom";
import Header from "../component/herader";
import Sidebar from "./managment/access/sidebar";

export default function ManagementLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <Header />
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-6 lg:flex-row">
        <Sidebar />
        <main className="flex flex-1 items-center justify-center overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
     
