import Header from './Header.jsx';
import Menu from './Menu.jsx';
import Card from './Card.jsx';
import {Menu as MenuIcon,X, MailOpen, Users} from 'lucide-react';
import { useState } from 'react';

function Dashboard(){
  // useState du menu: Responsive Design
  const [menu, setMenu] = useState(false)

  const cards = [
    {id:1, icone:(
      <div className="bg-purple-400 text-white rounded-full p-3">
        <MailOpen size={15}/>
      </div>
    ), numero:125, title:"Formulaires"},
    {id:2, icone:(
<div className="
        w-10
        h-10
        rounded-full
        bg-green-500
        text-white
        flex
        items-center
        justify-center
        font-bold
      ">
        P
      </div>), numero:40, title:"Messages"},
    {id:3, icone:(
      <div className="bg-yellow-300 text-white rounded-full p-3">
        <Users size={15}/>
      </div>
    ), numero:600, title:"Utilisateurs"},
    {id:4, icone:(
      <div className="bg-orange-600 text-white rounded-full p-3">
        <MailOpen size={15}/>
      </div>
    ), numero:25, title:"E-mails"},
    {id:5, icone:(
      <div className="
        w-10
        h-10
        rounded-full
        bg-purple-700
        text-white
        flex
        items-center
        justify-center
        font-bold
      ">
        P
      </div>
    ), numero:40, title:"Hotels"},
    {id:6, icone:(
    <div className="bg-blue-800 text-white rounded-full p-3">
      <Users size={15}/>
    </div>
  ), numero:"02", title:"Entites"}
  ]

  return(
    <div className="flex flex-row-reverse w-full">
      <div className="flex-1">
        <Header
            pageName="Dashboard"
            details="Bienvenue sur Red Product"
        />
        <main className="bg-gray-200 min-h-screen px-1 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((carte) => (
              <Card
                key={carte.id}
                icone={carte.icone}
                numero={carte.numero}
                title={carte.title}
              />
            ))}
          </div>
        </main>
      </div>
      <div className="bg-[#2d2f33] p-3 w-64 hidden lg:block">
        <Menu/>
      </div>

      {/* Icone menu hamburger en responsive design */}
      <button onClick={() => setMenu(!menu)} className="absolute top-1 left-3 z-[60] lg:hidden p-3 cursor-pointer transition-transform duration-200 hover:scale-110">
        {menu ? <X size={28} /> : <MenuIcon size={28} />}
      </button>

      {menu && (
        <div className="fixed top-12 left-0 h-screen w-60 bg-[#2d2f33] z-50 lg:hidden ">
          <Menu/>
        </div>
      )}
    </div>
  )
}

export default Dashboard;