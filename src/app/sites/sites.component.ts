import { Component, OnInit } from '@angular/core';
import { SITES } from '../default-sites';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  sites = SITES;
 
  constructor() { }

  ngOnInit() {
  }

}
