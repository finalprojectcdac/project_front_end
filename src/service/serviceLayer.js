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
    return axios.get("https://ibs-dev-app.herokuapp.com/getRealTimeData");
  }

  //inventory page functions
  //===================fetching functions=========================================
  getItemDetails(item_code) {
    console.log("CALLING SERVER WITH ITEMCODE :-" + item_code);
    return axios.get(
      "https://ibs-dev-app.herokuapp.com/getitemdetailsfrominventorytable/?item_code=" +
        item_code
    );
  }
  getSupplierDetails(supplier_name) {
    return axios.get(
      "https://ibs-dev-app.herokuapp.com/getsupplierdetailsfromSupplierRecord?supplier_name=" +
        supplier_name
    );
  }
  //getitemdetails() alredy shown in billing page functions....
  //===================Inserting  functions=======================================
  insertInventoryData(inventoryDetails) {
    return axios.put(
      "https://ibs-dev-app.herokuapp.com/saveinventorypage",
      inventoryDetails
    );
  }
  insertSupplierDetails(supplierobj) {
    console.log(supplierobj);
    return axios.put(
      "https://ibs-dev-app.herokuapp.com/saveSupplierRecordFromInventorypage",
      supplierobj
    );
  }
  insertListofRetailPriceData(arrayofRPD) {
    console.log(arrayofRPD);
    return axios.put(
      "https://ibs-dev-app.herokuapp.com/addItemsToRetailPriceData",
      arrayofRPD
    );
  }
  //================================================================================
  //===================Billing page functions=====================================
  //===================fetching functions=========================================
  getSaleInvoiceNo() {
    return axios.get("https://ibs-dev-app.herokuapp.com/getSalesInvoicenumber");
  }

  getItemDetailsForSale(item_code) {
    return axios.get(
      "https://ibs-dev-app.herokuapp.com/getitemdetailsforsale?item_code=" + item_code
    );
  }
  getCustomerDetails(mobile_no) {
    return axios.get(
      "https://ibs-dev-app.herokuapp.com/getCustomerdetailsfromInvoices?mobile_no=" +
        mobile_no
    );
  }
  getArrayOfBillingObject() {
    return axios.get("https://ibs-dev-app.herokuapp.com/getArrayOfBillingObject");
  }
  //===================Inserting functions functions===============================
  insertListOfItems(arrayOfItemSaleObjects) {
    return axios.put(
      "https://ibs-dev-app.herokuapp.com/ListItemsinserttoItemSale",
      arrayOfItemSaleObjects
    );
  }

  insertInvoice(invoice) {
    return axios.put(
      "https://ibs-dev-app.herokuapp.com/insertInvoicefromInvoices",
      invoice
    );
  }
  updateItemQuantity(arrayOfQuantityUpdate) {
    return axios.put(
      "https://ibs-dev-app.herokuapp.com/updateitemquantity",
      arrayOfQuantityUpdate
    );
  }
  //================================================================================

  //======================monitoring functions=======================================
  updateInventoryAndSellingPriceData(details) {
    console.log(details);
    return axios.put(
      "https://ibs-dev-app.herokuapp.com/updateInventoryAndSellingPrice",
      details
    );
  }
  getPruchaseReport(startDate, endDate) {
    console.log(startDate);
    console.log(endDate);
    return axios.get(
      "https://ibs-dev-app.herokuapp.com/getPurchaseReport?startDate=" +
        startDate +
        "&endDate=" +
        endDate
    );
  }
  getSalesReport(startDate, endDate) {
    console.log(startDate);
    console.log(endDate);
    return axios.get(
      "https://ibs-dev-app.herokuapp.com/getSalesReport?startDate=" +
        startDate +
        "&endDate=" +
        endDate
    );
  }

  registerEmployee(empDetails) {
    return axios.put("https://ibs-dev-app.herokuapp.com/registerEmployee", empDetails);
  }

  getEmployeeDetails(empId) {
    return axios.get("https://ibs-dev-app.herokuapp.com/getEmployeeDetails?empId=" + empId);
  }

  updateEmployeeDetails(empDetails) {
    return axios.put("https://ibs-dev-app.herokuapp.com/updateEmployeeDetails", empDetails);
  }

  getListOfEmployees() {
    return axios.get("https://ibs-dev-app.herokuapp.com/getListOfEmployees");
  }

  login(empId, password) {
    return axios.get(
      "https://ibs-dev-app.herokuapp.com/login?empId=" + empId + "&password=" + password
    );
  }
}

  //==================================user function===================================

export default new UserService();
