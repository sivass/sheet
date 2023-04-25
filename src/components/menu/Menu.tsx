import { useState } from 'react';
import { HiHome,HiSquare3Stack3D,HiShoppingCart,HiUserGroup,HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { Link } from 'react-router-dom';
interface IMenu {
    id:number,
    name:string,
    slug:string,
    icon:JSX.Element
}
type MenuActiveProps = {
    slug:string,
    active:boolean
}
const menuList:IMenu[] = [
    {
        id:1,
        name: "Dashboard",
        slug: "dashboard",
        icon: <HiHome className="text-emerald-50 text-md"/> 
    },{
        id:2,
        name: "CMS",
        slug: "cms",
        icon: <HiSquare3Stack3D  className="text-emerald-50 text-md" />
    },{
        id:3,
        name: "Product",
        slug: "product",
        icon: <HiShoppingCart  className="text-emerald-50 text-md" />
    },{
        id:4,
        name: "Customer",
        slug: "customer",
        icon: <HiUserGroup  className="text-emerald-50 text-md" />
    },
    {
        id:5,
        name: "Support",
        slug: "support",
        icon: <HiOutlineWrenchScrewdriver  className="text-emerald-50 text-md" />
    }
]

const activeMenu:MenuActiveProps = {
    slug:"dashboard",
    active: true
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Menu():JSX.Element {
    const [menu, setMenu]: [IMenu[], (menu : IMenu[]) => void] = useState(menuList);
    const [menuActive, setMenuActive]: [MenuActiveProps,(menuActive : MenuActiveProps) =>  void]= useState(activeMenu);
  return <>{
    (menu && menu.map((item) => ( 
        <div className="flex w-full relative align-middle justify-center h-11 hover:bg-emerald-900 " key={item.id}>
            {menuActive.slug == item.slug && menuActive.active && <div className="h-full w-1 bg-white shrink-0 rounded-r-3xl"></div> }
            <div className="mx-auto p-2 w-36">
                <div className="flex items-center space-x-4">
                    <div className="">
                        {item.icon}
                    </div>
                    <div className="">
                        <p className="font-medium text-emerald-50 text-md font-sans py-2 cursor-pointer"  onClick ={() => setMenuActive({slug:item.slug,active:true})}>
                            <Link to={`${item.slug}`}>{item.name}</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )))}</>
}
