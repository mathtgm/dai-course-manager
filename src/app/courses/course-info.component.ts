import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: 'course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
    
    courseId: number = 0;

    constructor(private activatedRoute: ActivatedRoute) {
        this.courseId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    }

    ngOnInit(): void {
        
    }
}