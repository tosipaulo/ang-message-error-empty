import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDoisComponent } from './page-dois.component';

describe('PageDoisComponent', () => {
  let component: PageDoisComponent;
  let fixture: ComponentFixture<PageDoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
