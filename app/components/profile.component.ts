import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {
    user[];
    repos[];
    username:string;
    constructor(private _githubService: GithubService){
        this.user = false;
    }

    searchUser(){
        this._githubService.updateUser(this.username);

         this._githubService.getUser().subscribe(
            user => { 
                this.user = user;
                console.log(user);
        },
            erro => {
                console.log(erro);
            }
        )

        this._githubService.getRepos().subscribe(
            repos => { 
                this.repos = repos;
                console.log(repos);
        },
            erro => {
                console.log(erro);
            }
        )
    }
}
