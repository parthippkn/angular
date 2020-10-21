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

  buttonLabel:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.buttonLabel = "Create";
  }

  createListing(listing:Listing): void {
    console.log('In createListing' , listing)
    listing.id = new Date().getTime() + "";
    fakeMyListings.push(listing);
    this.router.navigateByUrl("/my-listings")
  }
}
