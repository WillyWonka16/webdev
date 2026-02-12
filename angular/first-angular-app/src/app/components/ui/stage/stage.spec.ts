import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage } from './stage';

describe('Stage', () => {
  let component: Stage;
  let fixture: ComponentFixture<Stage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stage],
    }).compileComponents();

    fixture = TestBed.createComponent(Stage);
    fixture.componentRef.setInput('title', 'Test Title');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
