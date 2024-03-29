const prompt = require("prompt-sync")({ sigint: true });

// ask to enter the max number of class 
let classSize = prompt("Enter the maximum number of students in each class, please: ");
// classSize = parseInt(classSize);


const students = [
    { name: "Jean-Luc Garza", score: 24 },
    { name: "Teddy Munoz", score: 79 },
    { name: "Georgia Ali", score: 17 },
    { name: "Vicky Calhoun", score: 8 },
    { name: "Awais Weaver", score: 65 },
    { name: "Athena Kline", score: 52 },
    { name: "Zacharia Whitaker", score: 38 },
    { name: "Clarice Davenport", score: 99 },
    { name: "Viktoria Flynn", score: 84 },
    { name: "Ianis Crossley", score: 20 },
    { name: "Johnnie Owens", score: 74 },
    { name: "Emily-Rose Erickson", score: 33 },
    { name: "Adeel Nieves", score: 100 },
    { name: "Dustin Villegas", score: 98 },
    { name: "Maxine Hughes", score: 65 },
    { name: "Bilaal Harding", score: 79 },
    { name: "Maddie Ventura", score: 71 },
    { name: "Leroy Rees", score: 44 },
    { name: "Wanda Frank", score: 73 },
    { name: "Margaux Herbert", score: 80 },
    { name: "Ali Rios", score: 70 },
    { name: "Nigel Santiago", score: 25 },
    { name: "Markus Greene", score: 78 },
    { name: "Harlan Parrish", score: 97 },
    { name: "Baran Davidson", score: 43 },
    { name: "Seth Rodriguezh", score: 67 },
    { name: "Diego Mayer", score: 100 },
]



class HashTable {
    constructor(classSize) {
      this.classSize = classSize;
      this.classes = { A: [], B: [], C: [], D: [], Other: [] }
    }


    hash = (student) => {
    //   let hashCode = 0;
      if(student.score >= 90) return "A"

      else if(student.score >= 80) return "B"

      else if(student.score >= 70) return "C"

      else if(student.score >= 60) return "D"

    else return "Other"

    };

    insert = (student) => {
        let classRoom = this.hash(student);
        if (this.classes[classRoom].length < this.classSize
            ){
            this.classes[classRoom].push(student)
        }
        else { console.log("No more classRooms");}
    }

}


let table = new HashTable(classSize);


students.forEach(student => table.insert(student))
console.log(table.classes);

