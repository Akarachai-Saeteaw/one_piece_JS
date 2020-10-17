import React, { Component } from 'react';
import '../../../AppStySheey.css';
import { History } from './History';
import Total_History from './Total_History';

export default class Detail_History extends Component {
    constructor(props) {
        super(props);

        this.state={
            historys: History
        }
    }
    render() {
        const { historys } = this.state
        return(
            <div>
                <div className='container'>
                {historys.map(history => (
                    <Total_History key={this.id} History={history} />
                ))}
                </div>
            </div>
        )
    }
}
