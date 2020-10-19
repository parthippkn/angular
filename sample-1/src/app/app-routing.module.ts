import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListingPageComponent} from './listing-page/listing-page.component';
import {ListingDetailPageComponent} from './listing-detail-page/listing-detail-page.component';
import {EditListingPageComponent} from './edit-listing-page/edit-listing-page.component';
import {NewListingPageComponent} from './new-listing-page/new-listing-page.component';
import {MyListingsPageComponent} from './my-listings-page/my-listings-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component'

//define your routes
const routes: Routes = [
    {path: '', redirectTo: '/listings', pathMatch: 'full'},
    {path: 'listings', component: ListingPageComponent, pathMatch: 'full' },
    {path: 'listings/:id', component: ListingDetailPageComponent},
    {path: 'edit-listing', component: EditListingPageComponent},
    {path: 'new-listing', component: NewListingPageComponent},
    {path: 'my-listings', component: MyListingsPageComponent},
    {path: 'contacts/:id', component: ContactPageComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}