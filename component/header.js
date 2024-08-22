import { useState } from "react";
import Link from "next/link";
import '@/styles/globals.css'





const Header = ({ className }) => {

    const [menuOpen, setMenuOpen] = useState();



    const menuclick = () => {
        setMenuOpen(!menuOpen);
    };



    return (
        <header className=" relative mainhaeder text-white ">
            <div className={`${className}   `} >
                <div className='flex items-center'>
                    <img src="/Link__2_-removebg-preview.png" alt="Logo" className="hlogo" />
                </div>
                <div className="" >
                    <button onClick={menuclick} className=" header">
                        ☰
                    </button>

                    <nav className=" flex headermd  headernav2 pr-24">
                        <li>
                            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        </li>
                        <li>
                            <Link href="/member/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/auth/login" onClick={() => setMenuOpen(false)}>Login</Link>
                        </li>

                    </nav>
                </div>
            </div>
            {menuOpen && (
                <nav className="headernav">
                    <div className=" right-0">
                        <button onClick={menuclick} >*</button>
                    </div>
                    <li>
                        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link href="/member/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/auth/login" onClick={() => setMenuOpen(false)}>Login</Link>
                    </li>

                </nav>
            )}
        </header>
    )
};
export default Header;