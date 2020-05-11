
import {
  Switch,
  Route
} from "react-router-dom";
import React, { Component } from 'react';
import './App.css'
import SwaggerUIBundle from 'swagger-ui'
import Sidebar from './Sidebar';
import '../node_modules/swagger-ui/dist/swagger-ui.css'
import './App.css'
import authService from './services/Auth.service'
import { withRouter } from 'react-router';
import { environment } from './environments/environment';
import {dataList} from './data/data'
// import LoginForm from './components/LoginForm/LoginForm';
  class App extends Component {
  data = {}
  timer = "";
  ssoEndpoint = environment.endpointConfig.ssoServiceEndpoint;


  constructor(props) {
    super(props);
    this.state = {
      organizationConfig: null,
      definitionList: this.getDefinationList(environment.environment),
      definitionLink: this.getDefinationList(environment.environment).apis[0].properties[0].url,
      key:null
    }
  }

  updateDefinitionLink = (newLink)=> {
    this.setState({
      definitionLink: newLink
    })
  }

  componentDidMount = ()=>{
        this.setTokenRefresh();
        authService.checkToken(`${this.ssoEndpoint}/auth/ssotoken`)
        .then(res=>{
        if(res){
          this.setToken(res.data.id_token);
          this.setState({isLoggedIn: true});
          SwaggerUIBundle({
            domNode: document.getElementById("api-data"),
            url: this.state.definitionLink,
            requestInterceptor: (req) => {
                  req.headers.Authorization = "Bearer "+ res.data.id_token
                  return req
                }
          });
        }
      })
      .catch( (error)=> {
        console.log(error);
        this.setState({isLoggedIn: false});
        // this.props.history.replace('/login');    
        const encodedReferrerUrl = encodeURIComponent(window.location.href);
        window.location.href = environment.endpointConfig.rafaHomeUrl + '/federatedlogin?referrerurl=' + encodedReferrerUrl;
      });
  }

  componentDidUpdate() {
    this.initializeSwaggerUi();
  }

  initializeSwaggerUi = ()=>{
    SwaggerUIBundle({
      domNode: document.getElementById("api-data"),
      url: this.state.definitionLink,
      requestInterceptor: (req) => {
            req.headers.Authorization = 'Bearer '+ this.getToken()
            return req
          }
    });
  }

  render() {
    return (
      <div className="App">
            <Switch>
              <Route exact path="/">

                <Sidebar
                  definitionList={this.state.definitionList}
                  updateDefinitionLink={this.updateDefinitionLink}/>
                  <div id="api-data"></div>
              </Route>
              {/* <Route path="/login">
                  <LoginForm isLoggedIn={this.state.isLoggedIn} updateLogInInfo={this.updateLogInInfo}/>
              </Route> */}
            </Switch>
      </div>
    );
  }

  removeToken=()=>{
    this.setState({key:null});  
  }

  resetAuthToken=()=> {
    this.setAuthToken(null);
    // encode the current url as the referrer url so it is read more accurately in RAFA
    const encodedReferrerUrl = encodeURIComponent(window.location.href);
    window.location.href = environment.endpointConfig.rafaHomeUrl + '/federatedlogin?referrerurl=' + encodedReferrerUrl;
  }

  setToken = (key)=>{
    this.setState({key});
  }

  logOut = () => {
    this.setState({
      key: null
    });
    const encodedReferrerUrl = encodeURIComponent(window.location.href);
    window.location.href = environment.endpointConfig.rafaHomeUrl + '/federatedlogin?referrerurl=' + encodedReferrerUrl;
    // this.props.history.replace('/login');    
  }

  getToken= ()=>{
      return this.state.key;
  }

 setTokenRefresh = ()=>{
    this.timer =  window.setInterval(()=>{
         authService.renewToken(`${this.ssoEndpoint}/auth/renewtoken`,this.getToken()).then(response=>{
             console.log(response);
             this.setToken(response.data.id_token);
         })
         .catch( (error)=> {
             console.log(error);
             window.clearInterval(this.timer);
             this.removeToken();
            //  this.props.history.replace('/login');  
            const encodedReferrerUrl = encodeURIComponent(window.location.href);
            window.location.href = environment.endpointConfig.rafaHomeUrl + '/federatedlogin?referrerurl=' + encodedReferrerUrl;  
           });
    //  },600000)//Refresh token every 10 minutes
         },30000)//Refresh token every  half a minute to test functionality
 }


  getDefinationList(environment){
    if(environment === "QA"){
      return dataList[0];
    }
    else if (environment === "EA"){
      return dataList[1];
    }
    else if (environment === "CI"){
      return dataList[2];
    }
  }
}
export default withRouter(App);
