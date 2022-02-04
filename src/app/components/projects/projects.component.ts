import { Component, OnInit, Input } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from '../../services/project.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

    public images: any[];

    constructor(private photoService: PhotoService){}

    responsiveOptions:any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        }/*,
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }*/
    ];

    ngOnInit(): void {
    }


    scrollTop(){
        window.scrollTo(0,0);
    }
    


}
