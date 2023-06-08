const key = 'vIhhCcq8zlRN3vIDFYlp9i2rrCnQiPvJ';

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search/';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

getCity('manchester')
    .then(data => console.log("data fetched:", data))
    .catch(error => console.log("some error occurred:", error));