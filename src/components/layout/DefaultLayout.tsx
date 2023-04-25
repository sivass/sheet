import { Outlet } from "react-router";
import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";

export default function DefaultLayout(): JSX.Element {
  return (
    <>
       <div className="bg-emerald-50 h-full absolute w-full">
        <header>
           <Header />
        </header>
        <aside>
          <SideBar />
        </aside>
        <main>
          <Outlet />
        </main>
        </div>
    </>
  );
}
