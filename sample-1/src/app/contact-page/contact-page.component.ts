import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  email:string = 'seller@sellerdummy.com';
  message:string = '';
  listing:Listing;

  constructor(private route:ActivatedRoute,
      private router: Router
      ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id);
    this.message = `Hi, I am interested in "${this.listing.name}" `
  }

  sendMessage():void {
    this.router.navigateByUrl("/listings");
  }

}
