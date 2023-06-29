import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Batch1 } from './batch1';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService 
{

  private details_URL:string='http://localhost:5100/api/prod/batch';
  private List_URL:string='http://localhost:5100/api/prod/list';
  
  constructor(private http:HttpClient ) { }

  getDetails():Observable<Batch1[]>
  {
    return this.http.get<Batch1[]>(this.details_URL)
  }

  getlist():Observable<Batch1[]>
  {
    return this.http.get<Batch1[]>(this.List_URL)
  }
}
