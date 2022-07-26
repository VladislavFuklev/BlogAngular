import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadrPageComponent } from './dashboadr-page.component';

describe('DashboadrPageComponent', () => {
  let component: DashboadrPageComponent;
  let fixture: ComponentFixture<DashboadrPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboadrPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboadrPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
