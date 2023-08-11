const widthInput = document.getElementById('widthInput');
const heightInput = document.getElementById('heightInput');
const fetchButton = document.getElementById('fetchButton');
const errorMessage = document.getElementById('errorMessage');
const imageContainer = document.getElementById('imageContainer');

fetchButton.addEventListener('click', async () => {
    errorMessage.textContent = '';

    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);

    if (isNaN(width) || isNaN(height) || width < 100 || width > 300 || height < 100 || height > 300) {
        errorMessage.textContent = 'Одно из чисел вне диапазона от 100 до 300';
        return;
    }

    const imageUrl = `https://picsum.photos/${width}/${height}`;
    const response = await fetch(imageUrl);

    if (response.ok) {
        const image = document.createElement('img');
        image.src = imageUrl;
        imageContainer.innerHTML = '';
        imageContainer.appendChild(image);
    } else {
        errorMessage.textContent = 'Произошла ошибка при загрузке картинки';
    }
});