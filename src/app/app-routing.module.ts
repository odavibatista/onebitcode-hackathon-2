import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IndexComponent } from './views/index/index.component'
import { ClassesComponent } from './views/classes/classes.component'
import { CoachesComponent } from './views/coaches/coaches.component'
import { MembershipsComponent } from './views/memberships/memberships.component'
import { TestimoniesComponent } from './views/testimonies/testimonies.component'
import { SignComponent } from './views/sign/sign.component'
import { TermsComponent } from './views/terms/terms.component'
import { PrivacyComponent } from './views/privacy/privacy.component'
import { StudentComponent } from './views/student/student.component'
import { ContactComponent } from './views/contact/contact.component'
import { fader } from './route.animations'


const name = 'xHealth - '

const routes: Routes = [
    { path: '', component: IndexComponent, title: name + 'Home', data: { animation: fader } },
    { path: 'classes', component: ClassesComponent, title: name + 'Aulas', data: { animation: fader } },
    { path: 'coaches', component: CoachesComponent, title: name + 'Profissionais', data: { animation: fader } },
    { path: 'memberships', component: MembershipsComponent, title: name + 'Planos', data: { animation: fader } },
    { path: 'testimonies', component: TestimoniesComponent, title: name + 'Depoimentos', data: { animation: fader } },
    { path: 'contact', component: ContactComponent, title: name + 'Fale Conosco', data: { animation: fader } },
    { path: 'sign', component: SignComponent, title: name + 'Entrar', data: { animation: 'fader' } },
    { path: 'terms', component: TermsComponent, title: name + 'Termos de Serviço', data: { animation: fader } },
    { path: 'privacy', component: PrivacyComponent, title: name + 'Privacidade', data: { animation: fader } },
    { path: 'student', component: StudentComponent, title: name + 'Área do Aluno', data: { animation: fader } },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
