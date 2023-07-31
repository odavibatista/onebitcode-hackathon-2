import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IndexComponent } from './views/index/index.component'
import { ClassesComponent } from './views/classes/classes.component'
import { CoachesComponent } from './views/coaches/coaches.component'
import { MembershipsComponent } from './views/memberships/memberships.component'
import { TestimoniesComponent } from './views/testimonies/testimonies.component'
import { FaqComponent } from './views/faq/faq.component'
import { SignComponent } from './views/sign/sign.component'
import { TermsComponent } from './views/terms/terms.component'
import { PrivacyComponent } from './views/privacy/privacy.component'
import { StudentComponent } from './views/student/student.component'


const name = 'xHealth - '

const routes: Routes = [
    { path: '', component: IndexComponent, title: name + 'Home' },
    { path: 'classes', component: ClassesComponent, title: name + 'Aulas' },
    { path: 'coaches', component: CoachesComponent, title: name + 'Profissionais' },
    { path: 'memberships', component: MembershipsComponent, title: name + 'Planos' },
    { path: 'testimonies', component: TestimoniesComponent, title: name + 'Depoimentos' },
    { path: 'faq', component: FaqComponent, title: name + 'FAQ' },
    { path: 'sign', component: SignComponent, title: name + 'Entrar' },
    { path: 'terms', component: TermsComponent, title: name + 'Termos de Serviço' },
    { path: 'privacy', component: PrivacyComponent, title: name + 'Privacidade' },
    { path: 'student', component: StudentComponent, title: name + 'Área do Aluno' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
