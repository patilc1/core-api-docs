import React, {useState} from 'react';
import axios from 'axios';
import './LoginForm.css';
import { withRouter } from "react-router-dom";
import { environment } from '../../environments/environment';

function LoginForm(props) {
    const ssoServiceEndpoint = environment.endpointConfig.ssoServiceEndpoint;
    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "username":state.email,
            "password":state.password,
            "grant_type":"password",
            "scope":"openid"
        }
        axios.post(ssoServiceEndpoint + '/v1/token', payload)
            .then( (response)=> {
                if(response){
                    // window.sessionStorage.setItem("token",response.data.id_token);
                    // Cookies.set('__session',response.data.id_token,{ expires: 7 });
                    props.updateLogInInfo(true,response.data.id_token);
                    // setTokenRefresh();
                    redirectToHome();
                }
            })
            .catch((error) =>{
                props.updateLogInInfo(false);
            });
    }

    const redirectToHome = () => {
        // props.updateTitle('Home')
        props.history.replace('/');
    }

    return(
        <div className="container d-flex align-items-center flex-column"> 
        {/* <div className="login-main-logo-container pop-in">
					<a href="https://www.moodysanalytics.com/">
						<img class="login-main-logo" src="images/ma-logo.svg"/>
					</a>
	    </div> */}
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center margin-top-10">
            <form>
                <h5>Log in to Swager API's</h5>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">User Name</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter User Name" 
                       value={state.email}
                       onChange={handleChange}
                />
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Password"
                       value={state.password}
                       onChange={handleChange} 
                />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >LOGIN NOW </button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
        </div>
        </div>
    )

}

export default withRouter(LoginForm);