import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { InfoApartments } from '../../interfaces/apartment.interface';
import { ApartmentService } from '../../services/apartment.service';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css'],
})
export class ApartmentDetailsComponent implements OnInit {
  infoApartment!: InfoApartments;

  constructor(
    private activatedRoute: ActivatedRoute,
    private aparmentService: ApartmentService
  ) {}

  ngOnInit() {
    this.getApartmentDetails();
  }

  getApartmentDetails() {
    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.aparmentService.getApartmentById(param['id']))
      )
      .subscribe((data) => {
        this.infoApartment = data;
      });
  }
}
