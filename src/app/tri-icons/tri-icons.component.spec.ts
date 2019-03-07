import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriIconsComponent } from './tri-icons.component';

describe('TriIconsComponent', () => {
  let component: TriIconsComponent;
  let fixture: ComponentFixture<TriIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
