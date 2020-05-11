import axios from 'axios';

export  default class AuthService {

  static  checkToken(url){
    return  axios.get(url, {
       headers: this.getAuthHeaders(),
       withCredentials: true
     })
   }

 static  renewToken = (url,token)=>{
    return  axios.get( url, {
       headers: {
        'x-moodys-app': 'CAP',
        'Content-Type': 'application/json',
        'authorization':'Bearer '+ token
      },
       withCredentials: true
     })
}

static getAuthHeaders = ()=>{
    const headers = new Headers();
    headers.append('x-moodys-app','CAP');
    headers.append('Content-Type', 'application/json');
    return headers
  }
  
}

// export default new AuthService();