import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AimComponent } from './components/aim/aim.component';
import { TryComponent } from './components/try/try.component';
import { ScienceComponent } from './components/science/science.component';
import { WikiumInfoComponent } from './components/wikium-info/wikium-info.component';



@NgModule({
  declarations: [
    AimComponent,
    TryComponent,
    ScienceComponent,
    WikiumInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AimComponent,
    ScienceComponent 
  ]
})
export class WikiumModule { }
