import { RenderMode, ServerRoute } from '@angular/ssr';

//hybird rendering (مزيج) شويه شاشات serverSide وشويه شاشات  clientSide وشويه شاشات Prerender
export const serverRoutes: ServerRoute[] = [
  {
    path : 'home',
    renderMode : RenderMode.Server
  }
  ,
  {
    path : 'about',
    renderMode : RenderMode.Client
  }
  ,
  {
    path : 'gallary',
    renderMode : RenderMode.Prerender //static HTML fiels for each route مينفعش يعتمد علي داتا جاية من الداتا بيز  <<< Prerender
  }
  ,
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
