let car = {
    name: "tesla",
    color: ["red", "blue", "green"],
};

for (let key in car) {
    console.log(key);
}

console.log("enumerable false");
Object.defineProperty(car, "name", {
    value: "tesla upgrade",
    enumerable: false, // false인 경우 for 문이 돌아가지 않음 
});

for (let key in car) {
    console.log(key);
}