import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgumentPanelComponent } from './argument-panel.component';

describe('ArgumentPanelComponent', () => {
  let component: ArgumentPanelComponent;
  let fixture: ComponentFixture<ArgumentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgumentPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgumentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
