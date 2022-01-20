import { Injectable } from '@angular/core';						//Estos son los típicos.
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Project } from '../models/project';	//importo el modelo de proyecto que he creado

import { Global } from './global';				//importo el archivo Global, que contiene la 
												//variable con la url, y así no tengo que escribirla siempre.

@Injectable()
export class ProjectService{
	public url: string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	testService(){
		return 'Probando el servicio de Angular';
	}

	saveProject(project: Project): Observable <any>{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url+'save-project', params, {headers:headers});
	}

	getProjects(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'projects', {headers: headers});
	}

	getProject(id: any): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'project/'+id, {headers: headers});
	}

	deleteProject(id: any): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'project/'+id, {headers: headers});
	}

	updateProject(project: Project): Observable<any>{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'project/'+project._id, params, {headers: headers});
	}
}