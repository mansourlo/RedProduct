import { useState } from "react";
import photo from './assets/self.png'
import notif from './assets/notif.png'
import logout from './assets/logout.png'

function Header({pageName, details}){
    const [recherche, setRecherche] = useState('');

    // Texte de bienvenue dans la page Dashboard
    const texte = () =>{
        if(pageName === "Dashboard")
            return(
                <p className="text-gray-500 text-sm tracking-tight">
                    Lorem ipsum dolor sit amet consectetur
                </p>
            );

        return null
    }

    return(
        <div className="">
            <div className="flex justify-between mx-5 my-3 border-b-1 border-gray-300">
                <h2 className="text-black font-bold">{pageName}</h2>
                <div className="flex gap-1 items-center my-1">
                    <input type="text" name="search" id="search" value={recherche} onChange={(e) => setRecherche(e.target.value)} placeholder="🔍 Recherche" className="w-40 h-5 border border-gray-300 rounded-full py-2 px-2 outline-none focus:border-black transition-all duration-300" />
                    <div className="relative">
                        <img src={notif} alt="cloche de notification" className="w-5 h-5 cursor-pointer" />
                        <span className="absolute -top-2 -right-2 bg-yellow-400 text-white text-[10px] font-bold w-3 h-3 rounded-full flex items-center justify-center mx-1">
                        3
                        </span>
                    </div>
                    <div className="relative">
                        <img src={photo} alt="user profile" className="w-7 h-7 rounded-full cursor-pointer" />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
                    </div>                    
                    <img src={logout} alt="bouton de deconnexion" className="w-5 h-5 cursor-pointer"/>
                </div>
            </div>
            <div className="mx-5 my-1">
                <h4 className="tracking-wide text-xl">{details}</h4>
                {texte()}
            </div>
        </div>
    )
}

export default Header;