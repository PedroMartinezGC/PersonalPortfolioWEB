/* Este es el modelo. Un modelo se usa sólo para crear el formato genérico de un objeto,
en este caso este es el modelo de proyecto que tenemos, en el que cada proyecto de la 
base de datos, tiene estos atributos, y por lo tanto siguen el mismo modelo todos los 
proyectos. */

export class Project{
	constructor(
		public _id: string,
		public name: string,
		public description: string,
		public category: string,
		public year: number,
		public langs: string,
		public image: string
	){}
}