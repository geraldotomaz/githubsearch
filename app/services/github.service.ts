import {Injectable} from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    
    private username:string;
    private client_id = '453b1782e9442b80e97e';
    private client_secret = '978e59d1523cbe80f09149d6ce2e50b09d86b060';

    constructor(private _http:Http){
        console.log('Github service Ready...');
        this.username = 'geraldotomaz';
    }
    getUser(){
        
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
            
    }
    getRepos(){
        
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
            
    }

    updateUser(username:string){
        this.username = username

    }
}
