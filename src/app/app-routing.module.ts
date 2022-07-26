import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePageComponent } from './admin/create-page/create-page.component';
import { DashboadrPageComponent } from './admin/dashboadr-page/dashboadr-page.component';
import { EditPageComponent } from './admin/edit-page/edit-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomePageComponent },
      { path: 'post/:id', component: PostPageComponent },
      { path: 'dashboadr', component: DashboadrPageComponent },
      { path: 'create', component: CreatePageComponent },
      { path: 'post/:id/edit', component: EditPageComponent },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
