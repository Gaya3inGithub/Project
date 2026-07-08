import { Routes } from '@angular/router';
import { ContactcreateComponent } from './contactcreate/contactcreate.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContacteditComponent } from './contactedit/contactedit.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';

export const routes: Routes = [
    {path:"create",component:ContactcreateComponent},
    {path:"list",component:ContactlistComponent},
    {path:"edit",component:ContacteditComponent},
    {path:"details",component:ContactdetailsComponent},
    {path:"",component:ContactlistComponent}
];
