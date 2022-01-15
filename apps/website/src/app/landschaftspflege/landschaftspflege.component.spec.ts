import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandschaftspflegeComponent } from './landschaftspflege.component';

describe('LandschaftspflegeComponent', () => {
  let component: LandschaftspflegeComponent;
  let fixture: ComponentFixture<LandschaftspflegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandschaftspflegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandschaftspflegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
