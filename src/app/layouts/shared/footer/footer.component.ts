import { Component, OnInit } from '@angular/core';
import {InternetConnectionService} from '../../../core/services/internet-connection.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  hasNetworkConnection: boolean;
  hasInternetAccess: boolean;
  status: string;

  constructor(
    private connectionService: InternetConnectionService
  ) {
    this.connectionService.monitor().subscribe(currentState => {
      this.hasNetworkConnection = currentState.hasNetworkConnection;
      this.hasInternetAccess = currentState.hasInternetAccess;
      if (this.hasNetworkConnection && this.hasInternetAccess) {
        this.status = 'ONLINE';
      } else {
        this.status = 'OFFLINE';
      }
    });
  }

  ngOnInit() {
  }

}
