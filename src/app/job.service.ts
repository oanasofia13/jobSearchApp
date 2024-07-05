import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { JobDetail } from './job-detail.model';
import { Job } from './job.model';
@Injectable({
    providedIn: 'root'
})
export class JobService {
    private apiUrl = '/jobs';
    private favoriteKey = 'favoriteJobs';

    constructor(private http: HttpClient) { }

    getAllJobs(): Observable<Job[]> {
        return this.http.get<Job[]>(`${this.apiUrl}`)
    }

    getJobById(id: number): Observable<JobDetail> {
        return this.http.get<JobDetail>(`${this.apiUrl}/${id}`);
    }

    getFavs(): Observable<Job[]> {
        const favoriteIds = this.getFavoriteIds();
        return this.http.get<Job[]>(`${this.apiUrl}`).pipe(
            map(jobs => jobs.filter(job => favoriteIds.includes(job.id)))
        );
    }

    postFavs(jobId: number): Observable<number[]> {
        let favorites = this.getFavoriteIds();
        if (favorites.includes(jobId)) {
            favorites = favorites.filter(id => id !== jobId);
        } else {
            favorites.push(jobId);
        }
        this.saveFavoriteIds(favorites);
        return of(favorites);
    }

    private getFavoriteIds(): number[] {
        const favorites = localStorage.getItem(this.favoriteKey);
        return favorites ? JSON.parse(favorites) : [];
    }

    private saveFavoriteIds(ids: number[]): void {
        localStorage.setItem(this.favoriteKey, JSON.stringify(ids));
    }
}
