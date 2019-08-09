import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { MEAT_API } from "app/app.api";
import { Http, ResponseOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from "app/app.error-handler";

@Injectable()
export class RestaurantsService{


  constructor(private http: Http){}

  restaurants(): Observable<Restaurant[]> { //Observable recebe do http
    return this.http.get(`${MEAT_API}/restaurants`) //get envia pro http que faz o request ao DB
    .map(response => response.json()) //Http recebe do DB
    .catch(ErrorHandler.handleError);
  }
}
