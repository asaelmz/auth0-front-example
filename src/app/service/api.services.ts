import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root',
  })
export class apiService {
    constructor(private http: HttpClient) {}
  
    callPublic(): void {
      this.http.get('http://localhost:8080/api/public').subscribe(result => console.log(result));
    }

    callPrivate(): void {
        this.http.get('http://localhost:8080/api/private').subscribe(result => console.log(result));
    }

    callScope(): void {
        this.http.get('http://localhost:8080/api/private-scoped').subscribe(result => console.log(result));
    }

  }