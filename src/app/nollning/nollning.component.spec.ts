import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NollningComponent } from './nollning.component';

describe('NollningComponent', () => {
  let component: NollningComponent;
  let fixture: ComponentFixture<NollningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NollningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NollningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
