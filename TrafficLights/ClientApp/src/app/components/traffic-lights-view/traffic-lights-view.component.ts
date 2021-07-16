import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-traffic-lights-view',
  templateUrl: './traffic-lights-view.component.html',
  styleUrls: ['./traffic-lights-view.component.scss']
})
export class TrafficLightsViewComponent implements OnInit {



  redLightActive: boolean = false;
  yellowLightActive: boolean = false;
  greenLightActive: boolean = false;
  timer: any;

  color: string = ""
  timeToWait: number = 0;

  accessPointUrl: string = 'api/Lights';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.startTrafficLights();
  }

  sendPostRequest(data: string): Observable<any> {
    var headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.httpClient.post<any>(this.accessPointUrl, JSON.stringify(data), headers);
  }

  startTrafficLights(): void {

    this.getMyNextLight();
    this.setMyColor();

    this.timer = setTimeout(() => {
      this.startTrafficLights()
    }, this.timeToWait);
  }

  getMyNextLight(): void {

    this.sendPostRequest(this.color)
      .subscribe((responseBody) => {
        this.color = responseBody.color;
        this.timeToWait = responseBody.time * 1000;

      });
  }

  setMyColor() {
    switch (this.color) {
      case "red":
        this.redLightActive = true;
        this.yellowLightActive = false;
        this.greenLightActive = false;
        break;
      case "redYellow":
        this.redLightActive = true;
        this.yellowLightActive = true;
        this.greenLightActive = false;
        break;
      case "yellow":
        this.redLightActive = false;
        this.yellowLightActive = true;
        this.greenLightActive = false;
        break;
      case "green":
        this.redLightActive = false;
        this.yellowLightActive = false;
        this.greenLightActive = true;
        break;

    }
  }

}
