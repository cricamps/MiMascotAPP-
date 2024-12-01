
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API endpoint

  constructor(private http: HttpClient) {}

  fetchPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}