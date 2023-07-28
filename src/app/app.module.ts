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
import { FaqComponent } from './views/faq/faq.component';
import { SignComponent } from './views/sign/sign.component';
import { RegisterComponent } from './views/sign/register/register.component';
import { LoginComponent } from './views/sign/login/login.component';
import { StudentComponent } from './views/student/student.component';
import { PrivacyComponent } from './views/privacy/privacy.component';
import { TermsComponent } from './views/terms/terms.component'

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
        FaqComponent, 
        SignComponent, RegisterComponent, LoginComponent, StudentComponent, PrivacyComponent, TermsComponent
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
