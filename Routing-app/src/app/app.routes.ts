// Importing required libraries.
import{ Routes, RouterModule } from "@angular/router"
import { AddMovieComponent } from './Component/add-movie.component'
import { ListMovieComponent } from './Component/list-movie.component'
import { PageNotFoundComponent } from './Component/page-not-found.component'

// Defining path and assigning component to it.
export const ApplicationRoutes: Routes = [
    { path:'', redirectTo:'/ListMovie', pathMatch:'full'}, /* Default routes*/
    { path:'AddMovie', component: AddMovieComponent },
    { path:'ListMovie', component: ListMovieComponent },
    { path:'**', component: PageNotFoundComponent } /* Wild card routes */
]
