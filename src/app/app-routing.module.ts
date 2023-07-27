import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IndexComponent } from './views/index/index.component'
import { ClassesComponent } from './views/classes/classes.component'
import { CoachesComponent } from './views/coaches/coaches.component'
import { MembershipsComponent } from './views/memberships/memberships.component'
import { TestimoniesComponent } from './views/testimonies/testimonies.component'
import { FaqComponent } from './views/faq/faq.component'
import { SignComponent } from './views/sign/sign.component'

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: '/classes', component: ClassesComponent },
    { path: '/coaches', component: CoachesComponent },
    { path: '/memberships', component: MembershipsComponent },
    { path: '/testimonies', component: TestimoniesComponent },
    { path: '/faq', component: FaqComponent },
    { path: '/sign', component: SignComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
