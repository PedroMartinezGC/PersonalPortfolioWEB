import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectwebJSComponent } from './projectweb-js.component';

describe('ProjectwebJSComponent', () => {
  let component: ProjectwebJSComponent;
  let fixture: ComponentFixture<ProjectwebJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectwebJSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectwebJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
