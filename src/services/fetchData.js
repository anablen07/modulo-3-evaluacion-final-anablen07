const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';

const fetchData = () => fetch(ENDPOINT).then(response => response.json());

export default fetchData;