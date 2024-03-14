import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    // pathMatch: "prefix",
    children: [
      // {
      //   path: 'endpoint-protection',
      //   loadChildren: (): Promise<any> =>
      //     import('./endpoint-protection/endpoint-protection.module').then(
      //       (m) => m.EndpointProtectionModule
      //     ),
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
