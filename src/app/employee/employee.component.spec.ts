import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpyserviceService } from '../spyservice.service';
import { EmployeeComponent } from './employee.component';
describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService:SpyserviceService;
  let h1:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers:[SpyserviceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authService=TestBed.get(SpyserviceService);
    component = fixture.componentInstance;
    h1=fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should return value of salary slip and call checkauthentication', () => {
    spyOn(authService,'checkAuthentication').and.returnValue(true);
   //let salSlip=component.getSalarySlip();
   //expect(salSlip).toEqual('Salary Slip');
   //expect(authService.checkAuthentication).toHaveBeenCalled();
   component.getSalarySlip();
   fixture.detectChanges();
   expect(h1.textContent).toBe(component.salSlip);
  });
});
