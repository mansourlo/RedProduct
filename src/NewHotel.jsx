import { useState } from "react";
import { ArrowLeft, Image } from 'lucide-react';

function NewHotel(){
    // liste des differentes champs de saisis
    const formulaire = [
        { label: "Nom de l'hôtel", type: "text", name: "hotelName", placeholder: "CAP Marniane" },
        { label: "Adresse", type: "text", name: "adresse", placeholder: "Les îles du saloum, Mar Lodj" },
        { label: "E-mail", type: "email", name: "email", placeholder: "information@gmail.com" },
        { label: "Numéro de téléphone", type: "text", name: "phone", placeholder: "+221 77 777 77 77" },
        { label: "Prix par nuit", type: "text", name: "prix", placeholder: "25.000 XOF" },
    ]

    return(
        <div>
            <div className="flex gap-2 items-center m-4 text-gray-600">
                <ArrowLeft size={18}/>
                <h1 className="font-semibold">CRÉER UN NOUVEL HÔTEL</h1>
            </div>
            <hr className="border-0 border-t border-gray-300 m-4"/>
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 m-4">
                {formulaire.map((champs) => (
                    <div key={champs.name} className="flex flex-col gap-1.5">
                        <label className="font-semibold text-gray-600">{champs.label}</label>
                        <input type={champs.type} name={champs.name} placeholder={champs.placeholder}  className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"/>
                    </div>
                ))}

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-600">Devise</label>
                    <select name="devise" className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white">
                        <option value="xof">F XOF</option>
                        <option value="eur">Euro</option>
                        <option value="usd">Dollar</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col gap-1.5 m-4">
                <label className="font-semibold text-gray-600">Ajouter une photo</label>
                <div className="border border-gray-300 rounded-lg min-h-40 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 transition">
                    <Image size={36} className="text-gray-500" />
                    <span className="font-semibold text-gray-500">Ajouter une photo</span>
                    <input type="file" className="hidden"/>
                </div>
            </div>

            <div className="flex justify-end m-4">
                <button className="bg-zinc-500 text-white rounded-lg px-7 py-2.5 font-semibold cursor-pointer hover:bg-zinc-800 transition">Enregistrer</button>
            </div>
        </div>
    )
}

export default NewHotel;