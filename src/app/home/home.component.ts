import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  jobs: boolean = true;
  favorites: boolean = false;
  currentRoute: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }

  showLists(selectedValue: number) {
    switch (selectedValue) {
      case 1:
        this.router.navigate(['/jobs']);
        break;
      case 2:
        this.router.navigate(['/favorites']);
        break;
    }
  }

  isActive(path: string): boolean {
    return this.currentRoute === `/${path}`;
  }
}
