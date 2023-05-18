import React, { useEffect, useState } from 'react'
import axios from 'axios';
class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            registrate: '',
            signs: '',
            color: '',
            operation: '',
            vin: '',
            searchOk:false
        }
    }
    async componentDidMount() {
        let url = `http://127.0.0.1:8000/api/car?query=${this.props.text}`;
        let request = fetch(url, { headers: { "Accept": "application/json" } }).then(r => r.json());
        let data = await request
        if(data.length > 0){
            console.log(data);
            this.setState({ data: data })
            this.setState({ registrate: data['operations'][0]['registered_at'] })
            this.setState({ signs: data['operations'][0]['kind']['ru'] })
            this.setState({ color: data['operations'][0]['color']['ru'] })
            this.setState({ operation: data['operations'][0]['operation']['ua'] })
            this.setState({ vin: "VIN: " + this.state.data['vin'] })
        }
        else{
            alert("Ничего не найдено!!!")
        }
    }
    render() {
        return (
            <div>
                {this.state.searchOk &&
                    <div className='card-container'>
                    <div className='div-card-image'>
                        <img src={this.state.data['photo_url']} alt="car-image" />
                        <div className='number'>
                            <div className="plate plate_small">
                                <div className="plate__flag plate__flag_small">
                                    <div className="plate__flag-icon plate__flag-icon_small">
                                        <div className="plate__flag-blue plate__flag-blue_small"></div>
                                        <div className="plate__flag-yellow plate__flag-yellow_small"></div>
                                    </div>
                                    <div className="plate__country plate__country_small">UA</div>
                                </div>
                                <div className="plate__text plate__text_small">{this.state.data['digits']}</div>
                            </div>
                            <div className='year-name-car'>
                                <h3>{this.state.data['model_year']}</h3>
                                <h3>{this.state.data['vendor'] + " " + this.state.data['model']}</h3>
                            </div>
                            <div className='date-registrate'>
                                <h3>{this.state.registrate}</h3>
                            </div>
                        </div>
                        <div className='div-info'>
                            <div className='vin'>
                                <input type='text' defaultValue={this.state.vin}  ></input>
                                <div className='all-info'>
                                    <p>Регистрация: {this.state.registrate} (последняя)</p>
                                    <p>Приметы: {this.state.signs},{this.state.color}</p>
                                    <p style={{ flexWrap: 'wrap', width: 400 }} >Операция: {this.state.operation}</p>
                                    <button className='btn-back' onClick={() => { this.props.setSearch() }}> Go Back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        )
    }
}
export default Card