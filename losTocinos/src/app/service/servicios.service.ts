import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Produ } from '../objectos/productos';
// import { Usuario } from '../objectos/usuario';
import { Productos } from '../objetos/productos';
import { Usuario } from '../objetos/usuario';
import { Proveedor } from '../objetos/proveedor';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
private urlLocal = "/api/teams";
httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}


  constructor(private http:HttpClient) { };

//jugador
  // getData():Observable<any>{
  //   return this.http.get<any>(this.urlLocal)
  // }

  // getDataById(id:number):Observable<Jugador>{
  //   return this.http.get<Jugador>(this.urlLocal + '/'  + id)
  // }

  // postJugador(jugador:Jugador):Observable<any>{
  //   return this.http.post<Jugador>(this.urlLocal, JSON.stringify(jugador), this.httpOptions).pipe(
  //     catchError((err)=>{
  //       console.log('Error en el servidor')
  //       console.log(err);
  //       return throwError(err);
  //     })
  //   )
  // }

  // dropJugador(id:number):Observable<any>{
  //   return this.http.delete<Jugador>(this.urlLocal + '/' + id, this.httpOptions)
  //   .pipe(
  //     catchError((err)=>{
  //       console.log('Error en el servidor')
  //       console.log(err);
  //       return throwError(err);
  //     })
  //   )
  // }

  // putJugador(id:number, jugador:Jugador):Observable<any>{
  //   return this.http.put<Jugador>(this.urlLocal + '/' + id, JSON.stringify(jugador),this.httpOptions)
  //   .pipe(
  //     catchError((err)=>{
  //       console.log('Error en el servidor')
  //       console.log(err);
  //       return throwError(err);
  //     })
  //   )
  // }


  //usuario
  // getDataUsuario():Observable<any>{
  //   return this.http.get<any>(this.urlLocal)
  // }

  // getDataByIdUsuario(id:number):Observable<Usuario>{
  //   return this.http.get<Usuario>(this.urlLocal + '/'  + id)
  // }

  // postUsuario(usuario:Usuario):Observable<Usuario>{
  //   return this.http.post<Usuario>(this.urlLocal, JSON.stringify(usuario), this.httpOptions).pipe(
  //     catchError((err)=>{
  //       console.log('Error en el servidor')
  //       console.log(err);
  //       return throwError(err);
  //     })
  //   )
  // }

  // dropUsuario(id:number):Observable<any>{
  //   return this.http.delete<Usuario>(this.urlLocal + '/' + id, this.httpOptions)
  //   .pipe(
  //     catchError((err)=>{
  //       console.log('Error en el servidor')
  //       console.log(err);
  //       return throwError(err);
  //     })
  //   )
  // }

  // putUsuario(id:number, usuario:Usuario):Observable<any>{
  //   return this.http.put<Usuario>(this.urlLocal + '/' + id, JSON.stringify(usuario),this.httpOptions)
  //   .pipe(
  //     catchError((err)=>{
  //       console.log('Error en el servidor')
  //       console.log(err);
  //       return throwError(err);
  //     })
  //   )
  // }

}
