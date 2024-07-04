import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../job.model';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
  jobs: Job[] = [];
  favoriteJobs: number[] = []

  constructor(
    private jobService: JobService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((data: Job[]) => {
      this.jobs = data;
    });
    this.jobService.getFavs().subscribe((favorites: Job[]) => {
      this.favoriteJobs = favorites.map(job => job.id);
    });
  }

  setFavorite(jobId: number): void {
    this.jobService.postFavs(jobId).subscribe((fav) => {
      this.favoriteJobs = fav;
    })
  }

  isFavorite(jobId: number): boolean {
    return this.favoriteJobs.includes(jobId)
  }

  selectJob(id: number): void {
    this.router.navigate(['/jobs', id]);
  }
}
