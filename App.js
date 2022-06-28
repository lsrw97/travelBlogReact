import React from 'react'
import Navbar from './components/Navbar'
import data from './data'
import Card from './components/Card'

export default function App()
{
    console.log(data)
    const cards = data.map((item, index) => {
        return(
        <Card 
            key={item.title}
            imageUrl={item.imageUrl}
            location={item.location}
            title={item.title}
            googleMapsUrl={item.googleMapsUrl}
            description={item.description}
            startDate={item.startDate}
            endDate={item.endDate}
        />
        )
    })
    
    console.log(cards)
    
    return (
        <div>
            <Navbar />
            {cards}
        </div>
    )
}