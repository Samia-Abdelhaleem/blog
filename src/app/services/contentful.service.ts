import { Injectable } from '@angular/core';
import { Entry, createClient } from 'contentful';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor() {}

  private client = createClient({
    space: '9lfoh0qj9sd6',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: 'WOrUxO4eYpEmHxs2qALMu-b9nIDAhqiZNCw_5K4rMEc',
  });
  getAllEnteries(){
  return from(this.client.getEntries({content_type:'blogPost'}))  

  }

  getEnteryById(id:string){
    return from(this.client.getEntry(id))  
  }
  getEnteryByContentType(type:string){
    return from(this.client.getEntries({content_type:type}))  
  }
}
