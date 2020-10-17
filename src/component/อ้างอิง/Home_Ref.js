import React, { Component } from 'react';
import '../../AppStySheey.css';
import Head from './Head';
import Detail_Ref from './Ref';


export default class Detail_HomeRef extends Component {
    render() {
        return(
            <div className='bgPage'>
                <Head />
                <Detail_Ref />
            </div>
        )
    }
}