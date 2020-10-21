import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-page-form',
  templateUrl: './listing-page-form.component.html',
  styleUrls: ['./listing-page-form.component.css']
})
export class ListingPageFormComponent implements OnInit {

  @Input() btnLabel:string;
  @Output() saveList= new EventEmitter<Listing>();

  listing:Listing = {
    id: '',
    name: '',
    description: '',
    price: 0.00
  };


  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.listing = fakeMyListings.find(listObj => listObj.id === id);
    }
  }

  saveListing():void {
    console.log('saveListing : ', this.listing);
    this.saveList.emit(this.listing);
  }

}
