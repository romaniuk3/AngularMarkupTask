import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AimComponent } from './components/aim/aim.component';
import { ScienceComponent } from './components/science/science.component';
import { WikiumInfoComponent } from './components/wikium-info/wikium-info.component';
import { RegisteredComponent } from './components/registered/registered.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { LetterSpacingPipe } from './pipes/letter-spacing.pipe';
import { TryComponent } from './components/try/try.component';


const exportComponents = [
  AimComponent,
  ScienceComponent,
  WikiumInfoComponent 
]
@NgModule({
  declarations: [
    RegisteredComponent,
    TrainingsComponent,
    LetterSpacingPipe,
    exportComponents,
    TryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    exportComponents
  ]
})
export class WikiumModule { }
