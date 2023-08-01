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


const name = 'xHealth - '

const routes: Routes = [
    { path: '', component: IndexComponent, title: name + 'Home', data: { animation: 'enterLeavePage' } },
    { path: 'classes', component: ClassesComponent, title: name + 'Aulas', data: { animation: 'enterLeavePage' } },
    { path: 'coaches', component: CoachesComponent, title: name + 'Profissionais', data: { animation: 'enterLeavePage' } },
    { path: 'memberships', component: MembershipsComponent, title: name + 'Planos', data: { animation: 'enterLeavePage' } },
    { path: 'testimonies', component: TestimoniesComponent, title: name + 'Depoimentos', data: { animation: 'enterLeavePage' } },
    { path: 'contact', component: ContactComponent, title: name + 'Fale Conosco', data: { animation: 'enterLeavePage' } },
    { path: 'sign', component: SignComponent, title: name + 'Entrar', data: { animation: 'enterLeavePage' } },
    { path: 'terms', component: TermsComponent, title: name + 'Termos de Serviço', data: { animation: 'enterLeavePage' } },
    { path: 'privacy', component: PrivacyComponent, title: name + 'Privacidade', data: { animation: 'enterLeavePage' } },
    { path: 'student', component: StudentComponent, title: name + 'Área do Aluno', data: { animation: 'enterLeavePage' } },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
