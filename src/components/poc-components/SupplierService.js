import axios from 'axios'
import { supplierobj } from '../components/poc-components/SupplierForm';

const SUPPLIER_REST_API_URL = 'http://localhost:7777';

class SupplierService {

    addSupplier(supplierobj){
        return axios.put(SUPPLIER_REST_API_URL + '/saveSupplierRecordFromInventorypage' , supplierobj);
    }   //   'http://localhost:7777/saveSupplierRecordFromInventorypage'



    deleteSupplier(supplier_name){
        return axios.delete(SUPPLIER_REST_API_URL + '/deleteSupplier/' + supplier_name);
    }   //   'http://localhost:7777/deleteSupplier/supplier_name'
}

export default new SupplierService();