// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Reservation } from '../Classes/Reservation'; 

// @Injectable({
//   providedIn: 'root'
// })
// export class ReservationService {

//   private apiUrl = 'http://localhost:8081/Reservation'; 

//   constructor(private http: HttpClient) { }

//   addReservation(reservation: Reservation): Observable<Reservation> {
//     return this.http.post<Reservation>(`${this.apiUrl}/addReservation`, reservation);
//   }

//   deleteReservationById(reservationId: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/deleteReservationById/${reservationId}`);
//   }

//   updateReservation(reservationId: number, reservation: Reservation): Observable<Reservation> {
//     return this.http.put<Reservation>(`${this.apiUrl}/updateReservation/${reservationId}`, reservation);
//   }

//   getAllReservations(): Observable<Reservation[]> {
//     return this.http.get<Reservation[]>(`${this.apiUrl}/getAllReservations`);
//   }

//   findReservationById(reservationId: number): Observable<Reservation> {
//     return this.http.get<Reservation>(`${this.apiUrl}/findReservationById/${reservationId}`);
//   }
// }
