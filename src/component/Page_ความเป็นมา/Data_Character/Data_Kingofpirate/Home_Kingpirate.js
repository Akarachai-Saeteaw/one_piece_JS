import React, { Component } from 'react';
import '../../../../AppStySheey.css';
import Detail_Kingpirate from './Detail_Kingpirate';
import Head from './Head';


export default class Detail_HomeKingPirate extends Component {
    render() {
        return(
            <div className='bgPage'>
                <Head />
                <Detail_Kingpirate />
            </div>
        )
    }
}