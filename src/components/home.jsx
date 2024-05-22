import React, { useEffect, useState } from 'react';
import Humidity from "../assets/humidity.png"
import Wind from "../assets/wind.png"
import axios from 'axios'

const Home = () => {
    const [name , setName] = useState();
    const [data, setdata] = useState({
        celcius: 10,
        name:'London',
        humidity:10,
        speed:2
    })
 
    const handleClick = () => {
        if(name !== ""){
            const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=79ba934a20099936a3423e4ab20520e3`
            axios.get(apiUrl)
            .then(res =>setdata({...data,celcius: res.data.main.temp, name: res.data.name,
                humidity: res.data.main.humidity, speed:res.data.wind.speed
            }))
            .catch(err => console.log(err))
        } 
    }
         return (
        <div className="bg-blue-400 flex justify-center">
            <div className="flex flex-col items-center w-64 h-64 justify-center bg-red-400 border-2 border-solid border-blue-400">
                <div className='flex'>
                    <button onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197M15.803 15.803A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                    <input type="text" className='outline-none border-[1px] p-2 rounded-lg' placeholder='Enter city Name' onChange={e => setName(e.target.value)}/>

                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                </svg>
                <h1>{Math.round(data.celcius)}<sup>o</sup>c</h1>
                <h1>{data.name}</h1>
                <div className='flex mt-2'>
                <div className='flex gap-1'>
                    <img src={Humidity} className='w-6 h-6 cursor-pointer' />
                    <div className='flex flex-col'>
                        <h1>{Math.round(data.humidity)}</h1>
                        <h1>humidity</h1>
                    </div>
                </div>
                <div className='flex gap-1'>
                    <img src={Wind} className='w-6 h-6' />
                    <div>
                        <p>{Math.round(data.speed)} km/h</p>
                        <p>Wind</p>
                    </div>
                </div>
                </div>

            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;
