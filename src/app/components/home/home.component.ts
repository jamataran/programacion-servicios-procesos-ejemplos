import {Component, OnInit} from '@angular/core';
import {UsersServiceService} from "../../services/users-service.service";
import {UserResponseModel} from "../../model/user-response.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uResponse!: UserResponseModel;
  page: number;
  totalPages: number;
  loading: boolean = true;

  constructor(private users: UsersServiceService) {
    this.page = 0;
    this.totalPages = 0;
  }

  ngOnInit(): void {
    this.updateData();
  }

  updateData() {
    this.loading = true;
    this.users.getUsers(this.page).subscribe(r => {
      this.uResponse = r;
      this.totalPages = this.uResponse.total_pages *10;
      this.loading = false;
    })
  }

}
