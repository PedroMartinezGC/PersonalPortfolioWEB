import { Component, OnInit, Input } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from '../../services/project.service';

@Component({
  selector: 'app-projectweb-js',
  templateUrl: './projectweb-js.component.html',
  styleUrls: ['./projectweb-js.component.css']
})
export class ProjectwebJSComponent implements OnInit {

	public images: any[];
  public title: string;
  public langs: string[];

  	constructor(private photoService: PhotoService){
      this.langs = ["JavaScript", "JQuery", "JQuery UI"];
      this.title = "Dynamic web (JavaScript + JQuery UI)";
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
  		this.photoService.getImages().then(images => this.images = images);
  	}

  	@Input() showIndicators: boolean;
    @Input() changeItemOnIndicatorHover: boolean;
    @Input() showIndicatorsOnItem: boolean;
    @Input() indicatorsPosition: boolean;
    @Input() showItemNavigators: boolean;
    @Input() circular: boolean;

    //@Input() numVisible: number = 3;

}
