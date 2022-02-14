import http from "../http-common";

class ReleveDataService {
  getAll() {
    return http.get("/get.php");
  }
  getLast() {
    return http.get(`/atmos`);
  }
}
export default new ReleveDataService();