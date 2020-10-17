import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Home_1 from './component/Home/Home';
import TopNavBar from './component/Navbar';
import Detail_Home4King from './component/Page_ความเป็นมา/Data_Character/Data_4King/Home_4King';
import Detail_HomeKid from './component/Page_ความเป็นมา/Data_Character/Data_Kid/Home_Kid';
import Detail_HomeKingPirate from './component/Page_ความเป็นมา/Data_Character/Data_Kingofpirate/Home_Kingpirate';
import Detail_HomeLaw from './component/Page_ความเป็นมา/Data_Character/Data_Law/Home_Law';
import Detail_HomeLuffy from './component/Page_ความเป็นมา/Data_Character/Data_Luffy/Home_2';
import Detail_HomeHistory from './component/Page_ความเป็นมา/History/Home_history';
import Detail_HomeRef from './component/อ้างอิง/Home_Ref';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNavBar />
        <Switch>
          <Route exact path="/" component={Home_1}/>
          <Route exact path="/component/Home/Home" component={Home_1}/>
          <Route path="/component/อ้างอิง/Home_Ref" component={Detail_HomeRef} />
          <Route path="/component/Page_ความเป็นมา/History/Home_history" component={Detail_HomeHistory} />
          <Route path="/component/Page_ความเป็นมา/Data_Character/Data_4King/Home_4King" component={Detail_Home4King} />
          <Route path="/component/Page_ความเป็นมา/Data_Character/Data_Kid/Home_Kid" component={Detail_HomeKid} />
          <Route path="/component/Page_ความเป็นมา/Data_Character/Data_Kingofpirate/Home_Kingpirate" component={Detail_HomeKingPirate} />
          <Route path="/component/Page_ความเป็นมา/Data_Character/Data_Law/Home_Law'" component={Detail_HomeLaw} />
          <Route path="/component/Page_ความเป็นมา/Data_Character/Data_Luffy/Home_2" component={Detail_HomeLuffy} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
