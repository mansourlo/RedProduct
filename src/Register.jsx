import { useState } from "react";

function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accept, setAccept] = useState(false);

    function handleInscription(){
        if(!name || !email || !password){
            alert("Veuillez remplir tous les champs");
        }

        if(!accept){
            alert("Vous devez accepter les conditions pour s'incrire")
        }
    }


    return(
        <div className=" flex flex-col justify-center items-center min-h-screen bg-[#2d2f33]">
            <div className="flex items-center gap-2 mb-6">
                <svg className="logo-icone" width="20" height="24" viewBox="0 0 20 24" fill="white">
                <polygon points="0,0 20,0 20,24 10,18 0,24" />
                </svg>
                <span className="text-white font-bold tracking-widest text-lg">RED PRODUCT</span>
            </div>
            <div className="w-[300px] h-fit mx-auto my-[10px] px-5 py-[15px] bg-white border border-white rounded">
                <p className="mb-[15px] text-[1rem] text-left">Inscrivez-vous en tant que Admin</p>
                <div  className="flex flex-col gap-1">
                    <label htmlFor="userName" className="text-[0.9rem] mb-[2px] text-gray-500">Nom</label>
                    <input type="text" name="userName" id="userName" value={name} onChange={(e) => setName(e.target.value)} className="border-b-2 border-gray-300 py-1 outline-none focus:border-black transition-all duration-300"/><br/>

                    <label htmlFor="email" className="text-[0.9rem] mb-[2px] text-gray-500">E-mail</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-b-2 border-gray-300 py-1 outline-none focus:border-black transition-all duration-300"/><br/>

                    <label htmlFor="password" className="text-[0.9rem] mb-[2px] text-gray-500">Mot de passe</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-b-2 border-gray-300 py-1 outline-none focus:border-black transition-all duration-300"/><br/>

                    <label>
                        <input type="checkbox" onChange={(e) => setAccept(e.target.checked)} checked={accept} className="mr-1 align-middle cursor-pointer"/>
                        Accepter les termes et la politique
                    </label><br/>

                    <button type="submit" onClick={handleInscription} className="w-full p-3 text-base text-white bg-[#2d2f33] border-none rounded cursor-pointer">S'inscrire</button>
                </div>
            </div>
            <p className="text-white text-center">
                Vous avez deja un compte ? <a href="#" className="no-underline text-yellow-400">Se connecter</a>
            </p>
        </div>
    );

}

export default Register;