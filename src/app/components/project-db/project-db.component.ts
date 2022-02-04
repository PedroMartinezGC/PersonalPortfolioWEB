import { Component, OnInit, Input } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from '../../services/project.service';

@Component({
  selector: 'app-project-db',
  templateUrl: './project-db.component.html',
  styleUrls: ['./project-db.component.css']
})
export class ProjectDBComponent implements OnInit {

	public images: any[];
  public title: string;
  public langs: string[];

  	constructor(private photoService: PhotoService){
      this.langs = ["Angular", "NodeJS", "MongoDB", "Postman", "Robo3T"];
      this.title = "Application for upload and modify projects in a MongoDB Atlas database from an API";
    }

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

  	ngOnInit(): void{
  		this.photoService.getImagesPersonalPortfolioDB().then(images => this.images = images);
  	}

  	@Input() showIndicators: boolean;
    @Input() changeItemOnIndicatorHover: boolean;
    @Input() showIndicatorsOnItem: boolean;
    @Input() indicatorsPosition: boolean;
    @Input() showItemNavigators: boolean;
    @Input() circular: boolean;

    //@Input() numVisible: number = 3;

}
