import { CustomerReservation } from './customer-reservation';

describe('CustomerReservation', () => {
  it('testing room is reserved or not', () => {
    //Arrange
    let custReserve=new CustomerReservation();
    //Act
    let isReserved=custReserve.reserveRoom();
    //Asset
    expect(isReserved).toBeTruthy();
    
  });
});
