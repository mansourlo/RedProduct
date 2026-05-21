import Header from './Header.jsx';
import Menu from './Menu.jsx';
import HotelCard from './HotelCard.jsx';
import {azalai, pullman2, lacrose, kfpalace, radisson, palmbeach, saly} from './assets/'

function Hotels(){
    // Details page 
  const hotelDetail = (
    <div className="flex justify-between items-center my-3">
        <h4 className="tracking-wide text-xl">Hotels <span className="text-gray-500 text-xl tracking-tight">8</span></h4>
        <button className="flex items-center gap-1 border border-gray-400 px-3 py-1 rounded-lg text-sm cursor-pointer">
          <span className="text-xl font-semibold"> + </span>
          <span>Creer un nouveau hotel</span>
        </button>
    </div>
  )

  // style des images dans les cartes
  const cardImage = "w-full h-45 object-cover"

  const listeHotel = [
    {id:1, photo:(
        <img src={azalai} alt="terrou-bi hotel" className={cardImage} />
    ), adresse:"Boulevard Martin Luther King", nom:"Hôtel Terrou-Bi", price:"25.000"},
    {id:2, photo:(
        <img src={kfpalace} alt="kind fahd hotel" className={cardImage}/>
    ), adresse:"Rte des Almadies, Dakar", nom:"King Fahd Palace", price:"20.000"},
    {id:3, photo:(
        <img src={radisson} alt="radisson blu hotel" className={cardImage}/>
    ), adresse:"Rte de la Corniche O", nom:"radisson Blu Hotel", price:"22.000"},
    {id:4, photo:(
        <img src={pullman2} alt="pullman hotel" className={cardImage}/>
    ), adresse:"Place de l'Independance", nom:"Pullman Dakar Teranga", price:"30.000"},
    {id:5, photo:(
        <img src={lacrose} alt="lac rose hotel" className={cardImage}/>
    ), adresse:"Lac Rose, Dakar", nom:"Hôtel Lac Rose", price:"25.000"},
    {id:6, photo:(
        <img src={palmbeach} alt="saly hotel" className={cardImage}/>
    ), adresse:"Mbour, Sénégal", nom:"Hôtel Saly", price:"20.000"},
    {id:7, photo:(
        <img src={saly} alt="saly hotel" className={cardImage}/>
    ), adresse:"BP64, Saly 23000", nom:"Palm Beach Resort & Spa", price:"22.000"},
    {id:8, photo:(
        <img src={pullman2} alt="pullman hotel" className={cardImage}/>
    ), adresse:"Place de l'Independance", nom:"Pullman Dakar Teranga", price:"30.000"},
  ]

  return(
    <div className="flex flex-row-reverse w-full">
      <div className="flex-1">
        <Header 
            pageName="Liste des hotels"
            details={hotelDetail}
        />
        <main className="bg-gray-200 min-h-creen px-1 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {listeHotel.map(hotel => (
              <HotelCard
                key={hotel.id}
                photo={hotel.photo}
                adresse={hotel.adresse}
                nomHotel={hotel.nom}
                prix_par_nuit={hotel.price}
              />
            ))}
          </div>
        </main>
      </div>
      <div className="bg-[#2d2f33] p-3 w-64 ">
        <Menu/>
      </div>
    </div>
  )
}

export default Hotels;