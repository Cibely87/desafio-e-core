const readline = require('readline-sync')

const mainMenu = `
======== MAIN MENU ========

a > Add person
l > List people
q > Quit
Type a option:
`

const listMenu = `
======== LIST PEOPLE BY... ========

a > Age
n > Name
q > Quit
Type a option:
`

const people = []

const getCategory = (age) => {
    if (age >= 0 && age <= 12) {
        return "Child"
    }
    if (age >= 13 && age <= 19) {
        return "Teenager"
    }
    if (age >= 20 && age <= 64) {
        return "Adult"
    }

    return "Old-aged"
}

console.log(mainMenu)
readline.promptCLLoop({
    a: () => {
        const name = readline.question("Name: ")
        const age = readline.question("Age: ")
        const category = getCategory(age)
        people.push({ name, age, category })
        console.log(mainMenu)
    },
    l: () => {
        console.log(listMenu)
        readline.promptCLLoop({
            a: () => {
                const sorted = people.sort(
                    (personA, personB) => personA.age - personB.age
                )
                console.table(sorted)
                console.log(listMenu)
            },
            n: () => {
                const sorted = people.sort(
                    (a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    }
                )
                console.table(sorted)
                console.log(listMenu)
            },
            q: () => true
        })
        console.log(mainMenu)
    },
    q: () => true
})
