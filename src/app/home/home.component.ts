import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Food-e-Delicious';
  cities: any;
  latitude: any;
  longitude: any;
  locate: any;
  loading: boolean;
  selectedCityName: string = "";
  cityName: string = "";

  constructor( private foodserve: FoodserviceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.cities = this.foodserve.cities;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.findPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    this.loading = false;
  }

  goToDashboard(e, cityName) {
    this.router.navigate(['/dashboard', cityName]);
  }

  findPosition(position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.foodserve.getCoordinates(this.latitude, this.longitude).subscribe(
      data => {
        this.locate = data;
        this.goToDashboard('click', this.locate.location.city_name);
      },
      err => {
        this.router.navigate(['**']);
      }
    )
  }
}
