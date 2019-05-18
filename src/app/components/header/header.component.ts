import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private routerEvents: any;
  private previousUrl: string;
  private currentUrl: string;
  private canGoBack: boolean;
  @Input() pageTitle: string;
  @Input() sideMenu: boolean;
  constructor(
    private router: Router,
    private ionRouterOutlet: IonRouterOutlet
  ) { }

  ngOnInit() {
    //  this.pageTitle = this.pageTitle;
    this.canGoBack = this.ionRouterOutlet.canGoBack();
    this.currentUrl = this.router.url;
    this.routerEvents = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
  }
  ngOnDestroy() {
    this.routerEvents.unsubscribe();
  }

}
