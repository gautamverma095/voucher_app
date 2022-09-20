let amount = () => {
  let a = JSON.parse(localStorage.getItem("user")).wallet;
  let w = document.getElementById("wallet_balance");
  w.innerText = a;
};

amount();
append();

function append() {
  let data = JSON.parse(localStorage.getItem("purchase"));
  let container = document.getElementById("purchased_vouchers");

  data.forEach((el) => {
    let img = document.createElement("img");
    img.src = el.image;
    let h3 = document.createElement("h3");
    h3.innerText = el.price;
    let p = document.createElement("p");
    p.innerText = el.name;

    let div = document.createElement("div");
    div.setAttribute("class", "voucher");
    div.append(img, p, h3);
    container.append(div);
  });
}
