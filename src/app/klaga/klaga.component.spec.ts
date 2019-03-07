import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlagaComponent } from './klaga.component';

describe('KlagaComponent', () => {
  let component: KlagaComponent;
  let fixture: ComponentFixture<KlagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
