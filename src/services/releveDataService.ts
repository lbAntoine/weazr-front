import http from "../../http-common";

class ReleveDataService {
  getAll() {
    return http.get("/getDaily.php");
  }
  getLast() {
    console.log('Récupération getLast()...')
    return http.get(`/getOne.php`);
  }
  getMultiple() {
    console.log('Récupération getQuinze()...')
    return http.get(`getMultiple.php`)
  }
}
export default new ReleveDataService();