import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggComponent } from './plugg.component';

describe('PluggComponent', () => {
  let component: PluggComponent;
  let fixture: ComponentFixture<PluggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
