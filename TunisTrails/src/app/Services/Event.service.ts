import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../Classes/Event'; 

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'http://localhost:8081/Event'; 

  constructor(private http: HttpClient) { }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.apiUrl}/addEvent`, event);
  }

  deleteEventByIdEvent(eventId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteEventByIdEvent/${eventId}`);
  }

  updateEvent(eventId: number, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrl}/updateEvent/${eventId}`, event);
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/getAllEvents`);
  }

  findEventById(eventId: number): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/findEventById/${eventId}`);
  }
}
