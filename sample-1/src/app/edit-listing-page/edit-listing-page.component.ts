import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, ActivatedRoute} from '@angular/router'
import {Listing} from '../types'
import {fakeListings} from '../fake-data'

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {

  listing:Listing;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    this.listing = fakeListings.find(listingObj => listingObj.id == id);
  }

}
