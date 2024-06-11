import React, { useEffect, useState } from 'react';
import CityItem from './CityItem';
import { CityContextProvider} from './context';
import CitySelectionForm from './CitySelectionForm';

function Wrold_Clock() {

  const [myTime, setMyTime] = useState(new Date().toLocaleTimeString())
  const [cities, setCities] = useState([])

  const toDateFunction = () => {
    const Months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]

    const WeekDays = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ]
    const currentDate = new Date()
    let date = `${WeekDays[currentDate.getDay()]} , ${currentDate.getDate()}  ${Months[currentDate.getMonth()]} `
    return date;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMyTime(new Date().toLocaleTimeString())
    }, 1000)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  const addCity = (cityName) => {
    // setCities([...cities, cityName]);
    console.log(cityName)
    setCities((prev) => [{ id: Date.now(),city:cityName }, ...prev])
   console.log(cities)
  };

  const deleteCity = (id) => {
    setCities((prev) => prev.filter((prevCity) => prevCity.id !== id))
  }

  useEffect(() => {
    const cities = JSON.parse(localStorage.getItem('cities'))
    if (cities && cities.length > 0) {
      setCities(cities)
      console.log(cities , typeof cities)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(cities))
  }, [cities])
  return (
    <CityContextProvider value={{ cities, addCity, deleteCity }}>
      <div className=' w-full h-full p-4 overflow-hidden'>
        <div className='mt-20 leading-10'>
          <p className='text-center text-black text-4xl font-bold'>{myTime}</p>
          <p className='text-center'>Indian Standerd Time | {toDateFunction()}</p>
        </div>
        <hr className='my-2' />
        <div className='h-[100%] h-[310px] overflow-y-scroll'>
          <CitySelectionForm />
          <div >
            {cities.length > 0 && cities.map((city) => (
              <div key={city.id}>
                <CityItem city={city} />
              </div>
            ))}
          </div>
        </div>
        <button style={{ lineHeight: '10px' }} className='absolute bottom-20 left-52 bg-blue-600 text-white h-10 w-10 mx-auto rounded-full text-4xl font-medium pb-2 '> + </button>

      </div>
    </CityContextProvider>
  )
}

export default Wrold_Clock
