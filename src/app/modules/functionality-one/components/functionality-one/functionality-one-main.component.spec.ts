import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalityOneMainComponent } from './functionality-one-main.component';

describe('FunctionalityOneMainComponent', () => {
  let component: FunctionalityOneMainComponent;
  let fixture: ComponentFixture<FunctionalityOneMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalityOneMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalityOneMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
