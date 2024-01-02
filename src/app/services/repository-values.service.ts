import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepositoryValuesService {

  // For Recent auction 
  AuctionViewing: any
  AuctionItemName: any

  // 1 - Auction
  // 2 - Sold 
  // 3 - Available (Fixed Price)

  constructor(private http: HttpClient) {  

  }

}
