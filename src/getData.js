export const getCities = async (call) => {
  let key = "";
  let url = `http://localhost:8080/${call}`;
  let response = await fetch(url);
  let data = await response.json();
  return data;
};
