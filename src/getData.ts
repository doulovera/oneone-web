const ONEONE_API = 'https://oneone-api.herokuapp.com/V210419';

export default async function getData() {
  const response = await fetch(ONEONE_API);
  const data = await response.json();

  return data 
}