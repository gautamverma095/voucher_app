fetch("https://masai-vouchers-api.herokuapp.com/api/vouchers")
  .then((res) => res.json())
  .then((res) => {
    console.log(res[0]);
    append(res[0].vouchers);
  });

let amount = () => {
  let a = JSON.parse(localStorage.getItem("user")).wallet;
  let w = document.getElementById("wallet_balance");
  w.innerText = a;
};

amount();

function append(data) {
  console.log(data);
  let container = document.getElementById("voucher_list");

  data.forEach((el) => {
    let img = document.createElement("img");
    img.src = el.image;
    let h3 = document.createElement("h3");
    h3.innerText = el.price;
    let p = document.createElement("p");
    p.innerText = el.name;
    let b = document.createElement("button");
    b.setAttribute("class", "buy_voucher");
    b.innerText = "BUY";
    b.onclick = () => {
      buy(el);
    };

    let div = document.createElement("div");
    div.setAttribute("class", "voucher");
    div.append(img, p, h3, b);
    container.append(div);
  });
}

let buy = (data) => {
  let a = JSON.parse(localStorage.getItem("user"));
  let purchase = JSON.parse(localStorage.getItem("purchase")) || [];
  if (data.price <= a.wallet) {
    purchase.push(data);
    localStorage.setItem("purchase", JSON.stringify(purchase));

    a.wallet -= data.price;

    localStorage.setItem("user", JSON.stringify(a));
    amount();
    alert("Hurray! purchase successfull");
  } else {
    alert("Sorry! insufficient balance");
  }
};
