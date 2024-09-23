//ESEMPIO NON DINAMICO
// class User {
//     constructor(_firstName, _lastName, _age, _location) {
//       this.firstName = _firstName;
//       this._lastName = _lastName;
//       this.age = _age;
//       this.location = _location;
//     }
//     confrontoEtà(User) {
//       if (personOne.age > User.age) {
//         return personOne.firstName + " è più anziano di " + User.firstName;
//       } else if (personOne.age < User.age) {
//         return personOne.firstName + " è più giovane di " + User.firstName;
//       } else {
//         return personOne.firstName + " ha la stessa età di " + User.firstName;
//       }
//     }
//   }

//   const personOne = new User("Mario", "Giordano", 28, "Roma");
//   const personeTwo = new User("Giovanni", "Rossi", 27, "Firenze");

//   console.log(personOne.confrontoEtà(personeTwo));

//ESEMPIO DINAMICO
let registroPersone = [];

let etaPiuAnzina = 0;
let nomePiuAnziano = "";

class SchedaPersona {
  constructor(_firstName, _lastName, _age, _address, _email) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = Number(_age);
    this.address = _address;
    this.email = _email;
  }
  anzianita(altraPersona) {
    for (let i = 0; i < altraPersona.length; i++) {
      if (altraPersona[i].age > etaPiuAnzina) {
        etaPiuAnzina = altraPersona[i].age;
        nomePiuAnziano = altraPersona[i].firstName;
      }
    }

    console.log(`L'utente più anziano è  ${nomePiuAnziano} con età ${etaPiuAnzina} .`);
  }
}

const persona1 = new SchedaPersona("luigi", "Manzi", "20", "Via Ponte", "Mario@gmail.com");

const persona2 = new SchedaPersona("Paolo", "Ferrari", "30", "Via Ponte", "Mario@gmail.com");

const persona3 = new SchedaPersona("Marco", "Ferrari", "50", "Via Ponte", "Mario@gmail.com");

const persona4 = new SchedaPersona("Giovanni", "Ferrari", "79", "Via Ponte", "Mario@gmail.com");

registroPersone.push(persona1, persona2, persona3, persona4);
console.log(registroPersone);

persona1.anzianita(registroPersone);

//SECONDO ES
const myForm = document.querySelector("form");

let section = document.querySelector("section");

let textNomeAnimale = document.querySelector(".text-nomeAnimale");

let textNomePadrone = document.querySelector(".text-nomePadrone");

let specieAnimale = document.querySelector(".specie-animale");

let razzaAnimali = document.querySelector(".razza-animale");

let nomeAnimale = "";

let nomePadrone = "";

let specie = "";

let razzaanimale = "";

let arrayPet = [];

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let ul = document.createElement("ul");

  nomeAnimale = textNomeAnimale.value;
  let li1 = document.createElement("li");
  li1.innerText = textNomeAnimale.value;

  nomePadrone = textNomePadrone.value;
  let li2 = document.createElement("li");
  li2.innerText = textNomePadrone.value;

  specie = specieAnimale.value;
  let li3 = document.createElement("li");
  li3.innerText = specieAnimale.value;

  razzaanimale = razzaAnimali.value;
  let li4 = document.createElement("li");
  li4.innerText = razzaAnimali.value;

  ul.append(li1, li2, li3, li4);
  section.appendChild(ul);

  class SchedaPet {
    constructor(_nomeAnimale, _nomePadrone, _specie, _razzaanimale) {
      this.nameAnimale = _nomeAnimale;
      this.namePadrone = _nomePadrone;
      this.specieAnimale = _specie;
      this.razzaAnimale = _razzaanimale;
    }
    cicloarray = function (schedaAnimale) {
      for (let i = 0; i < schedaAnimale.length; i++) {
        //console.log(`Animali nel registro: ${schedaAnimale.length}`);
        // console.log(`Padrone dell'animale ${i + 1}: ${schedaAnimale[i].namePadrone}`);

        for (let j = i + 1; j < schedaAnimale.length; j++) {
          if (schedaAnimale[i].namePadrone === schedaAnimale[j].namePadrone) {
            li2.style.color = "red";
            console.log("stesso padrone per più animali");
          }
        }
      }
    };
  }

  let pet = new SchedaPet(nomeAnimale, nomePadrone, specie, razzaanimale);
  arrayPet.push(pet);

  pet.cicloarray(arrayPet);
});
