import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDBComponent } from './project-db.component';

describe('ProjectDBComponent', () => {
  let component: ProjectDBComponent;
  let fixture: ComponentFixture<ProjectDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
