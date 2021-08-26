import {useMyContextHook} from "../context/CityContext";

function Header() {
  const { city, setCity, cities } = useMyContextHook();


  let citiesList =
    cities.length > 0 &&
    cities.map((item, i) => {
      return (
        <option key={i} value={item.name}>
          {item.name}
        </option>
      );
    }, this);

    const changeCity = (e) =>{
        for (let i = 0; i < cities.length; i++) {
            if(e.target.value === cities[i].name){
                setCity(cities[i]);
            }
        }
    } 

  return (
    <div className="header">
    <h1 className="headerMessage">Haftalık Hava Durumunu Görmek İçin Şehir Seçiniz:</h1>
      <select value={city.name} onChange={changeCity} className="selectCity">{citiesList}</select>
    </div>
  );
}

export default Header;