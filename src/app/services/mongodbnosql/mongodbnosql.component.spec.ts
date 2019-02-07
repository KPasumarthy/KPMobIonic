import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongodbnosqlComponent } from './mongodbnosql.component';

describe('MongodbnosqlComponent', () => {
  let component: MongodbnosqlComponent;
  let fixture: ComponentFixture<MongodbnosqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongodbnosqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongodbnosqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
