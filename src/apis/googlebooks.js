import axios from 'axios';

const KEY = 'AIzaSyDacA-Q1HpO07icVQSokSD53An2mKuFq1I';

 export default axios.create({
    baseURL: 'https://www.googleapis.com/books/v1',
    params: {
      key: KEY,
    }
 });