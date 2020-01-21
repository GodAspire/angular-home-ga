import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('headerElem', {static: true}) headerElem: ElementRef;

  headerOffset: number = 104;
  mobileNavigation: boolean = false;

  ngOnInit() {

  }

  ngAfterViewInit() {

  }
}
