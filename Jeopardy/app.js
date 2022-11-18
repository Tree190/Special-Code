const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCatagories = [
    {
        genre: "SUBJECT CLASS",
        questions: [
            {
                question: "Who is *VIV CLASS__001__SECTOR A SECTION 1*?",
                answers: ["Mary janes", "Kason Marine"],
                correct: "Kason Marine",
                level: "easy",
            },
            {
                question: "Is *VIV CLASS___429___ SECTOR D* a rotten child?",
                answers: ["yes", "no"],
                correct: "no",
                level: "medium",
            },
            {
                question: "Which subject class escaped. . .",
                answers: ["SUBJECT CLASS___013___ SECTOR A SECTION 24", "SUBJECT CLASS___002___ SECTOR B SECTION 5"],
                correct: "SUBJECT CLASS___013___ SECTOR A SECTION 24",
                level: "hard",
            },

        ]
    },
    {
        genre: "SECTORS", 
        questions: [
            {
                question: "What is *SECTOR A SECTION 3* classified as?",
                answers: ["The Misbehaved", "The Behaved"],
                correct: "The Misbehaved",
                level: "easy",
            },
            {
                question: "Who caused the fire in *SECTOR F SECTION 1*?",
                answers: ["*___035___SECTOR F SECTION 1*", "*___003___SECTOR F SECTION 1*"],
                correct: "*___035___SECTOR F SECTION 1*",
                level: "medium",
            },
            {
                question: "which sector do new subject classes go to?",
                answers: ["SECTOR A SECTION 1", "SECTOR *VIV*"],
                correct: "SECTOR *VIV*",
                level: "hard",
            },
        ]
    },
    {
        genre: "VIV",
        questions: [
            {
                question: "*FILE NOT FOUND*",
                answers: ["Yes", "No"],
                correct: "No",
                level: "easy",
            },
            {
                question: "Who is Mamma?",
                answers: ["[  ]", "[   ]"],
                correct: "[   ]",
                level: "medium",
            },
            {
                question: "What is your rating for VIV",
                answers: ["0/5", "5/5"],
                correct: "5/5",
                level: "hard",
            },
        ]
    },
    {
        genre: "THE WRONG DOING",
        questions: [
            {
                question: "What did *VIV CLASS___031___SECTOR D SECTION 5* do?",
                answers: ["Broke rule 42", "Broke rule 1"],
                correct: "Broke rule 1",
                level: "easy",
            },
            {
                question: "Where did we catch and put *NAME LOST*?",
                answers: ["Cafeteria hall, Dungon", "Mama's Room, Dungon"],
                correct: "Mamma's room, Dungon",
                level: "medium",
            },
            {
                question: "What was *SUBJECT CLASS___001___SECTOR A SECTION 1* put in for",
                answers: ["Mary janes", "Kason Marine"],
                correct: "Kason Marine",
                level: "hard",
            },
        ]
    },
    {
        genre: "RULES",
        questions: [
            {
                question: "What is rule 45?",
                answers: ["Never speak unless you are spoken to", "Everyone is your family, so treat them like it."],
                correct: "Everyone is your family, so treat them like it.",
                level: "easy",
            },
            {
                question: "What is rule 8's strike 2?",
                answers: ["youll be sent to the dungon", "Mamma will have a , talk, with you"],
                correct: "Kason Marine",
                level: "medium",
            },
            {
                question: "Who broke the most important rule in the handbook?",
                answers: ["Mary janes", "Vivian Coleman"],
                correct: "Vivian Coleman",
                level: "hard",
            },
        ]
    }
]

function addCategory(category) {
    const column = document.createElement('div')
    column.classList.add('genre-title')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML = category.genre

    column.appendChild(genreTitle)
    game.append(column)

    category.questions.forEach(question => {
         const card = document.createElement('div')
         card.classlist.add('card')
         column.append(card)

         if (question.level === 'easy') {
            card.innerHTML = 100
         }
         if (question.level === 'medium') {
            card.innerHTML = 200
         }
         if (question.level === 'hard') {
            card.innerHTML = 300
         }

    })

}

jeopardyCatagories.forEach(category => addCategory(category))








// 21:00 time stamp - jeopardy
//8:06 - img