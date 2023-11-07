import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { BlogComponent } from './views/blog/blog.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ExperienceComponent } from './views/experience/experience.component';

const routes: Routes = [
  { path: 'home', title: 'Web Developer - Ricardo Rocker', component: AboutComponent },
  { path: 'portfolio', title: 'Web Developer - Ricardo Rocker', component: PortfolioComponent },
  { path: 'blog', title: 'Web Developer - Ricardo Rocker', component: BlogComponent },
  { path: 'contact', title: 'Web Developer - Ricardo Rocker', component: ContactComponent },
  { path: 'experience', title: 'Web Developer - Ricardo Rocker', component: ExperienceComponent },
  { path: 'portfolio', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'blog', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'contact', redirectTo: '/contact', pathMatch: 'full' },
  { path: 'experience', redirectTo: '/experience', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }