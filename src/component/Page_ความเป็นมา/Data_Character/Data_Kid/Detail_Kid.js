import React, { Component } from 'react';
import { Character_Kid } from './Character_Kid';
import Total_Kid from './Total_Kid';

export default class Detail_Law extends Component {
    constructor(props) {
        super(props);

        this.state = {
            names: Character_Kid
        }
    }

    render() {
        const { names } = this.state
        return(
            <div>
                <div className='container'>
                {names.map(name =>(
                    <Total_Kid key={name.id} Name={name} />
                ))};
                </div>
            </div>
        );
    } 

}