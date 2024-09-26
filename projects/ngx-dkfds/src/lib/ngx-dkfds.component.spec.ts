import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDkfdsComponent } from './ngx-dkfds.component';

describe('NgxDkfdsComponent', () => {
  let component: NgxDkfdsComponent;
  let fixture: ComponentFixture<NgxDkfdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDkfdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDkfdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
