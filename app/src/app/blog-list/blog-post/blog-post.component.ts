import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {

  @Input('titulo') postTitulo = '';
  @Input('imagem') postImagem = '';
  @Input('dataPublicacao') postDataPublicacao = '';
  @Input('pequenaDescricao') postPequenaDescricao = '';
  @Input('tempoDeLeitura') postTempoDeLeitura = '';
}