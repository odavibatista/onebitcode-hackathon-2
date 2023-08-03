import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IndexComponent } from './views/index/index.component'
import { fader } from './route.animations'
import { StudentComponent } from './views/student/student.component'


const name = 'xHealth - '

const routes: Routes = [
    { path: '', component: IndexComponent, title: name + 'Home', data: { animation: fader } },
    { path: 'classes', loadChildren: () => import('./views/classes/classes.module').then(m => m.ClassesModule), title: name + 'Aulas', data: { animation: fader } },
    { path: 'coaches', loadChildren: () => import('./views/coaches/coaches.module').then(m => m.CoachesModule), title: name + 'Profissionais', data: { animation: fader } },
    { path: 'memberships', loadChildren: () => import('./views/memberships/memberships.module').then(m => m.MembershipsModule), title: name + 'Planos', data: { animation: fader } },
    { path: 'testimonies', loadChildren: () => import('./views/testimonies/testimonies.module').then(m => m.TestimoniesModule), title: name + 'Depoimentos', data: { animation: fader } },
    { path: 'contact', loadChildren: () => import('./views/contact/contact.module').then(m => m.ContactModule), title: name + 'Fale Conosco', data: { animation: fader } },
    { path: 'sign', loadChildren: () => import('./views/sign/sign.module').then(m => m.SignModule), title: name + 'Entrar', data: { animation: 'fader' } },
    { path: 'terms', loadChildren: () => import('./views/terms/terms.module').then(m => m.TermsModule), title: name + 'Termos de Serviço', data: { animation: fader } },
    { path: 'privacy', loadChildren: () => import('./views/privacy/privacy.module').then(m => m.PrivacyModule), title: name + 'Privacidade', data: { animation: fader } },
    { path: 'student', component: StudentComponent, title: name + 'Área do Aluno', data: { animation: fader } }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top'})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
