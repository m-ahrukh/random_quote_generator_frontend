import axios from 'axios';

const  QUOTE_API_BASEURL = "http://localhost:8080";

class QuoteService{
    getQuote(){
        return axios.get(QUOTE_API_BASEURL);
    }
}

export default new QuoteService();