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
  public angular_value: number;
  public js_value: number;
  public csharp_value: number;


  constructor() {
  	this.title = "PEDRO MARTÍNEZ-GRANDE CICUÉNDEZ";
  	this.subtitle = "Mechanical engineer and programmer";
  	this.email = "pedromartinezgcicuendez@gmail.com";
    this.angular_value = 60;
    this.js_value = 75;
    this.csharp_value = 45;
  }

  ngOnInit(): void {
  }

}
