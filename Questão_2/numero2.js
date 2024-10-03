document.getElementById("submitButton").addEventListener("click", function () {
  const inputNumber = document.getElementById("inputNumber").value;
  const messageDiv = document.getElementById("message");
  const itemList = document.getElementById("itemList");

  messageDiv.textContent = "";
  itemList.innerHTML = "";

  if (!inputNumber || isNaN(inputNumber) || inputNumber <= 0) {
    messageDiv.textContent = "Por Favor, insira um número válido";
    return;
  }

  const number = parseInt(inputNumber);

  for (let i = 1; i <= number; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `${i}. Julya Werneck de Siqueira`;
    itemList.appendChild(listItem);
  }
});
