import axios from 'axios'
import { a } from './components/TestForm';

const USERS_REST_API_URL = 'http://localhost:7777/abc';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
    putuser(a){
        console.log(a);
        return axios.put(USERS_REST_API_URL,a);
        
    }
}

export default new UserService();