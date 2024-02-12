import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../services/contentful.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent implements OnInit {
  blogPost$!:Observable<any | undefined>
  constructor( private contentfulService  : ContentfulService, private route : ActivatedRoute ){}
  ngOnInit(): void {
   this.route.params.subscribe((params)=>{
   const blogId = params['id']
   this.blogPost$ = this.contentfulService.getEnteryById(blogId)
  //  this.blogPost$ = this.contentfulService.getEnteryByContentType('navbar')
  //  this.blogPost$.subscribe((res)=>{
  //   console.log(res.items[0].fields.navbarItems.navbarItems)
  //  })
   })
  }

}
