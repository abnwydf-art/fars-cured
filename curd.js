//ssssss
//get total
//create product
//save local
//clear input
//read
//delete
//update
//serach
//clean data

//getTotal
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let dis = document.getElementById("dis");
let count = document.getElementById("count");
let sub = document.getElementById("sub");
let catg = document.getElementById("catg");
let total = document.getElementById("total");

function getTotal() {
  if (price.value != " ") {
    let result = +price.value + +taxes.value + +ads.value - +dis.value;
    total.innerHTML = result;
    total.style.background = "#040";
  } else {
    total.innerHTML = " ";
    total.style.background = "#a00";
  }
}

//create product
let datapro;
if (localStorage.pro != null) {
  datapro = JSON.parse(localStorage.pro);
} else {
  datapro = [];
}

sub.onclick = function () {
  let newpro = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    dis: dis.value,
    total: total.innerHTML,
    count: count.value,
    catg: catg.value,
  };
  if (newpro.count > 1) {
    for (let i = 0; i < newpro.count; i++) {
      datapro.push(newpro);
    }
  } else {
    datapro.push(newpro);
  }

  datapro.push(newpro);
  localStorage.setItem("pro", JSON.stringify(datapro));

  cleardata();
  showdata();
};

//clear inputs
function cleardata() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  dis.value = "";
  total.innerHTML = "";
  count.value = "";
  catg.value = "";
}

//read
function showdata() {
  let table = "";
  for (let i = 0; i < datapro.length; i++) {
    table += `   
              <tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].dis}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].catg}</td>
                <td><button onclick='update(${i})' id="update">update</button></td>
                <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
              </tr>
    `;
    //delete
  }
  document.getElementById("tbody").innerHTML = table;
  let btndelet = document.getElementById("deleteall");
  if (datapro.length > 0) {
    btndelet.innerHTML = `<button onclick=deleteall()>delete all${datapro.length}</button>`;
  } else {
    btndelet.innerHTML = "";
  }
}
showdata();
//count
function deletedata(i) {
  datapro.splice(i, 1);
  localStorage.pro = JSON.stringify(datapro);
  showdata();
}
function deleteall() {
  localStorage.clear(0);
  datapro.splice(0);
  showdata();
}

//update
function update(i) {
  title.value = datapro[i].title;
  price.value = datapro[i].price;
  taxes.value = datapro[i].taxes;
  ads.value = datapro[i].ads;
  dis.value = datapro[i].dis;
  catg.value = datapro[i].catg;
}
