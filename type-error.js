const numbs = 5;
// numbs.push(45);

// let address;
// console.log(address.home);

let address = {
  city: "bBaria",
  postCode: 4560,
};
// reading properties of undefined "address" exist but
// "address.home" doesn't and we are reading properties of an undefined thing
// console.log(address.home.building);
console.log(address?.home?.building);

const a = "abul";
// a = "babul";
