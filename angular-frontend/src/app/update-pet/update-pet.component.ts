import { Component } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PetType } from '../PetType';
import { FurColor } from '../fur-color';
import { Country } from '../country';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.css']
})
export class UpdatePetComponent {
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
  id: number;
  pet: Pet = new Pet();

  constructor(private petService: PetService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCountries();
    this.getFurColors();
    this.getTypes();
    this.id = this.route.snapshot.params['id'];

    this.petService.getPetById(this.id).subscribe(data => {
      this.pet = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.petService.updatePet(this.id, this.pet).subscribe(data => {
      this.goToPetList();
    }, error => console.log(error));
  }

  goToPetList() {
    this.router.navigate(['/pets']);
  }
}
