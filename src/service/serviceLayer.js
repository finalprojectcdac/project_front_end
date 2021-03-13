import axios from 'axios';
import {supplierobj} from '../components/inv-components/SupplierForm';
import {inventoryDetails} from '../components/inv-components/inv-form2';


const USERS_REST_API_URL = 'http://localhost:7777/abc';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
    putuser(a){
        console.log(a);
        return axios.put(USERS_REST_API_URL,a);
        
    }
    getRealTimeData() {
        return axios.get("http://localhost:7777/getRealTimeData");
    }
    insertInventoryData(inventoryDetails) {
        return axios.put("http://localhost:7777//saveinventorypage", inventoryDetails);
    }
    insertSupplierDetails(supplierobj) {
        return axios.put("http://localhost:7777//saveSupplierRecordFromInventorypage", supplierobj);
    }
}

export default new UserService();