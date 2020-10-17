import React, { Component } from 'react';
import { Character } from './Character';
import Total from './Total';

export default class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            names: Character 
        }
    }
    render() {
        const { names } = this.state;
        return(
            <div>
                <div className='container'>
                    {names.map(name => (
                    <Total key={name.id} Name={name} />
                    ))}
                </div>
            </div>
        )
    }
}