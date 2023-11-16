'use client';

import { useState, useEffect } from 'react';

const CountryLookup = () => {
  const [country, setCountry] = useState('united States');

  useEffect(() => {
    fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.API_KEY}`)
    .then((res)=> res.json())
    .then((data)=>setCountry(data.country))

  }, [])
  
  return (
    <div>{country}</div>
  )
}

export default CountryLookup