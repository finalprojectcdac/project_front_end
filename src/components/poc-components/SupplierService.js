import axios from 'axios'
import { s } from '../components/poc-components/Test-SupplierForm';

const SUPPLIER_REST_API_URL = 'http://localhost:7777';

class SupplierService {

    addSupplier(a){
        return axios.put(SUPPLIER_REST_API_URL + '/saveSupplierRecordFromInventorypage' , a);
    }   //   'http://localhost:7777/saveSupplierRecordFromInventorypage'



    deleteSupplier(supplier_name){
        return axios.delete(SUPPLIER_REST_API_URL + '/deleteSupplier/' + supplier_name);
    }   //   'http://localhost:7777/deleteSupplier/supplier_name'
}

export default new SupplierService();