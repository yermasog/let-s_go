import axios from "axios";

const BASEURL = "https://developer.nps.gov/api/v1/parks?q=";
const APIKEY = "&api_key=TDDqbGBzrBbUeIcGjpGeZw2mfbjxjyMifb40snAQ";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
