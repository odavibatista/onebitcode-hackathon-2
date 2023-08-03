import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MembershipsComponent } from './memberships.component'

const routes: Routes = [{ path: '', component: MembershipsComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MembershipsRoutingModule {}
