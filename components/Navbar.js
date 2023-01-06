import Nav from './Nav'
import {useState} from "react";
import classnames from "classnames";


export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <div className="bg-customWhite flex md:items-center md:justify-between pb-2 py-4 md:px-40 px-8 fixed top-0 left-0 w-full shadow-lg rounded-lg z-10">
                <di className="hidden md:block">
                    <Nav dir="horizontal" />
                </di>
                <div >
                    <img src='logo.svg' className=''></img>
                </div>
                <div className="hidden md:block">
                    <img src='cart.svg' className='right-0'></img>
                </div>
                <div className="w-9/12 md:hidden text-right">
                    <img src="./menuBlack.svg" alt="" className="inline-block" onClick={() => setIsOpen(true)}/>
                </div>
            </div>

            <div className={classnames("fixed bg-white z-10 top-0 h-full w-full p-10 md:hidden transition-all", isOpen ? "right-0" : "-right-full")}>
                <img src="/x.svg" alt="" className="absolute top-10 right-8 w-6" onClick={() => setIsOpen(false)}/>
                <Nav dir="vertical" />
            </div>
        </>
    );
}