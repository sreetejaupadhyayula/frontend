import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from './model/result';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  baseUrl = "http://localhost:5000/";
  googleStatus = "api/v1/google-status";
  amazonStatus = "api/v1/amazon-status";
  allStatus = "api/v1/all-status";

  constructor(private httpClient: HttpClient) { }

  getStatusOfWebsite = (statusType: string) => {
    const webStatus = statusType === "google" 
                      ? this.googleStatus 
                      : statusType === "amazon" 
                      ? this.amazonStatus 
                      : this.allStatus;
    return this.httpClient.get<Result>(this.baseUrl+webStatus).pipe(catchError(this.handleError));
           
  }
  
  handleError(error: any) {

    console.log(error);
 
    return throwError(() => new Error("error"));
 
  }
 
 }

