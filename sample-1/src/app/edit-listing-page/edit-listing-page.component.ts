import { Component, OnInit } from '@angular/core';
import {Router,  ActivatedRoute} from '@angular/router'
import {Listing} from '../types'
import {fakeMyListings} from '../fake-data'

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {

  buttonLabel:string = "Save Changes";
  listing:Listing;

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeMyListings.find(listingObj => listingObj.id == id);
  }

  saveListing(listingObj): void {
    this.router.navigateByUrl("/my-listings")
  }
  

}
