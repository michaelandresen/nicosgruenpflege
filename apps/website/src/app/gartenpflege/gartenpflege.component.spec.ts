import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GartenpflegeComponent } from './gartenpflege.component';

describe('GartenpflegeComponent', () => {
  let component: GartenpflegeComponent;
  let fixture: ComponentFixture<GartenpflegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GartenpflegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GartenpflegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
