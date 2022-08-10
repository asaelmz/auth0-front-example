import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { apiService } from 'src/app/service/api.services';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private apiService: apiService
    ) {}

  ngOnInit(): void {
    this.apiService.callPrivate();
    this.apiService.callScope(); 
  }

}
