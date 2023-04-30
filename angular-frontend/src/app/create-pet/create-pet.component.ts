import { Component } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PetType } from '../PetType';
import { Observable } from 'rxjs';
import { FurColor } from '../fur-color';
import { Country } from '../country';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent {
  types: PetType[];

  private getTypes() {
    this.petService.getTypesList().subscribe(data => {
      this.types = data;
    });
  }

  fur_colors: FurColor[];

  private getFurColors() {
    this.petService.getFurColorsList().subscribe(data => {
      this.fur_colors = data;
    });
  }

  countries: Country[];

  private getCountries() {
    this.petService.getCountriesList().subscribe(data => {
      this.countries = data;
    });
  }

  pet: Pet = new Pet();
  constructor(private petService: PetService,
      private router: Router,
      private http: HttpClient) { }

  ngOnInit(): void {
    this.getCountries();
    this.getFurColors();
    this.getTypes();
    this.pet.type = '';
    this.pet.furColor = '';
    this.pet.country = '';
  }

  savePet() {
    this.petService.createPet(this.pet).subscribe(data => {
      console.log(data);
      this.goToPetList();
    },
    error => console.log(error));
  }

  goToPetList() {
    this.router.navigate(['/pets']);
  }

  onSubmit() {
    console.log(this.pet);
    this.savePet();
  }

}
