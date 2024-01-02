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
  
  Get_recentAuction_current(){ 
    return this.http.get(this.APIURL+"auction-current.php");
  } 
  
  Get_recentAuction_upcoming(){ 
    return this.http.get(this.APIURL+"auction-upcoming.php");
  } 
  
  Get_recentAuction_past(){ 
    return this.http.get(this.APIURL+"auction-past.php");
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

  LoginAuth(email: any, password: any){ 
    return this.http.get(this.APIURL+"login.php?email="+email+"&password="+password);
  }
 
  get_artists_list(){ 
    return this.http.get(this.APIURL+"see-all-artists.php");
  }
 
  Get_art_medium(){ 
    return this.http.get(this.APIURL+"art-medium-list.php");
  }

  Get_art_by_medium(art_medium: any){
    return this.http.get(this.APIURL+"get-art-by-medium.php?art_medium="+art_medium);
  }

  Get_singleArtist(artist_id : any){
    return this.http.get(this.APIURL+"see-single-artist.php?artist_id="+artist_id); 
  }

  Get_ArtworkByArtist(artist_id:any){ 
    return this.http.get(this.APIURL+"see-art-by-artist.php?artist_id="+artist_id); 
  } 

}
