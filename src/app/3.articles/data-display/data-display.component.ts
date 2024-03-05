import { Component } from '@angular/core';
import { OnInit, inject, OnDestroy } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './data-display.component.html',
})
export class DataDisplayComponent implements OnInit {

  httpClient = inject(HttpClient)
  data: any[] = []

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    this.httpClient
    .get('https://www.eleguen.ovh/api/v1/articles')
    .subscribe((data: any) => {
      console.log(data)
      this.data = data
    })
  }

  ngOnDestroy(): void {
    // ne fonctionne pas
    // this.fetchData().unsubscribe()
  }




}
