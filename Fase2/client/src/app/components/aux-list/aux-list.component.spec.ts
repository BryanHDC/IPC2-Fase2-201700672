import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxListComponent } from './aux-list.component';

describe('AuxListComponent', () => {
  let component: AuxListComponent;
  let fixture: ComponentFixture<AuxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
