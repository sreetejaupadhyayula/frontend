import { Component } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { HttpService } from './http.service';
import { Data, Result } from './model/result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-end';
  response: Data[] = [];
  success = true;
  constructor(private httpService: HttpService) {}

  onClickEventReceived(event: string) {
    
      this.httpService.getStatusOfWebsite(event).subscribe((res) => {
        if(res.success) {
          this.success = true;
          this.response = res.data;
        }
      }, error => {
        console.log(error);
        this.success = false; 
      });
    
    
  }

}
