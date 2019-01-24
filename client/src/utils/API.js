import axios from 'axios';
const headers = {
  'Content-Type': 'application/json'
}

const burl = "http://localhost:8000"

export default {
  castle: function(destination){
    return axios.get(burl+'/hotel/'+destination).then(response => {
      return response.data;
    });
  }
}