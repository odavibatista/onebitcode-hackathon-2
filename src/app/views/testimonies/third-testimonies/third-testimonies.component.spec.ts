import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ThirdTestimoniesComponent } from './third-testimonies.component'

describe('ThirdTestimoniesComponent', () => {
    let component: ThirdTestimoniesComponent
    let fixture: ComponentFixture<ThirdTestimoniesComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ThirdTestimoniesComponent]
        })
        fixture = TestBed.createComponent(ThirdTestimoniesComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
