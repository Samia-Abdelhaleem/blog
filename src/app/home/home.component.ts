import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  blogPost$!:Observable<any | undefined>

  constructor(private contentfulService  : ContentfulService ){}
  ngOnInit(): void {
  this.blogPost$=  this.contentfulService.getAllEnteries()
  this.blogPost$.subscribe((res)=>{
    console.log(res)
  })
  }

}
