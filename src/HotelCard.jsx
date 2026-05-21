
function HotelCard({photo, adresse, nomHotel, prix_par_nuit}){
    return(
        <div className="flex flex-col bg-white rounded-lg shadow-md ml-5 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            {photo}
            <div className="flex flex-col flex-1 px-2">
                <p className="text-amber-700 text-sm min-h-[1px]">{adresse}</p>
                <p className="font-bold tracking-wide">{nomHotel}</p>
                <p className="mt-3 mb-4 text-sm">{prix_par_nuit} XOF par nuit</p>
            </div>
        </div>
    )
}

export default HotelCard;