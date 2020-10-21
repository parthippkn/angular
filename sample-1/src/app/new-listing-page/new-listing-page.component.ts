import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fakeMyListings } from '../fake-data';
import { ListingDetailPageComponent } from '../listing-detail-page/listing-detail-page.component';
import { Listing } from '../types';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {

  listing:Listing = {
    id: '',
    name: '',
    description: '',
    price: 0.00
  };

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  createListing(): void {
    this.listing.id = new Date().getTime() + "";
    fakeMyListings.push(this.listing);
    this.router.navigateByUrl("/my-listings")
  }
}
