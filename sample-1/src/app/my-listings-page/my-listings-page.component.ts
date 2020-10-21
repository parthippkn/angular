import { Component, OnInit } from '@angular/core';
import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {

  listings: Listing[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listings = fakeMyListings;
  }

  onDeleteListing(listingId: string): void {
    let indexId = 0;
    for(let i=0; i< fakeMyListings.length; i++) {
      if( fakeMyListings[i].id === listingId ) {
        indexId = i;
      }
    }
    fakeMyListings.splice(indexId, 1);
  }
}
