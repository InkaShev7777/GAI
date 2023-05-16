import React, { useState } from 'react'

export default function Card(props) {
    const data = props.data()
    // console.log(props.data['data'])
    return (
        <div className='card-container'>
             <div className='div-card-image'>
                    {/* <img src="" alt="car-image" /> */}
                    {/* Car Number */}
                    <div className="plate plate_small">
                        <div className="plate__flag plate__flag_small">
                            <div className="plate__flag-icon plate__flag-icon_small">
                                <div className="plate__flag-blue plate__flag-blue_small"></div>
                                <div className="plate__flag-yellow plate__flag-yellow_small"></div>
                            </div>
                            <div className="plate__country plate__country_small">UA</div>
                        </div>
                        <div className="plate__text plate__text_small">{  }</div>
                    </div>
                </div>
        </div>
    )
}
