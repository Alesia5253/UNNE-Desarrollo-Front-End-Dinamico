import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbautUsComponent } from './abaut-us.component';

describe('AbautUsComponent', () => {
  let component: AbautUsComponent;
  let fixture: ComponentFixture<AbautUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbautUsComponent]
    });
    fixture = TestBed.createComponent(AbautUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
