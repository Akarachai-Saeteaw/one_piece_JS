import React, { Component } from 'react';
import '../../../../AppStySheey.css';
import Detail_Kid from './Detail_Kid';
import Head from './Head';


export default class Detail_HomeKid extends Component {
    render() {
        return(
            <div className='bgPage'>
                <Head />
                <Detail_Kid />
            </div>
        )
    }
}