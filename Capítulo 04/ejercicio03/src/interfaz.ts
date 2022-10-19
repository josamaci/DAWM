interface Person {
    ssn: string;
    firstName: string;
    lastName: string; 
    age: number;
    married: boolean;   
}

let interfazPropiedades = () => {

	//Defina la variable person de acuerdo con la interfaz Person
    
	/* Inicio */
	let person: Person
    person = {ssn:'171-28-0926', firstName: "John",
    lastName: "Doe",
    age: 30,
    married: false}
	/* Fin */

	return person
}

console.log(interfazPropiedades())

export {interfazPropiedades}