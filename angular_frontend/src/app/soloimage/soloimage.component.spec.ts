import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloimageComponent } from './soloimage.component';

describe('SoloimageComponent', () => {
  let component: SoloimageComponent;
  let fixture: ComponentFixture<SoloimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoloimageComponent]
    });
    fixture = TestBed.createComponent(SoloimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
