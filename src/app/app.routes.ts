import { Portfolio } from './portfolio/portfolio';
import { Fullstack } from './fullstack/fullstack';
import { Back } from './back/back';
import { Front } from './front/front';
import { Notfound } from './notfound/notfound';
import { Team } from './team/team';
import { gallary } from './gallary/gallary';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { About } from './about/about';
import { X } from './x/x';
import { Y } from './y/y';
import { Routes } from '@angular/router';

let role : string = 'admin';


export const routes: Routes = [


    {
        path: '' , redirectTo:'home' , pathMatch:'full'  
        ,title: 'home'
    },
    {
        path: 'home' ,component : Home ,title: 'home'
    },
    {
        path: 'about' ,component : About ,title: 'about'
    },
    {
        path: 'portfolio',
        component: Portfolio ,title: 'portfolio'
    },
    {
        path: 'contact' ,component : Contact ,title: 'contact'
    },
    {
        path: '' , redirectTo: () => {  
            if(role === 'admin'){
               return 'home' 
            }
            return 'contact'
        } , pathMatch:'full'  
    },

    {
        path: 'gallary' ,component : gallary
    },
    {
        path: 'team' ,component : Team , 
        children : [
                {path: '' ,component : Front},
                {path: 'front' ,component : Front},
                {path: 'back' ,component : Back},
                {path: 'FullStack' ,component : Fullstack},
                {
                 path: '**',  
                 component : Notfound
                }
        ]
    },
    {
        path: 'x',
        component: X
    },
    {
        path: 'y',
        component: Y
    },

    {
        path: '**', 
        component : Notfound
    },
];
