import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpyserviceService {


  constructor() { }
  authenticate(){
    localStorage.setItem('user','dharani');
  }
  checkAuthentication()
  {
    return(localStorage.getItem('user')==='dharani');
  }
}
