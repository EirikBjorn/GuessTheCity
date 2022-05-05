const cityList = [
  "Oslo",
  "Tokyo",
  "Seoul",
  "London",
  "Munich",
  "Singapore",
  "Brussels",
];

export const getImgs = async () => {
  let imgList = [];

  for (let i = 0; i < cityList.length; i++) {
    let data = await call(cityList[Math.random() * cityList.length]);
    let currCity = {
      url: data.results[0].urls.full,
      city: cityList[i],
    };
    imgList.push(currCity);
  }
  return imgList;
};

const call = async (city) => {
  let key = "";
  let url = `https://api.unsplash.com/search/photos/?client_id=${key}&query=`;
  let response = await fetch(url + city + "%20skyline");
  let data = await response.json();
  return data;
};
