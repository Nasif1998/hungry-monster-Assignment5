const button = document.getElementById('button');
const inputValue = document.getElementById('input-food');

button.addEventListener('click', function () {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=' + inputValue.value)
        .then(res => res.json())
        .then(data => console.log(data))

        .catch(err => alert('Wrong city name'))

})