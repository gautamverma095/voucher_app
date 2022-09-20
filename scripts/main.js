let submit = () => {
  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;
  let a = document.getElementById("address").value;
  let w = document.getElementById("amount").value;

  let obj = {
    name: n,
    email: e,
    address: a,
    wallet: w,
  };

  localStorage.setItem("user", JSON.stringify(obj));

  document.getElementById("name").value = null;
  document.getElementById("email").value = null;
  document.getElementById("address").value = null;
  document.getElementById("amount").value = null;
};
