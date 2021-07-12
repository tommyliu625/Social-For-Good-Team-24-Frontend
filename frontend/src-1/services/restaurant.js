import http from "../http-common.js"

class RestaurantDataService{
    //makes all fn, that calls api and return infrom from api calls
        getAll(page = 0) {//default page as 0, d get request
          return http.get(`?page=${page}`);//this url is added ot the end of  base url
        }//query
      
        get(id) {
          return http.get(`?id=${id}`);
        }
      
        find(query, by = "name", page = 0) {
          return http.get(`?${by}=${query}&page=${page}`);
        } 
      
        createReview(data) {
          return http.post("/review", data);
        }
      
        updateReview(data) {
          return http.put("/review", data);
        }
      
        deleteReview(id, userId) {
          return http.delete(`/review-delete?id=${id}`, {data:{user_id: userId}});
        }
      
        getCuisines() {
          return http.get(`/cuisines`);
        }
      
      }
      
      export default new RestaurantDataService();