import { useState } from "react";
import { LayoutDashboard, Hotel } from 'lucide-react';
import photo from './assets/self.png';

function Menu(){
    return(
        <div>
            <div className="flex items-center gap-2 mb-6">
                <svg className="logo-icone" width="20" height="24" viewBox="0 0 20 24" fill="white">
                <polygon points="0,0 20,0 20,24 10,18 0,24" />
                </svg>
                <span className="text-white font-bold tracking-widest text-lg">RED PRODUCT</span>
            </div>
            <p className="text-white text-sm mb-6">Principal</p>
            <nav className="text-white text-md font-bold">
                <span className="flex gap-2 mb-6 hover:bg-white hover:text-[#2d2f33] cursor-pointer">
                        <LayoutDashboard/> Dashboard
                </span>
                <span className="flex gap-2 hover:bg-white hover:text-[#2d2f33] cursor-pointer">
                        <Hotel/> Liste des hotels
                </span>
            </nav>
            <footer className="flex items-center gap-3 mt-90 border-t-1 border-gray-500 py-3">
                    <img src={photo} alt="user profile" className="w-10 h-10 rounded-full cursor-pointer"/>
                    <div>
                        <p className="text-white tracking-wide">Mansour LO</p>
                        <p className="text-gray-400 text-sm">
                            <span className="text-green-600"> ● </span> en ligne
                        </p>
                    </div>
            </footer>
            </div>
    )
}

export default Menu;