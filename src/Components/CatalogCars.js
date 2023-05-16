import React, { useState } from 'react'
import Car from './Car'

export default function () {
    const [data, setdata] = useState([
        {
            id: 1,
            title: 'Audi',
            img: 'https://baza-gai.com.ua/catalog-images/audi/a7/model.jpg'
        },
        {
            id: 2,
            title: 'Bentley',
            img: 'https://baza-gai.com.ua/catalog-images/bentley/continental-gt/model.jpg'
        },
        {
            id: 3,
            title: 'BMW',
            img: 'https://baza-gai.com.ua/catalog-images/bmw/m8/model.jpg'
        },
        {
            id: 4,
            title: 'Ferrari',
            img: 'https://baza-gai.com.ua/catalog-images/ferrari/f8-tributo/model.jpg'
        },
        {
            id: 5,
            title: 'Lamborghini',
            img: 'https://baza-gai.com.ua/catalog-images/lamborghini/aventador/model.jpg'
        },
        {
            id: 6,
            title: 'Land Rover',
            img: 'https://baza-gai.com.ua/catalog-images/land-rover/range-rover/model.jpg'
        },
        {
            id: 7,
            title: 'Lexus',
            img: 'https://baza-gai.com.ua/catalog-images/lexus/lx/model.jpg'
        },
        {
            id: 8,
            title: 'Mclaren',
            img: 'https://baza-gai.com.ua/catalog-images/mclaren/720s/model.jpg'
        },
        {
            id: 9,
            title: 'Mercedes-Benz',
            img: 'https://baza-gai.com.ua/catalog-images/mercedes-benz/g-klasse-amg/model.jpg'
        },
        {
            id: 10,
            title: 'Porsche',
            img: 'https://baza-gai.com.ua/catalog-images/porsche/911/model.jpg'
        },
        {
            id: 11,
            title: 'Rolls-Royce',
            img: 'https://baza-gai.com.ua/catalog-images/rolls-royce/ghost/model.jpg'
        },
        {
            id: 12,
            title: 'Tesla',
            img: 'https://baza-gai.com.ua/catalog-images/tesla/model-s/model.jpg'
        }
    ])
    return (
        <div className="model-div">
            <div className='container-cards'>
                {data.map((el) => {
                    return <Car key={el.id} img={el.img} title={el.title} />
                })}
            </div>
        </div>
    )
}
