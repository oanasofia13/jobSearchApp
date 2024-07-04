import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobFavoriteComponent } from './job-favorite/job-favorite.component';
import { JobListComponent } from './job-list/job-list.component';

const routes: Routes = [
  { path: 'jobs', component: JobListComponent },
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'jobs/:id', component: JobDetailsComponent },
  { path: 'favorites', component: JobFavoriteComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
