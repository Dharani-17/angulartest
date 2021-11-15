import { CustomerReservation2 } from './customer-reservation2';

describe('CustomerReservation2', () => {

   let custService:CustomerReservation2;
  beforeEach(()=>{
   custService=new CustomerReservation2();
  });
  afterEach(()=>{
    custService;
  });

  it('should register customer', () => {
  
   let custCount=custService.registerCustomer();
   expect(custCount).toEqual(11);
  });
  it('should unregister customer', () => {
   
   let custCount=custService.unRegisterCustomer();
   expect(custCount).toEqual(9);
   
  });
});
