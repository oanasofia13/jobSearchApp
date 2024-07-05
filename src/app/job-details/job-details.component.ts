import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobDetail } from '../job-detail.model';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {

  jobDetail!: JobDetail;
  jobIndustries!: string;

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const jobId = Number(params.get('id'));
      if (jobId) {
        this.jobService.getJobById(jobId).subscribe((jobDetail: JobDetail) => {
          this.jobDetail = jobDetail;
          this.jobIndustries = jobDetail.industries[0].replace(/&amp;/g, '&')
        });
      }
    });
  }

  goBack() {
    this.router.navigate(['/jobs']);
  }
}
