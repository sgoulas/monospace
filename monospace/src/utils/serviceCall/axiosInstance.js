import axios from "axios";

const baseURL = "http://spiros.users.challenge.dev.monospacelabs.com/"; //http://api.front.challenge.dev.monospacelabs.com

const instance = axios.create({
  baseURL,
});

export default instance;
