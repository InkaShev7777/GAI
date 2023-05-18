import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ModelCar from './ModelCar';
class CatalogModels extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: '',
            data: [],
            models:[]
        }
    }
    async componentDidMount() {
        this.setState({ slug: this.props.slug })
        const apiUrl = `http://127.0.0.1:8000/api/mark?slug=${this.props.sluq}`;
        let reg = await axios.get(apiUrl, function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
        }).then((resp) => this.setState({ data: resp.data }));
        await this.setState({models: this.state.data['catalog_models']})
        console.log(this.state.data['catalog_models']);
    }
    render() {
        return (
            <div className="model-div">
                {this.state.models != undefined &&
                     <div className='container-cards'>
                     {this.state.models.map((el) => {
                         return <ModelCar key={el.id} img={el.photo_url} title={el.title}/>
                     })}
                     </div>
                }
            </div>
        )
    }
}
export default CatalogModels