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
    return axios.get("/getRealTimeData");
  }

  //inventory page functions
  //===================fetching functions=========================================
  getItemDetails(item_code) {
    console.log("CALLING SERVER WITH ITEMCODE :-" + item_code);
    return axios.get(
      "/getitemdetailsfrominventorytable/?item_code=" +
        item_code
    );
  }
  getSupplierDetails(supplier_name) {
    return axios.get(
      "/getsupplierdetailsfromSupplierRecord?supplier_name=" +
        supplier_name
    );
  }
  //getitemdetails() alredy shown in billing page functions....
  //===================Inserting  functions=======================================
  insertInventoryData(inventoryDetails) {
    return axios.put(
      "/saveinventorypage",
      inventoryDetails
    );
  }
  insertSupplierDetails(supplierobj) {
    console.log(supplierobj);
    return axios.put(
      "/saveSupplierRecordFromInventorypage",
      supplierobj
    );
  }
  insertListofRetailPriceData(arrayofRPD) {
    console.log(arrayofRPD);
    return axios.put(
      "/addItemsToRetailPriceData",
      arrayofRPD
    );
  }
  //================================================================================
  //===================Billing page functions=====================================
  //===================fetching functions=========================================
  getSaleInvoiceNo() {
    return axios.get("/getSalesInvoicenumber");
  }

  getItemDetailsForSale(item_code) {
    return axios.get(
      "/getitemdetailsforsale?item_code=" + item_code
    );
  }
  getCustomerDetails(mobile_no) {
    return axios.get(
      "/getCustomerdetailsfromInvoices?mobile_no=" +
        mobile_no
    );
  }
  getArrayOfBillingObject() {
    return axios.get("/getArrayOfBillingObject");
  }
  //===================Inserting functions functions===============================
  insertListOfItems(arrayOfItemSaleObjects) {
    return axios.put(
      "/ListItemsinserttoItemSale",
      arrayOfItemSaleObjects
    );
  }

  insertInvoice(invoice) {
    return axios.put(
      "/insertInvoicefromInvoices",
      invoice
    );
  }
  updateItemQuantity(arrayOfQuantityUpdate) {
    return axios.put(
      "/updateitemquantity",
      arrayOfQuantityUpdate
    );
  }
  //================================================================================

  //======================monitoring functions=======================================
  updateInventoryAndSellingPriceData(details) {
    console.log(details);
    return axios.put(
      "/updateInventoryAndSellingPrice",
      details
    );
  }
  getPruchaseReport(startDate, endDate) {
    console.log(startDate);
    console.log(endDate);
    return axios.get(
      "/getPurchaseReport?startDate=" +
        startDate +
        "&endDate=" +
        endDate
    );
  }
  getSalesReport(startDate, endDate) {
    console.log(startDate);
    console.log(endDate);
    return axios.get(
      "/getSalesReport?startDate=" +
        startDate +
        "&endDate=" +
        endDate
    );
  }

  registerEmployee(empDetails) {
    return axios.put("/registerEmployee", empDetails);
  }

  getEmployeeDetails(empId) {
    return axios.get("/getEmployeeDetails?empId=" + empId);
  }

  updateEmployeeDetails(empDetails) {
    return axios.put("/updateEmployeeDetails", empDetails);
  }

  getListOfEmployees() {
    return axios.get("/getListOfEmployees");
  }

  login(empId, password) {
    return axios.get(
      "/login?empId=" + empId + "&password=" + password
    );
  }
}

  //==================================user function===================================

export default new UserService();
