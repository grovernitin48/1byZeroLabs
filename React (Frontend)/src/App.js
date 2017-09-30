import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import LoginScreen from './Loginscreen';
import UploadScreen from './UploadScreen';
import UploadPage from './UploadPage';
import { config } from 'react-loopback';
import { createDataLoader } from 'react-loopback';
config.set('baseUrl', 'http://localhost:3000/api/');

var apiBaseUrl = "http://localhost:3000/api/byzeros";


injectTapEventPlugin();


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen appContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default App;