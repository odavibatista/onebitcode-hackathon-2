import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

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
import { SignComponent } from './views/sign/sign.component'

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent, IndexComponent, ClassesComponent, CoachesComponent, MembershipsComponent, TestimoniesComponent, FaqComponent, SignComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
