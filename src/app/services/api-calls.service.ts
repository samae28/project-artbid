import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import 'rxjs/operators';
 

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  APIURL = 'https://art-bid.000webhostapp.com/';

  constructor(private http: HttpClient) {  

  }

  Get_recentAuction(){ 
    return this.http.get(this.APIURL+"recent-auction.php");
  } 

  Get_AllAuction(){ 
    return this.http.get(this.APIURL+"see-all-auction.php");
  } 

  View_auction_item(auction_id:any){
    return this.http.get(this.APIURL+"auction-view-item.php?auction_id="+auction_id);
  }

  
  Get_featured_artists(){ 
    return this.http.get(this.APIURL+"see-featured-artist.php");
  }
}
