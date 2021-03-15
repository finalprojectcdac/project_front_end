import axios from 'axios';

const USERS_REST_API_URL = 'http://localhost:7777/abc';

class UserService {

    // getUsers(){
    //     return axios.get(USERS_REST_API_URL);
    // }
    // putuser(a){
    //     console.log(a);
    //     return axios.put(USERS_REST_API_URL,a);
        
    // }
    getRealTimeData() {
        return axios.get("http://localhost:7777/getRealTimeData");
    }
    insertInventoryData(inventoryDetails) {
        return axios.put("http://localhost:7777//saveinventorypage", inventoryDetails);
    }
    insertSupplierDetails(supplierobj) {
        console.log(supplierobj);
        return axios.put("http://localhost:7777//saveSupplierRecordFromInventorypage", (supplierobj));
    }
    getItemDetails(item_code) {
        console.log(item_code);
        return axios.get("http://localhost:7777//getitemdetailsfrominventorytable/?item_code=" + item_code)
    }
    getSupplierDetails(supplier_name){
        return axios.get("http://localhost:7777/getsupplierdetailsfromSupplierRecord?supplier_name=" + supplier_name)
    }
    
}

export default new UserService();