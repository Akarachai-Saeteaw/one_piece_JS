import React, { Component } from 'react';
import '../../../../AppStySheey.css';


export default class Total_Kid extends Component {
    render() {
        const {id, ชื่อ, ค่าหัว, ตำแหน่ง, ผลปีศาจ, ความสามารถ, ฉายา, ความเป็นมา, img, pic} = this.props.Name || {};
        // console.log((this.props.Name.img))
        // console.log((this.props.id))
        return(
            <div className='swap-on-hover'>
                <figure className='swap-on-hover__front-image'>
                    <img src={ img } />
                </figure>
                <div className='swap-on-hover__back-image'>
                <div className='detail'>
                        <div className='number'>ชื่อ: </div> 
                        { ชื่อ }
                    </div>
                    <div className='detail'>
                        <div className='number'>ค่าหัว: </div> { ค่าหัว }
                    </div>
                    <div className='detail'>
                        <div className='number'>ตำแหน่ง:</div> { ตำแหน่ง }
                    </div>
                    <div className='detail'>
                        <div className='number'>ผลปีศาจ: </div> { ผลปีศาจ }
                    </div>
                    <div className='detail'>
                        <div className='number'>ความสามารถ: </div> { ความสามารถ }
                    </div>
                    <div className='detail'>
                        <div className='number'>ฉายา: </div> {ฉายา}
                    </div>
                    <div className='detail'>
                        <div className='number'>อุปนิสัยและความเป็นมา: </div> { ความเป็นมา }
                    </div>
                </div>
            </div>
            )
    }
}