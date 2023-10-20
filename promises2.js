const count =true;
let countk = new Promise(function (x,y) {
if (count) {
x("There is a count value.",count);
} else {
y("There is no count value");
}
});
console.log(countk);