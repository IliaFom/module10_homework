

let brands = ["Apple", "Samsung", "Xiaomi", "Huawei"];

console.log(brands.length)

  for(let i = 0; i < brands.length; i++){
    console.log(brands[i]);
  }

// ИЛИ

console.log(brands.length)

let result = brands.map(function(item, index, array) {
  console.log(item)
})