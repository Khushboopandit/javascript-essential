    let person = [
    { 
            firstName: "Abel",
            lastName: "Reuben",
            age: 54,
            skills: ['run', 'jump', 'swim', 'dance'],
            gender: "male",
            married: true
        },
        { 
            firstName: "Djilas", 
            lastName: "Milovan",
            age: 23,
            skills: ['run', 'jump', 'dance'],
            gender: "male",
            married: false
        },
        { 
            firstName: "Sapna",
            lastName: "Choudhary",
            age: 14,
            skills: ['run', 'jump', 'swim', 'dance'],
            gender: "female",
            married: true,

        },
        { 
            firstName: "Harris", 
            lastName: "Sam",
            age: 34,
            skills: ['run', 'jump', 'swim'],
            gender: "male",
            married: true,
            children: {
                "Harris":{ firstName: "Harris", 
                        lastName: "Sam",
                        age: 34,
                        skills: ['run', 'jump', 'swim'],
                        gender: "male",
                        married: true,
                        }
                    }
        },
        { 
            firstName: "Naina",
            lastName: "Singh",
            age: 20,
            skills: ['run', 'swim', 'dance'],
            gender: "female",
            married: false
        },
        { 
            firstName: "kali",
            lastName: "jeshwal",
            age: 68,
            skills: ['run', 'swim', 'dance'],
            gender: "male",
            married: true,
            children:{
                "Parse":{
                        firstName: "Parse", 
                        lastName: "Sam",
                        age: 23,
                        skills: ['dance', 'jump', 'swim'],
                        gender: "male",
                        married: true,
                    },
                "Karish":{
                        firstName: "Karishna", 
                        lastName: "Sam",
                        age: 30,
                        skills: ['run', 'jump', 'swim'],
                        gender: "female",
                        married: false,
                    }
                }
                    
        },
        { 
            firstName: "Dikshit", 
            lastName: "Malhotra",
            age: 33,
            skills: ['run', 'jump', 'dance'],
            gender: "male",
            married: false
        },
    { 
        firstName: "Nikita",
        lastName: "Choudhary",
        age: 14,
        skills: ['run', 'jump', 'dance'],
        gender: "female",
        married: false,
        children: {
            "Anushka":{ firstName: "Anushka", 
                    lastName: "kushwah",
                    age: 22,
                    skills: ['run', 'jump', 'swim'],
                    gender: "female",
                    married: false,
                    }
                }
    },
    { 
        firstName: "Hariyom", 
        lastName: "Singh",
        age: 24,
        skills: ['jump', 'swim'],
        gender: "male",
        married: true,
        children: {
            "Piyush":{ firstName: "Piyush", 
                    lastName: "kushwah",
                    age: 34,
                    skills: ['run', 'jump', 'swim'],
                    gender: "male",
                    married: true,
                    }
                }
    },
    { 
        firstName: "Tina",
        lastName: "Saini",
        age: 19,
        skills: ['run'],
        gender: "female",
        married: false
    }
]   

//1 
//console.log(person.filter(persons => persons.age < 30 && persons.skills.indexOf("run")>-1 && persons.skills.indexOf("swim")>-1))

// 2
// var childrenData = []
// for (let i = 0; i < person.length; i++){
//     if (person[i].children != undefined){
//         var childrenName = Object.keys(person[i].children)
//         for (let j = 0; j < childrenName.length; j++){
//             if (person[i].children[childrenName[j]].skills.indexOf("dance")> -1 || person[i].children[childrenName[j]].skills.indexOf("swim")> -1){
//                 childrenData.push(person[i].children[childrenName[j]])
//             }
//         }
//     }
// }

// childrenData.sort(function(a,b){
//     return a.age - b.age
// })

// console.log(childrenData)

// 3
// let arrayOfPerson = []
// for (let i = 0; i < person.length; i++){
//     if (person[i].children != undefined){
//         var childrenName = Object.keys(person[i].children)
//         for (let j = 0; j < childrenName.length; j++){
//             arrayOfPerson.push(person[i].children[childrenName[j]])
//         }
//         delete person[i]["children"]
//         arrayOfPerson.push(person[i])
//     }else{
//         arrayOfPerson.push(person[i])
//     }
// }
// console.log(arrayOfPerson)


// 4
// for (let i = 0; i < person.length; i++){
//     if (person[i].children != undefined){
//         var childrenName = Object.keys(person[i].children)
//         for (let j = 0; j < childrenName.length; j++){
//             if (person[i].children[childrenName[j]].gender === "female" && person[i].children[childrenName[j]].married != true){
//                 console.log(person[i].children[childrenName[j]])
//             }
//         }
//     }
// }

//5 
//  console.log(person.filter(persons=> persons.skills.indexOf("jump")>-1 && persons.married === true))

// 6
// for (let i = 0; i < person.length; i++){
//     if (person[i].children != undefined){
//         var childrenName = Object.keys(person[i].children)
//         for (let j = 0; j < childrenName.length; j++){
//             if (person[i].lastName.indexOf("j")>-1 && person[i].children[childrenName[j]].married != false){
//                 console.log(person[i].children[childrenName[j]])
//             }
//         }
//     }
// }


// 7,8

// for (let i = 0; i<person.length; i++){
//     let personName = {}
//     personName["first"] = person[i]["firstName"]
//     personName["last"] = person[i]["lastName"]
//     person[i]["name"] = personName
//     delete person[i]["firstName"]
//     delete person[i]["lastName"]
//     if (person[i].children != undefined){
//         var childrenName = Object.keys(person[i].children)
//         for (let j = 0; j < childrenName.length; j++){
//             childName = {}
//             childName["first"] = person[i].children[childrenName[j]]["firstName"]
//             childName["last"] = person[i].children[childrenName[j]]["lastName"]
//             person[i].children[childrenName[j]]["name"] = childName
//             delete person[i].children[childrenName[j]]["firstName"]
//             delete person[i].children[childrenName[j]]["lastName"]
//         }
//     }
//     console.log(person)
// }


// 9

// let arrayOfChildren = []
// for (let i = 0; i < person.length; i++){
//     if (person[i].children != undefined){
//         var childrenName = Object.keys(person[i].children)
//         for (let j = 0; j < childrenName.length; j++){
//             arrayOfChildren.push(person[i].children[childrenName[j]])
//         }
//     }
// }
// console.log(arrayOfChildren)