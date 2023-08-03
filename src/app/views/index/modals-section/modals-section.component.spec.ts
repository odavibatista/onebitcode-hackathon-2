import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ModalsSectionComponent } from './modals-section.component'

describe('ModalsSectionComponent', () => {
    let component: ModalsSectionComponent
    let fixture: ComponentFixture<ModalsSectionComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ModalsSectionComponent]
        })
        fixture = TestBed.createComponent(ModalsSectionComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
