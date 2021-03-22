import axios from "axios";

const USERS_REST_API_URL = "http://localhost:7777/abc";

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
    return axios.put(
      "http://localhost:7777//saveinventorypage",
      inventoryDetails
    );
  }
  insertSupplierDetails(supplierobj) {
    console.log(supplierobj);
    return axios.put(
      "http://localhost:7777//saveSupplierRecordFromInventorypage",
      supplierobj
    );
  }
  getItemDetails(item_code) {
    console.log("CALLING SERVER WITH ITEMCODE :-" + item_code);
    return axios.get(
      "http://localhost:7777//getitemdetailsfrominventorytable/?item_code=" +
        item_code
    );
  }
  getSupplierDetails(supplier_name) {
    return axios.get(
      "http://localhost:7777/getsupplierdetailsfromSupplierRecord?supplier_name=" +
        supplier_name
    );
  }
  getSaleInvoiceNo() {
    return axios.get("http://localhost:7777/getSalesInvoicenumber");
  }
  getItemDetailsForSale(item_code) {
    return axios.get(
      "http://localhost:7777/getitemdetailsforsale?item_code=" + item_code
    );
  }
  getCustomerDetails(mobile_no) {
    return axios.get(
      "http://localhost:7777/getCustomerdetailsfromInvoices?mobile_no=" +
        mobile_no
    );
  }
  updateItemQuantity(item_code, quantity) {
    return axios.post(
      "http://localhost:7777/updateitemquantity?item_code=" +
        item_code +
        "&quantity=" +
        quantity
    );
  }
  insertListOfItems(arrayOfItemSaleObjects) {
    return axios.put(
      "http://localhost:7777/ListItemsinserttoItemSale",
      arrayOfItemSaleObjects
    );
  }
  insertInvoice(invoice) {
    return axios.put(
      "http://localhost:7777/insertInvoicefromInvoices",
      invoice
    );
  }
  getArrayOfBillingObject() {
    return axios.get("http://localhost:7777/getArrayOfBillingObject");
  }
}

export default new UserService();
