import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { apiService } from 'src/app/service/api.services';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor(
    private apiService: apiService
  ) { }

  ngOnInit(): void {
    this.apiService.callPublic();
  }

}
