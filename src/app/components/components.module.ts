import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {ServicesModule} from "../services/services.module";
import {NgbAccordionModule, NgbCarouselModule, NgbPagination, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import { ImagesComponent } from './images/images.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ImagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesModule,
    NgbPaginationModule,
    NgbCarouselModule,
    NgbAccordionModule,
  ]
})
export class ComponentsModule {
}
