import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from './pet';
import { PetType } from './PetType';
import { FurColor } from './fur-color';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private typeURL = "http://localhost:8080/api/v1/types";

  private furColorURL = "http://localhost:8080/api/v1/fur_colors";

  private countryURL = "http://localhost:8080/api/v1/countries";

  private baseURL = "http://localhost:8080/api/v1/pets";
  constructor(private httpClient: HttpClient) { }

  getPetsList(): Observable<Pet[]> {
    return this.httpClient.get<Pet[]>(`${this.baseURL}`);
  }

  createPet(pet: Pet): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, pet);
  }

  getPetById(id: number): Observable<Pet> {
    return this.httpClient.get<Pet>(`${this.baseURL}/${id}`);
  }

  updatePet(id: number, pet: Pet): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, pet);
  }

  getTypesList(): Observable<PetType[]> {
    return this.httpClient.get<PetType[]>(`${this.typeURL}`);
  }
  
  getFurColorsList(): Observable<FurColor[]> {
    return this.httpClient.get<FurColor[]>(`${this.furColorURL}`);
  }

  getCountriesList(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.countryURL}`);
  }

}
