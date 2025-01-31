import React from 'react'
import TouristPlace from './components/TouristPlace'

const touristPlaces = [
  {
    placeName: "Goa",
    desc: "Famous for its beaches, nightlife, and Portuguese heritage.",
    img: "https://images.unsplash.com/photo-1587922546307-776227941871?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29hfGVufDB8MHwwfHx8Mg%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.5,
    price: 15000
  },
  {
    placeName: "Manali",
    desc: "A high-altitude Himalayan resort town known for its cool climate and snow-capped mountains.",
    img: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFuYWxpfGVufDB8MHwwfHx8Mg%3D%3D",
    whenToVisit: "Summer",
    ratings: 4.7,
    price: 10000
  },
  {
    placeName: "Kerala",
    desc: "Known for its palm-lined beaches, backwaters, and rich traditions.",
    img: "https://images.unsplash.com/photo-1591420699297-88e82958f324?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGtlcmFsYXxlbnwwfDB8MHx8fDI%3D",
    whenToVisit: "Winter",
    ratings: 4.8,
    price: 20000
  },
  {
    placeName: "Jaipur",
    desc: "The capital of Rajasthan, known for its historic palaces and vibrant culture.",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8MHwwfHx8Mg%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.6,
    price: 12000
  }
];


function App() {
  return (
    <>
    <h1 className='text-3xl font-bold text-center my-5 underline'>React Project for Tourist Places</h1>
    <div className='flex gap-5 justify-center flex-wrap my-20'>
      {
        touristPlaces.map((place) => (
          <TouristPlace placeName={place.placeName} desc={place.desc} img={place.img} whenToVisit={place.whenToVisit} ratings={place.ratings} price={place.price} />
        ))
      }
      {/* <TouristPlace /> */}
    </div>
    </>
    
  )
}

export default App
