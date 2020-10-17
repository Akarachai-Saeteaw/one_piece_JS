import React from 'react';
import { NavLink } from 'react-router-dom';
import '../AppStySheey.css';

export default function TopNavBar() {
    return(
        
    <nav className="navbar navbar-dark bg-dark">
        <ul className="nav nav-pills">
        <li className="nav-item">
            <li className="nav-link"><NavLink to="/component/Home/Home">หน้าแรก</NavLink></li>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">ประวัติ</a>
            <div className="dropdown-menu">
            <li className="dropdown-item" ><NavLink to="/component/Page_ความเป็นมา/History/Home_history">ความเป็นมา</NavLink></li>
            <div className="dropdown-divider"></div>
            <li className="dropdown-item"><NavLink to="/component/Page_ความเป็นมา/Data_Character/Data_Kingofpirate/Home_Kingpirate">กลุ่มราชาโจรสลัด</NavLink></li>
            <li className="dropdown-item"><NavLink to="/component/Page_ความเป็นมา/Data_Character/Data_4King/Home_4King">4 จักรพรรดิ</NavLink></li>
            <li className="dropdown-item"><NavLink to="/component/Page_ความเป็นมา/Data_Character/Data_Luffy/Home_2">กลุ่มโจรหมวกฟาง</NavLink></li>
            <li className="dropdown-item"><NavLink to="/component/Page_ความเป็นมา/Data_Character/Data_Law/Home_Law'">กลุ่มโจรสลัดฮาร์ด</NavLink></li>
            <li className="dropdown-item"><NavLink to="/component/Page_ความเป็นมา/Data_Character/Data_Kid/Home_Kid">กลุ่มโจรสลัดคิด</NavLink></li>
            </div>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="https://anime-subth.net/2016/02/23/one-piece-%e0%b8%a7%e0%b8%b1%e0%b8%99%e0%b8%9e%e0%b8%b5%e0%b8%8a/#">อ่าน</a>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/component/อ้างอิง/Home_Ref">อ้างอิง</NavLink>
        </li>
        </ul>
        <div className="column">
                <img src={require('./0d8d07a763e83f93acf810ae2c523bd7.png')} width='50px' height='50px' />
                </div>
                <div className="column">
                <img src={require('./LawLogo.png')} width='50px' height='50px' />
                </div>
                <div className="column">
                <img src={require('./KitLogo.png')} width='50px' height='50px' />
                </div>
                <div className="column">
                <img src={require('./NewGradLogo.png')} width='50px' height='50px'  />
                </div>
                <div className="column">
                <img src={require('./ShankLogo.png')} width='50px' height='50px' />
                </div>
                <div className="column">
                <img src={require('./TichLogo.png')} width='50px' height='50px' />
                </div>
                <div className="column">
                <img src={require('./BigMomLogo.png')} width='50px' height='50px' />
                </div>
                <div className="column">
                <img src={require('./KaidoLogo.png')} width='50px' height='50px' />
                </div>
    </nav>
    )
}
