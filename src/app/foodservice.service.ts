import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cities } from './cities';

const  headers = new  HttpHeaders().set("user-key", "582d0b00e6b539adf6cb526b490d9870");

@Injectable({
  providedIn: 'root'
})

export class FoodserviceService {

  public baseUrl = "https://developers.zomato.com/api/v2.1/";
  cities = cities;

  constructor( private httpService: HttpClient) { }

  getCoordinates(lat, long) {
    let responseCoord = this.httpService.get(this.baseUrl + "geocode?lat=" + lat + "&lon=" + long, {headers});
    console.log("getCoord - " + responseCoord);
    return responseCoord;
  }

  getCityId(id) {
    let responseCityID = this.httpService.get(this.baseUrl + "cities?q=" + id, {headers});
    console.log("get city ID = " + responseCityID);
    return responseCityID;
  }

  getCollections(cityId) {
    let responseCollection = this.httpService.get(this.baseUrl + "collections?city_id=" + cityId, {headers});
    return responseCollection;
  }

  getCategories() {
    let responseCategory = this.httpService.get(this.baseUrl + "categories", {headers});
    console.log("category - " + responseCategory);
    return responseCategory;
  }

  getEstablishments(cityId) {
    let responseEstablish = this.httpService.get(this.baseUrl + "establishments?city_id=" + cityId, {headers});
    return responseEstablish;
  }

  getRestaurantList(cityId) {
    let responseResto = this.httpService.get(this.baseUrl + "search?entity_id=" + cityId + "&count=1000", {headers});
    return responseResto;
  }

  getTrendResto(cityId, collectionId) {
    let response = this.httpService.get(this.baseUrl + "search?entity_id=" + cityId + "&entity_type=city&collection_id=" + collectionId, {headers});
    console.log(response);
    return response;
  }

  getRestaurantDetail(restoId) {
    let responseRestaurant = this.httpService.get(this.baseUrl + "restaurant?res_id=" + restoId, {headers});
    console.log(responseRestaurant);
    return responseRestaurant;
  }

  getReview(restoId) {
    let responseReview = this.httpService.get(this.baseUrl + "reviews?res_id=" + restoId, {headers});
    console.log(responseReview);
    return responseReview;
  }
}
