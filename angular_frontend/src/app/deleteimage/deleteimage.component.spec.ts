import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteimageComponent } from './deleteimage.component';

describe('DeleteimageComponent', () => {
  let component: DeleteimageComponent;
  let fixture: ComponentFixture<DeleteimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteimageComponent]
    });
    fixture = TestBed.createComponent(DeleteimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
