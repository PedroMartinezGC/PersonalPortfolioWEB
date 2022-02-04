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
  public english_level: number;
  public italian_level: number;


  constructor() {
  	this.title = "PEDRO MARTÍNEZ-GRANDE CICUÉNDEZ";
  	this.subtitle = "Mechanical engineer and programmer";
  	this.email = "pedromartinezgcicuendez@gmail.com";
    this.angular_value = 60;
    this.js_value = 75;
    this.csharp_value = 45;
    this.english_level = 50;
    this.italian_level = 50;
  }

  ngOnInit(): void {
  }

}
