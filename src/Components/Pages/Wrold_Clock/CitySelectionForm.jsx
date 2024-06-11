import React ,{useState}from 'react'
import { useCity } from './context'

function CitySelectionForm() {
    const[cityName,setCityName]=useState('')
    const{addCity}=useCity()

    const handleAddCity=()=>{
        if (cityName.trim() !== "") {
            addCity(cityName)
            setCityName('')
        }
    }
  return (
    <div className='bg-black w-[90%] mx-auto rounded-xl border  curser-poniter flex overflow-hidden my-4'>
      <input type="text" 
      className='py-1 px-3 w-full outline-none'
      value={cityName}
      onChange={(e)=>setCityName(e.target.value)}
      placeholder='enter city name'
      />
      <button onClick={handleAddCity}
      className='bg-blue-500 hover:bg-blue-600 duration-200 px-4 text-white font-semibold py-1'
      >enter</button>
    </div>
  )
}

export default CitySelectionForm;
