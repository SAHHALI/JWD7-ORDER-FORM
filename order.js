// alert("order JS");

let itemOrder = [
  {
    dipesan: false,
    harga: 10000,
    nama: "Nasi Kuning",
  },
  {
    dipesan: false,
    harga: 5000,
    nama: "Nasi Uduk",
  },
  {
    dipesan: false,
    harga: 10000,
    nama: "Nasi Lengko",
  },
  {
    dipesan: false,
    harga: 15000,
    nama: "Nasi Goreng",
  },
  {
    dipesan: false,
    harga: 5000,
    nama: "Teh Hangat",
  },
  {
    dipesan: false,
    harga: 5000,
    nama: "Es teh Manis ",
  },
];

let totalOrder = 0;

const itemTerpilih = document.getElementsByClassName("item");

const textTotal = document.getElementById("last-item");

for (let i = 0; i < itemTerpilih.length; i++) {
  itemTerpilih[i].addEventListener("click", function () {
    setItemPemesanan(i, itemTerpilih[i]);
  });
}

function setItemPemesanan(index, elemen) {
  if (itemOrder[index].dipesan == false) {
    itemOrder[index].dipesan = true;
    elemen.style.backgroundColor = "#7e1717";
    elemen.style.color = "white";
    totalOrder = totalOrder + itemOrder[index].harga;
  } else {
    itemOrder[index].dipesan = false;
    elemen.style.backgroundColor = "White";
    elemen.style.color = "black";
    totalOrder = totalOrder - itemOrder[index].harga;
  }
  textTotal.innerHTML = "Total <span>Rp " + totalOrder + "</span>";
}
