import { Component, OnInit } from '@angular/core';
import { Datum, InfoApartments } from '../../interfaces/apartment.interface';
import { ApartmentService } from '../../services/apartment.service';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css'],
})
export class ApartmentListComponent implements OnInit {
  constructor(private apartmentService: ApartmentService) {}
  apartmentsData: Datum[] = [];

  ngOnInit() {
    this.getApartmentList();
  }

  getApartmentList() {
    this.apartmentService
      .getAllApartments()
      .subscribe((data: InfoApartments) => {
        this.apartmentsData = data.data;
      });
  }
  showMore() {
    this.apartmentService
      .loadMoreResults()
      .subscribe((data: InfoApartments) => {
        this.apartmentsData = data.data;
      });
  }
}
