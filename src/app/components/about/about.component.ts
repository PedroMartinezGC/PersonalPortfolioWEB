import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	public title: string;
	public subtitle: string;
	public email: string;


  constructor() {
  	this.title = "PEDRO MARTÍNEZ-GRANDE CICUÉNDEZ";
  	this.subtitle = "Mechanical engineer and programmer";
  	this.email = "pedromartinezgcicuendez@gmail.com";
  }

  ngOnInit(): void {
  }

}
