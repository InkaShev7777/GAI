import React, { useState } from 'react'
import Car from './Car'

export default function (props) {
    const [data, setdata] = useState([
        {
            id: 1,
            title: 'Audi',
            img: 'https://baza-gai.com.ua/catalog-images/audi/a7/model.jpg',
            slug:'audi'
        },
        {
            id: 2,
            title: 'Bentley',
            img: 'https://baza-gai.com.ua/catalog-images/bentley/continental-gt/model.jpg',
            slug:'bentley'
        },
        {
            id: 3,
            title: 'BMW',
            img: 'https://baza-gai.com.ua/catalog-images/bmw/m8/model.jpg',
            slug:'bmw'
        },
        {
            id: 4,
            title: 'Ferrari',
            img: 'https://baza-gai.com.ua/catalog-images/ferrari/f8-tributo/model.jpg',
            slug:'ferrari'
        },
        {
            id: 5,
            title: 'Lamborghini',
            img: 'https://baza-gai.com.ua/catalog-images/lamborghini/aventador/model.jpg',
            slug:'lamborghini'
        },
        {
            id: 6,
            title: 'Land Rover',
            img: 'https://baza-gai.com.ua/catalog-images/land-rover/range-rover/model.jpg',
            slug:'land rover'
        },
        {
            id: 7,
            title: 'Lexus',
            img: 'https://baza-gai.com.ua/catalog-images/lexus/lx/model.jpg',
            slug:'lexus'
        },
        {
            id: 8,
            title: 'Mclaren',
            img: 'https://baza-gai.com.ua/catalog-images/mclaren/720s/model.jpg',
            slug:'mclaren'
        },
        {
            id: 9,
            title: 'Mercedes-Benz',
            img: 'https://baza-gai.com.ua/catalog-images/mercedes-benz/g-klasse-amg/model.jpg',
            slug:'mercedes-benz'
        },
        {
            id: 10,
            title: 'Porsche',
            img: 'https://baza-gai.com.ua/catalog-images/porsche/911/model.jpg',
            slug:'porsche'
        },
        {
            id: 11,
            title: 'Rolls-Royce',
            img: 'https://baza-gai.com.ua/catalog-images/rolls-royce/ghost/model.jpg',
            slug:'rolls-royce'
        },
        {
            id: 12,
            title: 'Tesla',
            img: 'https://baza-gai.com.ua/catalog-images/tesla/model-s/model.jpg',
            slug:'tesla'
        }
    ])
    return (
        <div className="model-div">
            <div className='container-cards'>
                {data.map((el) => {
                    return <Car key={el.id} img={el.img} title={el.title} slug={el.slug} choiseSlug={props.choiseSlug} />
                })}
            </div>
        </div>
    )
}
