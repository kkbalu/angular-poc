import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    private apiUrl = "http://aoi076:2500/grid";
    constructor(private http: HttpClient) { }

    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    }

    getUsers(): Observable<Object[]> {

        return this.http.get<Object[]>(this.apiUrl);
    }
    // getUsers() { 
    //     return new Promise((resolve, reject) => {
    //         this.http.get(this.apiUrl)
    //             .subscribe((data: any) => {
    //                 resolve(data);
    //             }, reject);

    //     });
    // }
};






