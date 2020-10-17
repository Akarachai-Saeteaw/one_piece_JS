import React, { Component } from 'react';
import '../../AppStySheey.css';


export default class Total_Ref extends Component {
    render() {
        const {id, รูปภาพ, เนื้อหา} = this.props.Detail || {};
        return(
        <div>
            <div className='label_H'>
            {เนื้อหา}
                <div className='font_TH'>
                    {รูปภาพ}
                </div>
            </div>
        </div>
            )
    }
}