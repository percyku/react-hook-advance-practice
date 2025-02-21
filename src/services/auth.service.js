import axios from "axios";

axios.defaults.xsrfHeaderName = "X-XSRF-TOKEN";
axios.defaults.xsrfCookieName = "XSRF-TOKEN";
axios.defaults.withCredentials = true;

const API_URL2 = "http://localhost:8080";

class AuthService {
  loginforLearnSys(baToken, role) {
    return axios.get(API_URL2 + `/loginforlearnsys?role=${role}`, {
      headers: {
        Authorization: baToken,
      },
    });
  }
}

export default new AuthService();
