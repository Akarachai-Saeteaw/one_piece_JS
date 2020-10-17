import React, { Component } from 'react';
import { Character_Kingpirate } from './Character_Kingpirate';
import Total_Kingpirate from './Total_Kingpirate';

export default class Detail_Kingpirate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            names: Character_Kingpirate
        }
    }

    render() {
        const { names } = this.state
        return(
            <div>
                <div className='container'>
                { names.map(name => (
                    <Total_Kingpirate key={name.id} Name={name} />
                ))}
                </div>
            </div>
        )
    }
}