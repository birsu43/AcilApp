import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
 
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'userpage',
    loadChildren: () => import('./userpage/userpage.module').then( m => m.UserpagePageModule)
  },
  {
    path: 'nasil-kullanilir',
    loadChildren: () => import('./nasil-kullanilir/nasil-kullanilir.module').then( m => m.NasilKullanilirPageModule)
  },
 
  {
    path: 'soru1',
    loadChildren: () => import('./Sorular/soru1/soru1.module').then( m => m.Soru1PageModule)
  },
  {
    path: 'popup',
    loadChildren: () => import('./popup/popup.module').then( m => m.PopupPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'baslangic',
    loadChildren: () => import('./Sorular/baslangic/baslangic.module').then( m => m.BaslangicPageModule)
  },
  {
    path: 'soru2',
    loadChildren: () => import('./Sorular/soru2/soru2.module').then( m => m.Soru2PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
