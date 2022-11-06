import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  constructor(public ar:ActivatedRoute, private http:HttpClient) { }
  countryCode:any;
  countryDetails:any;
  ngOnInit(): void {
    this.ar.params.subscribe((res)=>{
      console.log(res);
      this.countryCode = res['acode'];
      this.http.get(`https://restcountries.com/v2/name/${this.countryCode}`)
      .subscribe((data)=>{
        console.log(data);
       this.countryDetails = data;
      })
    })
  }

}
