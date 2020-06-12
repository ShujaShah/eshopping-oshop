import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyOrderComponent } from './view-my-order.component';

describe('ViewMyOrderComponent', () => {
  let component: ViewMyOrderComponent;
  let fixture: ComponentFixture<ViewMyOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMyOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
