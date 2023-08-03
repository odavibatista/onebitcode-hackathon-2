import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SingleCoachComponent } from './single-coach.component'

describe('SingleCoachComponent', () => {
    let component: SingleCoachComponent
    let fixture: ComponentFixture<SingleCoachComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SingleCoachComponent]
        })
        fixture = TestBed.createComponent(SingleCoachComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
