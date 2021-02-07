import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  news: number[]=[];
  story: any=[];
  comment: any=[];

  constructor(private newsService: NewsService){}

ngOnInit(): void {
   this.newsService.getTopStoriesIds().subscribe(res=>{
      this.news = res;
      console.log(this.news);

      this.newsService.getItemsStories(this.news[0]).subscribe(elem=>{
        
        this.story = elem
        console.log(this.story);
      });

    
  });

       
  
  

}

}
