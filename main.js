const searchForCity = document.querySelector(".search-box");
const searchBtn = document.querySelector("#search-btn");
//`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=3e180048c37d3b667b4bab8de4c27e68`


// when click searchBox,it becomes empty
searchForCity.addEventListener('click',() => {
  searchForCity.value = '';
})

//working with searchBtn
searchBtn.addEventListener('click', ()=>{
  const cityName = searchForCity.value;
  apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=3e180048c37d3b667b4bab8de4c27e68`
  fetch(apiLink)
  .then(res => {
    return res.json()
  })
  .then(data => displayData(data))
})
 
function displayData(data){
  let city = document.querySelector('.location .city');
  city.innerText = `${data.name}, ${data.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerText = `${Math.round(data.main.temp)} °c`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = data.weather[0].main;

  let hilow = document.querySelector('.current .hi-low');
  hilow.innerText = `${data.main.temp_min}°c / ${data.main.temp_max}°c`;

}


function dateBuilder(d) {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
