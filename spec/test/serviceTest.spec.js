function addNumbers(n1, n2) {
  return n1 + n2;
}

describe("it adds two numbers", () => {
  var n1 = 2;
  var n2 = 4;
  it("should return sum of given two numbers", () => {
    var act = addNumbers(n1, n2);

    expect(act).toBe(6);
  });
});

var func = require('../../src/components/billing-components/BillForm');

describe("add functionality", () => {
  it("should add the item in the table", () => {
    handleAdd()
  })
})

// var axios = require("axios");
// describe("service function test", () => {
//   it("should return supplier object", () => {
//     const supplier_name = "SAGAR ENTERPRISES";
//     let a;
//     axios
//       .get(
//         "http://localhost:7777/getsupplierdetailsfromSupplierRecord?supplier_name=" +
//           supplier_name
//       )
//       .then((resp) => {
//         a = resp.data.status;
//         jasmine.log("hello");
//       });

//     var exp = {
//       supplier_name: "SAGAR ENTERPRISES",
//       supplier_code: "SG123",
//       supplier_invoice_value: "2000",
//       supplier_invoice_number: "INV/01",
//       purchase_date: "2021-3-29",
//     };
//     expect(a).toBe(1);
//   });
// });
