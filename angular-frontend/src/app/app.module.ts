import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { FormsModule } from '@angular/forms';
import { UpdatePetComponent } from './update-pet/update-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    CreatePetComponent,
    UpdatePetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
