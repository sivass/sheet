import sheetLogo  from '../../assets/logo/sheet-white.png';
import Menu from '../menu/Menu';
function SideBar() {
    return (
        <div className="w-72 h-full bg-emerald-500 rounded-r-3xl absolute inset-x-0 z-20">
        <div className="grid w-full place-content-center h-20 p-4">
            <div className="container max-w-screen-lg mx-auto p-2">
                <img src={sheetLogo} alt="sheet" className='w-40' />
            </div>
        </div>
        <div className="py-5">
            <Menu />
            <div className="absolute bottom-0 inset-x-0 py-5">
            </div>
        </div>
        </div>
      
    )
  }
  
  export default SideBar
