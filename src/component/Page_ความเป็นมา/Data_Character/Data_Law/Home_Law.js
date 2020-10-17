import React, { Component } from 'react';
import '../../../../AppStySheey.css';
import Detail_Law from './Detail_Law';
import Head from './Head';


export default class Detail_HomeLaw extends Component {
    render() {
        return(
            <div className='bgPage'>
                <Head />
                <Detail_Law />
            </div>
        )
    }
}