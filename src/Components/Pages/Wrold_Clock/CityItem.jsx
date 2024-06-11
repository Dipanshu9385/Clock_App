import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';
import { useCity } from './context';

function CityItem({ city }) {
    const [data, setData] = useState('')
    const [error, setError] = useState(false)
    const [myCity, setMyCity] = useState(city.city)
    const { deleteCity } = useCity()
    

    const fetchTimeZone = async () => {
        try {
            const responce = await axios.get(`https://worldtimeapi.org/api/timezone/Asia/${myCity}`)
            let responceData = responce.data
            let datetime = responceData.datetime
            // console.log(myObj,typeof myObj)
            let timezone = responceData.timezone
            // console.log(timezone,typeof timezone)

            const dateTime = DateTime.fromISO(datetime, { setZone: timezone });
            console.log(dateTime)
            const timeString = dateTime.toFormat('HH:mm');

            console.log(timeString)
            setData(timeString)
            setMyCity("")

        } catch (error) {
            console.error('Error fetching time zone:', error);
            setError(true)
        }
    }

    useEffect(() => {
        fetchTimeZone();

        const intervalId = setInterval(() => {
            fetchTimeZone()
        }, 60000)
        // Cleanup interval on component unmount
        return () => clearInterval(intervalId)

    }, [city.city])

    const toCaptilize = (value) => {
        let x = value
        return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()

    }

    return (
        <>

            {
                data && <div className='w-[90%] mx-auto mb-6 rounded-xl shadow-black bg-slate-100 h-16 flex'>
                    <div className='w-full flex items-center justify-between pl-4 pr-8'>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-2xl font-semibold'>{toCaptilize(city.city)}</h2>
                            <p className='text-sm text-gray-600'>Today , <span></span></p>
                        </div>
                        <div className='flex items-center '>
                            <span className='font-semibold text-2xl'>{data}</span>
                            {/* <span>PM</span> */}
                        </div>
                    </div>
                    <button
                        className="inline-flex  w-6 h-6 my-auto rounded-lg text-[10px] mr-2 border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                        onClick={() => deleteCity(city.id)}
                    >
                        ❌
                    </button>
                </div>
            }

            {
                error && <p className='text-center text-red-500 my-4'>{city} :- City is not found ...</p>
            }
        </>
    )


}

export default CityItem
