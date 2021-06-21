document.querySelector("#first-form").addEventListener("submit", (e) => {
  e.preventDefault();

  let firstName = e.target.elements.firstName.value;
  let lasttName = e.target.elements.lastName.value;
  let fullName = document.querySelector(".full-name");

  fullName.innerHTML = `${firstName} ${lasttName}`;

  e.target.elements.firstName.value = "";
  e.target.elements.lastName.value = "";
});

console.log(
  "%c© Tom Růžička, www.virtualniajtak.cz, www.tomruzicka.cz",
  "color: grey; font-size:20px;"
);
