function Card({icone, numero, title}){
    return(
        <div className="bg-white rounded-xl shadow-md p-3 ml-5 flex items-center gap-3 hover:shadow-xl hover:translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="">{icone}</div>
            <div>
                <span className="text-xl font-light">{numero} </span>
                <span className="text-sm text-gray-600">{title}</span>
                <p className="text-sm text-gray-500">Je ne sais pas quoi mettre</p>
            </div>
        </div>
    )
}

export default Card;