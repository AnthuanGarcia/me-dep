import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //'Access-Control-Allow-Origin': '*',
      //'Access-Control-Allow-Credentials': "false",
      //'Access-Control-Allow-Methods': 'GET',
      //'Access-Control-Allow-Headers': 'Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    })
};

@Injectable()
export class ProjectsService {
    constructor(private http: HttpClient){}

    getProjects() {
        return this.http.get<any>('assets/projects.json');
    }
}
