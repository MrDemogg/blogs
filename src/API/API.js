import axios from "axios";
export default axios.create({
  baseURL: 'https://blog-34b04-default-rtdb.europe-west1.firebasedatabase.app/'
})