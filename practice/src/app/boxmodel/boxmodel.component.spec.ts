import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxmodelComponent } from './boxmodel.component';

describe('BoxmodelComponent', () => {
  let component: BoxmodelComponent;
  let fixture: ComponentFixture<BoxmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
