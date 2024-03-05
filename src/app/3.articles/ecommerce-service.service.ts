import { Injectable, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class EcommerceServiceService implements OnInit {
  constructor() { }
  
  httpClient = inject(HttpClient)
  data: any[] = []

  ngOnInit(): void {}

  fetchData() {
    this.httpClient
    .get('https://www.eleguen.ovh/api/v1/articles')
    .subscribe((data: any) => {
      console.log(data)
      this.data = data
    })
  }
}
