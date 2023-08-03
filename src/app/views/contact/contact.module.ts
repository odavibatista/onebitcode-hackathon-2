import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ContactRoutingModule } from './contact-routing.module'
import { MessageComponent } from './message/message.component'

@NgModule({
    declarations: [MessageComponent],
    imports: [CommonModule, ContactRoutingModule]
})
export class ContactModule {}
