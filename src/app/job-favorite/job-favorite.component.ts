import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../job.model';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-favorite',
  templateUrl: './job-favorite.component.html',
  styleUrl: './job-favorite.component.css'
})
export class JobFavoriteComponent implements OnInit {
  favJobs: Job[] = [];

  constructor(
    private jobService: JobService,
    private router: Router
  ) { }

  ngOnInit() {
    this.jobService.getFavs().subscribe((jobs: Job[]) => {
      this.favJobs = jobs;
    });
  }

  selectJob(id: number): void {
    this.router.navigate(['/jobs', id]);
  }

  setFavorite(jobId: number) {
    this.jobService.postFavs(jobId).subscribe((favorites: number[]) => {
      this.favJobs = this.favJobs.filter(job => favorites.includes(job.id));
    });
  }
  isFavorite(jobId: number) {
    return this.favJobs.some(job => job.id === jobId);
  }
}
