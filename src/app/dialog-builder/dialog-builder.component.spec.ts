import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBuilderComponent } from './dialog-builder.component';

describe('DialogBuilderComponent', () => {
  let component: DialogBuilderComponent;
  let fixture: ComponentFixture<DialogBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
