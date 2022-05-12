export const getCities = async (call) => {
  //let url = `http://localhost:8080/${call}`;
  let url = `https://still-tundra-86630.herokuapp.com/${call}`;
  let response = await fetch(url);
  let data = await response.json();
  return data;
};
