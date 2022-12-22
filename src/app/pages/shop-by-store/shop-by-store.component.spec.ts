import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByStoreComponent } from './shop-by-store.component';

describe('ShopByStoreComponent', () => {
  let component: ShopByStoreComponent;
  let fixture: ComponentFixture<ShopByStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopByStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopByStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
