// core
import {AfterViewChecked, AfterViewInit, Component, OnDestroy} from '@angular/core';

// service
import {DataService} from './service/data.service';
import {JsPlumbService} from './service/js-plumb.service';

// class
import {Data} from './class/data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'er-diagram',
  templateUrl: './er-diagram.component.html',
  styleUrls: ['./er-diagram.component.scss']
})
export class ErDiagramComponent implements AfterViewInit, AfterViewChecked, OnDestroy {

  data: Data;

  constructor(
    private dataService: DataService,
    private jsPlumbService: JsPlumbService
  ) {
    console.log('AppComponent.constructor() is called!');
    this.data = this.dataService.data;
  }

  ngAfterViewInit() {
    console.log('AppComponent.ngAfterViewInit() is called!');
    this.jsPlumbService.init();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewChecked() {
    // console.log('AppComponent.ngAfterViewChecked() is called!');
    if (this.dataService.flg_repaint) {
      this.dataService.flg_repaint = false;
      this.jsPlumbService.repaintEverything();
    }
  }

  ngOnDestroy(): void {
    console.log(this.data);
  }
}
