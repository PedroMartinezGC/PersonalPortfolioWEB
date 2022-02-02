import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	public title: string;
	public phone: string;
	public github: string;
	public web: string;
	public email: string;

  constructor(){
  	this.title = "Contact";
  	this.phone = "+34 658 05 97 50";
  	this.github = "PedroMartinezGC";
  	this.web = "www.fordeterminate.com";
  	this.email = "pedromartinezgcicuendez@gmail.com";
  }

  ngOnInit(): void {
  }

}
