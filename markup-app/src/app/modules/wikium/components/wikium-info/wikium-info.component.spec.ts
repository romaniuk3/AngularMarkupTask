import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiumInfoComponent } from './wikium-info.component';

describe('WikiumInfoComponent', () => {
  let component: WikiumInfoComponent;
  let fixture: ComponentFixture<WikiumInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikiumInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiumInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
