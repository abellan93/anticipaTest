import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoApartments } from '../interfaces/apartment.interface';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  resultsLimit: number = 32;
  limit: number = 32;

  private apiUrl: string = `https://apiint.holapisos.com/es/api/node/inmuebles?page[limit]=${this.resultsLimit}`;

  constructor(private http: HttpClient) {}
  getAllApartments(): Observable<InfoApartments> {
    return this.http.get<InfoApartments>(this.apiUrl);
  }
  getApartmentById(id: string): Observable<InfoApartments> {
    const url = `${this.apiUrl}&filter[field_inmu_refe]=${id}`;
    return this.http.get<InfoApartments>(url);
  }
  loadMoreResults(): Observable<InfoApartments> {
    let newLimit = (this.resultsLimit += this.limit);

    const url = `https://apiint.holapisos.com/es/api/node/inmuebles?page[limit]=${newLimit}`;

    return this.http.get<InfoApartments>(url);
  }
}
