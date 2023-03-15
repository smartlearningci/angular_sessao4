import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data/posts';

@Component({
  selector: 'Post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post?: any;
  constructor(private route: ActivatedRoute) { }
  dados : DataService = new DataService();
  
  ngOnInit(): void {

    this.getPost();
    
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.dados.getPost(id);
    console.log(this.post);
    console.log(this.route.snapshot.paramMap.get('seoTitulo'));
      
  }
}