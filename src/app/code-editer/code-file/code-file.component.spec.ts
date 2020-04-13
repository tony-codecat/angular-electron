import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeFileComponent } from './code-file.component';

describe('CodeFileComponent', () => {
  let component: CodeFileComponent;
  let fixture: ComponentFixture<CodeFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
