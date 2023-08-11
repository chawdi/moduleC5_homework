const numberInput = document.getElementById("numberInput");
const submitButton = document.getElementById("submitButton");
const imagesContainer = document.getElementById("imagesContainer");

submitButton.addEventListener("click", () => {
  const inputValue = parseInt(numberInput.value, 10);

  if (isNaN(inputValue) || inputValue < 1 || inputValue > 10) {
    imagesContainer.innerHTML = "Число вне диапазона от 1 до 10";
  } else {
    const url = `https://picsum.photos/v2/list?limit=${inputValue}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        imagesContainer.innerHTML = "";
        data.forEach(item => {
          const image = document.createElement("img");
          image.src = item.download_url;
          imagesContainer.appendChild(image);
        });
      })
      .catch(error => {
        console.error("Произошла ошибка при получении данных:", error);
      });
  }
});