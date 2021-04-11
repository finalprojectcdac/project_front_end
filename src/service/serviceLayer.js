import axios from "axios";

const USERS_REST_API_URL = "http://localhost:7777";

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
    return axios.get(USERS_REST_API_URL + "/getRealTimeData");
  }

  //inventory page functions
  //===================fetching functions=========================================
  getItemDetails(item_code) {
    // console.log("CALLING SERVER WITH ITEMCODE :-" + item_code);
    return axios.get(
      USERS_REST_API_URL + "/getitemdetailsfrominventorytable/?item_code=" +
        item_code
    );
  }
  getSupplierDetails(supplier_name) {
    return axios.get(
      USERS_REST_API_URL + "/getsupplierdetailsfromSupplierRecord?supplier_name=" +
        supplier_name
    );
  }
  //getitemdetails() alredy shown in billing page functions....
  //===================Inserting  functions=======================================
  insertInventoryData(inventoryDetails) {
    return axios.put(
      USERS_REST_API_URL + "/saveinventorypage",
      inventoryDetails
    );
  }
  insertSupplierDetails(supplierobj) {
    // console.log(supplierobj);
    return axios.put(
      USERS_REST_API_URL + "/saveSupplierRecordFromInventorypage",
      supplierobj
    );
  }
  insertListofRetailPriceData(arrayofRPD) {
    // console.log(arrayofRPD);
    return axios.put(
      USERS_REST_API_URL + "/addItemsToRetailPriceData",
      arrayofRPD
    );
  }
  //================================================================================
  //===================Billing page functions=====================================
  //===================fetching functions=========================================
  getSaleInvoiceNo() {
    return axios.get(USERS_REST_API_URL + "/getSalesInvoicenumber");
  }

  getItemDetailsForSale(item_code) {
    return axios.get(
      USERS_REST_API_URL + "/getitemdetailsforsale?item_code=" + item_code
    );
  }
  getCustomerDetails(mobile_no) {
    return axios.get(
      USERS_REST_API_URL + "/getCustomerdetailsfromInvoices?mobile_no=" +
        mobile_no
    );
  }
  getArrayOfBillingObject() {
    return axios.get(USERS_REST_API_URL + "/getArrayOfBillingObject");
  }
  //===================Inserting functions functions===============================
  insertListOfItems(arrayOfItemSaleObjects) {
    return axios.put(
      USERS_REST_API_URL + "/ListItemsinserttoItemSale",
      arrayOfItemSaleObjects
    );
  }

  insertInvoice(invoice) {
    return axios.put(
      USERS_REST_API_URL + "/insertInvoicefromInvoices",
      invoice
    );
  }
  updateItemQuantity(arrayOfQuantityUpdate) {
    return axios.put(
      USERS_REST_API_URL + "/updateitemquantity",
      arrayOfQuantityUpdate
    );
  }
  //================================================================================

  //======================monitoring functions=======================================
  updateInventoryAndSellingPriceData(details) {
    // console.log(details);
    return axios.put(
      USERS_REST_API_URL + "/updateInventoryAndSellingPrice",
      details
    );
  }
  getPruchaseReport(startDate, endDate) {
    // console.log(startDate);
    // console.log(endDate);
    return axios.get(
      USERS_REST_API_URL + "/getPurchaseReport?startDate=" +
        startDate +
        "&endDate=" +
        endDate
    );
  }
  getSalesReport(startDate, endDate) {
    // console.log(startDate);
    // console.log(endDate);
    return axios.get(
      USERS_REST_API_URL + "/getSalesReport?startDate=" +
        startDate +
        "&endDate=" +
        endDate
    );
  }

  registerEmployee(empDetails) {
    return axios.put(USERS_REST_API_URL + "/registerEmployee", empDetails);
  }

  getEmployeeDetails(empId) {
    return axios.get(USERS_REST_API_URL + "/getEmployeeDetails?empId=" + empId);
  }

  updateEmployeeDetails(empDetails) {
    return axios.put(USERS_REST_API_URL + "/updateEmployeeDetails", empDetails);
  }

  getListOfEmployees() {
    return axios.get(USERS_REST_API_URL + "/getListOfEmployees");
  }

  login(empId, password) {
    return axios.get(
      USERS_REST_API_URL + "/login?empId=" + empId + "&password=" + password
    );
  }
}

  //==================================user function===================================

export default new UserService();
