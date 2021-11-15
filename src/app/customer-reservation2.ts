export class CustomerReservation2 {
    hotelRoomCapacity2=30;
    customerCount2=10;

    registerCustomer(){
        return ++this.customerCount2;
    }

    unRegisterCustomer(){
        return --this.customerCount2;
    }
}
