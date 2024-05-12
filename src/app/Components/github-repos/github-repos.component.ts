import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Repo {
  name: string;
  html_url: string;
  description: string;
  languages_url: string;
  languages?: string[];
}

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit{

  @Input()
  githubRepos!: any[];
  $last: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  pageSize=10;
  currentPage=1;



  fetchedLanguages: string[] = [];
  // Method to fetch and process language data
  // getLanguages(languagesUrl: string): void {
  //   this.http.get<any>(languagesUrl)
  //     .subscribe(data => {
  //       // Process the language data here
  //       this.fetchedLanguages = Object.keys(data);
  //       console.log("What is the language",data);
  //     });
  // }

  getLanguages(languagesUrl: string, repo: Repo): void {
    this.http.get<any>(languagesUrl)
      .subscribe(data => {
        repo.languages = Object.keys(data);
      });
  }
}
