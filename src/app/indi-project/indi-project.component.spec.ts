import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiProjectComponent } from './indi-project.component';

describe('IndiProjectComponent', () => {
  let component: IndiProjectComponent;
  let fixture: ComponentFixture<IndiProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
