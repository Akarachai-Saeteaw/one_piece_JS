import React, { Component } from 'react';
import { Character_King } from './Character_King';
import Total_4King from './Total_4King';

export default class Detail_4King extends Component {
    constructor(props) {
        super(props);

        this.state = {
            names: Character_King
        }
    }

    render() {
        const { names } = this.state
        return(
            <div>
                <div className='container'>
                { names.map( name => (
                    <Total_4King key={name.id} Name={name} />
                    ))}
                </div>
            </div>
        )
    }
}