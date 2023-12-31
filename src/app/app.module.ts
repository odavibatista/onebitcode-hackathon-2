import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgxSplideModule } from 'ngx-splide'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/common/header/header.component'
import { FooterComponent } from './components/common/footer/footer.component'
import { IndexComponent } from './views/index/index.component'
import { ClassesComponent } from './views/classes/classes.component'
import { MembershipsComponent } from './views/memberships/memberships.component'
import { SignComponent } from './views/sign/sign.component'
import { RegisterComponent } from './views/sign/register/register.component'
import { LoginComponent } from './views/sign/login/login.component'
import { StudentComponent } from './views/student/student.component'
import { PrivacyComponent } from './views/privacy/privacy.component'
import { TermsComponent } from './views/terms/terms.component'
import { ModalsComponent } from './views/index/modals/modals.component'
import { ModalsSectionComponent } from './views/index/modals-section/modals-section.component'
import { GearComponent } from './views/index/gear/gear.component'
import { HeroComponent } from './views/index/hero/hero.component'
import { TestimonialsComponent } from './views/index/testimonials/testimonials.component'
import { TestimonyComponent } from './views/index/testimonials/testimony/testimony.component'
import { ContactComponent } from './views/contact/contact.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MembershipComponent } from './views/memberships/plans/membership/membership.component'
import { ServicesComponent } from './views/memberships/services/services.component'
import { ServiceComponent } from './views/memberships/services/service/service.component'
import { CardComponent } from './views/memberships/plans/membership/card/card.component'
import { PlansComponent } from './views/memberships/plans/plans.component'
import { ClassListComponent } from './views/classes/class-list/class-list.component'
import { SingleClassComponent } from './views/classes/class-list/single-class/single-class.component'
import { CoachesComponent } from './views/coaches/coaches.component'
import { CoachesListComponent } from './views/coaches/coaches-list/coaches-list.component'
import { SingleCoachComponent } from './views/coaches/coaches-list/single-coach/single-coach.component'
import { FaqSectionComponent } from './views/contact/faq-section/faq-section.component'
import { QuestionComponent } from './views/contact/faq-section/question/question.component'
import { TestimoniesComponent } from './views/testimonies/testimonies.component'
import { FirstTestimoniesComponent } from './views/testimonies/first-testimonies/first-testimonies.component'
import { SecondTestimoniesComponent } from './views/testimonies/second-testimonies/second-testimonies.component'
import { ThirdTestimoniesComponent } from './views/testimonies/third-testimonies/third-testimonies.component'

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        IndexComponent,
        MembershipsComponent,
        SignComponent,
        RegisterComponent,
        LoginComponent,
        StudentComponent,
        PrivacyComponent,
        TermsComponent,
        ModalsComponent,
        ModalsSectionComponent,
        GearComponent,
        HeroComponent,
        TestimonialsComponent,
        TestimonyComponent,
        ContactComponent,
        MembershipComponent,
        ServicesComponent,
        ServiceComponent,
        CardComponent,
        PlansComponent,
        ClassesComponent,
        ClassListComponent,
        SingleClassComponent,
        CoachesComponent,
        CoachesListComponent,
        SingleCoachComponent,
        FaqSectionComponent,
        QuestionComponent,
        TestimoniesComponent,
        FirstTestimoniesComponent,
        SecondTestimoniesComponent,
        ThirdTestimoniesComponent
    ],

    imports: [BrowserAnimationsModule, BrowserModule, AppRoutingModule, NgxSplideModule],
    providers: [],

    bootstrap: [AppComponent]
})
export class AppModule {}
