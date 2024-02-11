export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4fbe7c55ddmsh941b5da4f2e36edp159403jsn8c88723ac48d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async(url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}