import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { ProjectwebJSComponent } from './components/projectweb-js/projectweb-js.component';
import { ProjectDBComponent } from './components/project-db/project-db.component';




const appRoutes: Routes = [
	{path: '', component: AboutComponent},
	{path: 'about', component: AboutComponent},
	{path: 'projects', component: ProjectsComponent},
	{path: 'projects/projectweb-js', component: ProjectwebJSComponent},
	{path: 'projects/project-db', component: ProjectDBComponent},
	{path: 'contact', component: ContactComponent},
	{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);