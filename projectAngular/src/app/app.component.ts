import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss']
})
export class AppComponent implements OnInit {

  result: any;
  urlToJson = 'assets/resultados.json';
  results:any;
  urlToJsons = 'assets/sistema_pontuacao.json'
  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
    });
    this.http.get<any>(this.urlToJsons).subscribe(response => {
      this.results = response;
    });
  }

  title = 'projectAngular';
}
