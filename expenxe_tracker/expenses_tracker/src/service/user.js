 import axios from 'axios';

export async function login(username,password){
    const body = {username,password}
    try{
        const response=await axios.post(`http://localhost:4000/user/login`,body)
        console.log(response);
        return response;
    }catch(ex){
        console.log(`exception :`,ex);
    }
    return null;
}

