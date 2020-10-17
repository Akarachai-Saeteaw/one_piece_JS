import React, { Component } from 'react';
import '../../AppStySheey.css';
import { Reference } from './Detail_ref';
import Total_Ref from './Total_Ref';

export default class Detail_Ref extends Component {
    constructor(props) {
        super(props);

        this.state={
            details: Reference
        }
    }
    render() {
        const { details } = this.state
        return(
            <div>
                <div className='container'>
                {details.map(detail => (
                    <Total_Ref key={this.id} Detail={detail} />
                ))}
                </div>
            </div>
        )
    }
}