import axios from "axios";

export default {

//   searchBooks: function(q, f) {
//     const apiURL = "https://www.googleapis.com/books/v1/volumes?";
//     const query = "q=" + q;
//     const filter = "&filter=" + f;
//     if (f === ""|| f === "none") {
//       const midstring = apiURL + query; 
//       return axios.post("api/books/search", {search: midstring});
//     } else {
//       const midstring = apiURL + query + filter;
//       return axios.post("api/books/search", {search: midstring});
//     }
//   },

    // get historical stage and flow data from USGS API
    getGagesHistory: function(gageID, paramType) {
        const paramID = paramType === 'flow' ? "00060" : "00065";
        const apiURL = 'https://waterservices.usgs.gov/nwis/iv/?format=json'
        const sites = '&sites=' + gageID;
        const startDateTime = '&startDT=2019-11-09';
        const typeParams = '&parameterCd=' + paramID;
        const siteStatus = '&siteStatus=all';

        // let query = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites='+ gageID;
        // query += '&startDT=2019-11-09&parameterCd=00060,00065&siteStatus=all';

        let query = apiURL + sites + startDateTime + typeParams + siteStatus;
        return axios.get(query);
    }

};