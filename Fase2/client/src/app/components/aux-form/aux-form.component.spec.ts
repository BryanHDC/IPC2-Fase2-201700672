import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxFormComponent } from './aux-form.component';

describe('AuxFormComponent', () => {
  let component: AuxFormComponent;
  let fixture: ComponentFixture<AuxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
