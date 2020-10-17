import React, { Component } from 'react';
import { Character_Law } from './Character_Law.js';
import Total_Law from './Total_Law';

export default class Detail_Law extends Component {
    constructor(props) {
        super(props);

        this.state = {
            names: Character_Law
        }
    }
    render() {
        const { names } = this.state
        return(
            <div>
                <div className='container'>
                    {names.map(name => (
                        <Total_Law key={name.id} Name={name} />
                        // console.log(id)
                        ))}
                </div>
            </div>
        )
    }
}