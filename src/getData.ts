const ONEONE_API = 'https://oneone-api.herokuapp.com/V210419';

export default async function getData() {
  return await fetch(ONEONE_API)
                          .then(res => res.json())
                          .then(res => res);
}