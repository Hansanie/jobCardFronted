import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMngmntComponent } from './top-mngmnt.component';

describe('TopMngmntComponent', () => {
  let component: TopMngmntComponent;
  let fixture: ComponentFixture<TopMngmntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMngmntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMngmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
