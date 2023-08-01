import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgxSplideModule } from 'ngx-splide';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/common/header/header.component'
import { FooterComponent } from './components/common/footer/footer.component'
import { IndexComponent } from './views/index/index.component';
import { ClassesComponent } from './views/classes/classes.component';
import { CoachesComponent } from './views/coaches/coaches.component';
import { MembershipsComponent } from './views/memberships/memberships.component';
import { TestimoniesComponent } from './views/testimonies/testimonies.component';
import { SignComponent } from './views/sign/sign.component';
import { RegisterComponent } from './views/sign/register/register.component';
import { LoginComponent } from './views/sign/login/login.component';
import { StudentComponent } from './views/student/student.component';
import { PrivacyComponent } from './views/privacy/privacy.component';
import { TermsComponent } from './views/terms/terms.component';
import { ModalsComponent } from './views/index/modals/modals.component';
import { ModalsSectionComponent } from './views/index/modals-section/modals-section.component';
import { GearComponent } from './views/index/gear/gear.component';
import { HeroComponent } from './views/index/hero/hero.component';
import { TestimonialsComponent } from './views/index/testimonials/testimonials.component';
import { TestimonyComponent } from './views/index/testimonials/testimony/testimony.component';
import { ContactComponent } from './views/contact/contact.component';

@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        FooterComponent, 
        IndexComponent, 
        ClassesComponent, 
        CoachesComponent, 
        MembershipsComponent, 
        TestimoniesComponent, 
        SignComponent, RegisterComponent, LoginComponent, StudentComponent, PrivacyComponent, TermsComponent, ModalsComponent, ModalsSectionComponent, GearComponent, HeroComponent, TestimonialsComponent, TestimonyComponent, ContactComponent
    ],

    imports: [
        BrowserModule, 
        AppRoutingModule, 
        NgxSplideModule 
    ],
    providers: [],
    
    bootstrap: [AppComponent]
})
export class AppModule {}
