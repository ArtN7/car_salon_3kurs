import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../screens/main/Main";
import CarDetails from "../screens/carDetails/CarDetails";
import PageNotFound from "../UI/pageNotFound/PageNotFound"
import CarsCatalog from '../../components/screens/carsCatalog/CarsCatalog'
import cars from '../../carsBD.json' //this str will be delete when i create json-server

//next strs i created for json-server
// let carsJson = await fetch('http://localhost:3001/cars');
// let cars = [];
// if (carsJson.ok) {
//     cars = await carsJson.json();
// } else {
//     alert("Ошибка HTTP: " + carsJson.status);
// }


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<PageNotFound/>} />
                <Route path='car_salon_3kurs/' element={<Main cars={cars}/>} />
                <Route path='car_salon_3kurs/catalog/sedan' element={<CarsCatalog cars={cars}/>}/>
                <Route path='car_salon_3kurs/catalog/crossover' element={<CarsCatalog cars={cars}/>}/>
                <Route path='car_salon_3kurs/catalog/coupe' element={<CarsCatalog cars={cars}/>}/>
                <Route path='car_salon_3kurs/catalog/cabriolet' element={<CarsCatalog cars={cars}/>}/>
                <Route path='car_salon_3kurs/catalog/sedan/car/:id' element={<CarDetails cars={cars}/>}/>
                <Route path='car_salon_3kurs/catalog/crossover/car/:id' element={<CarDetails cars={cars}/>}/>
                <Route path='car_salon_3kurs/catalog/coupe/car/:id' element={<CarDetails cars={cars}/>}/>
                <Route path='car_salon_3kurs/catalog/cabriolet/car/:id' element={<CarDetails cars={cars}/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;