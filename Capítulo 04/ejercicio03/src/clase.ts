//Agregue el tipo a las propiedades, parámetros y métodos
// ssn: number
// firstName y lastName: string

/* Inicio */
class Person {
    ssn:Number;
    firstName:String;
    lastName:String;

    constructor(ssn:Number, firstName:String, lastName:String) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
/* Fin */

let claseInstanciacion = () => {

	//Instancie la clase persona en la variable person 

	/* Inicio */
	let person:Person = new Person(171280926,'John','Doe')
	/* Fin */

	return person
}

console.log(claseInstanciacion())

export {claseInstanciacion}