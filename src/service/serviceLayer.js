import axios from "axios";

const USERS_REST_API_URL = "http://localhost:7777/abc";

class UserService {
  //================poc===================
  // getUsers(){
  //     return axios.get(USERS_REST_API_URL);
  // }
  // putuser(a){
  //     console.log(a);
  //     return axios.put(USERS_REST_API_URL,a);

  // }
  //======================REAL TIME DAT BAR======================================
  getRealTimeData() {
    return axios.get("http://localhost:7777/getRealTimeData");
  }

  //inventory page functions
  //===================fetching functions=========================================
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
  //getitemdetails() alredy shown in billing page functions....
  //===================Inserting  functions=======================================
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
  insertListofRetailPriceData(arrayofRPD) {
    console.log(arrayofRPD);
    return axios.put(
      "http://localhost:7777/addItemsToRetailPriceData",
      arrayofRPD
    );
  }
  //================================================================================
  //===================Billing page functions=====================================
  //===================fetching functions=========================================
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
  getArrayOfBillingObject() {
    return axios.get("http://localhost:7777/getArrayOfBillingObject");
  }
  //===================Inserting functions functions===============================
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
  updateItemQuantity(arrayOfQuantityUpdate) {
    return axios.put(
      "http://localhost:7777/updateitemquantity",
      arrayOfQuantityUpdate
    );
  }
  //================================================================================

  //======================monitoring functions=======================================
  updateInventoryAndSellingPriceData(details) {
    console.log(details);
    return axios.put(
      "http://localhost:7777/updateInventoryAndSellingPrice",
      details
    );
  }
  getPruchaseReport(startDate, endDate) {
    console.log(startDate);
    console.log(endDate);
    return axios.get(
      "http://localhost:7777/getPurchaseReport?startDate=" +
        startDate +
        "&endDate=" +
        endDate
    );
  }
  getSalesReport(startDate, endDate) {
    console.log(startDate);
    console.log(endDate);
    return axios.get(
      "http://localhost:7777/getSalesReport?startDate=" +
        startDate +
        "&endDate=" +
        endDate
    );
  }

  registerEmployee(empDetails) {
    return axios.put("http://localhost:7777/registerEmployee", empDetails);
  }

  getEmployeeDetails(empId) {
    return axios.get("http://localhost:7777/getEmployeeDetails?empId=" + empId);
  }

  updateEmployeeDetails(empDetails) {
    return axios.put("http://localhost:7777/updateEmployeeDetails", empDetails);
  }

  getListOfEmployees() {
    return axios.get("http://localhost:7777/getListOfEmployees");
  }

  login(empId, password) {
    return axios.get(
      "http://localhost:7777/login?empId=" + empId + "&password=" + password
    );
  }
}

  //==================================user function===================================

export default new UserService();
