import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PouchdbListComponent } from './pouchdb-list.component';

describe('PouchdbListComponent', () => {
  let component: PouchdbListComponent;
  let fixture: ComponentFixture<PouchdbListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PouchdbListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PouchdbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
