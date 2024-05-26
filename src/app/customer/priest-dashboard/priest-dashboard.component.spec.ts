import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriestDashboardComponent } from './priest-dashboard.component';

describe('PriestDashboardComponent', () => {
  let component: PriestDashboardComponent;
  let fixture: ComponentFixture<PriestDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriestDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
