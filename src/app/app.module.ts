import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/common/header/header.component'
import { FooterComponent } from './components/common/footer/footer.component'
import { IndexComponent } from './views/index/index.component'

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent, IndexComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
