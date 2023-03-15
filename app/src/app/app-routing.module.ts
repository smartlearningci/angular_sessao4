import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DevBlogViewComponent } from './views/dev-blog-view/dev-blog-view.component';
import { SobreComponent } from './views/sobre/sobre.component';

const routes: Routes = [
  
    { path: 'blog', component: DevBlogViewComponent },
    { path: 'sobre', component: SobreComponent },
    { path: '', redirectTo: '/blog', pathMatch: 'full' }
  ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }