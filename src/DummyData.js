const students = {
    REG1001: {
        name: "Arnav Upadhyay",
        syllabus: {
            "Mathematics": [
                { unit: "Unit 1: Algebra", description: "Introduction to algebraic expressions, equations, inequalities, polynomials, and quadratic functions." },
                { unit: "Unit 2: Calculus", description: "Covers limits, derivatives, integrals, and applications of differentiation and integration." },
                { unit: "Unit 3: Probability", description: "Fundamentals of probability theory, random variables, distributions, and basic statistics." },
                { unit: "Unit 4: Matrices", description: "Introduction to matrices, types of matrices, matrix operations, and determinants." },
                { unit: "Unit 5: Differential Equations", description: "Solving first and higher order differential equations and their applications." }
            ],
            "Physics": [
                { unit: "Unit 1: Mechanics", description: "Study of motion, forces, energy, momentum, and rotational dynamics." },
                { unit: "Unit 2: Thermodynamics", description: "Concepts of heat, work, laws of thermodynamics, and heat engines." },
                { unit: "Unit 3: Optics", description: "Introduction to reflection, refraction, lenses, and optical instruments." },
                { unit: "Unit 4: Electromagnetism", description: "Exploration of electric fields, magnetic fields, electromagnetic waves, and circuits." },
                { unit: "Unit 5: Quantum Physics", description: "Basics of quantum theory, atomic models, and principles like wave-particle duality." }
            ],
            "Chemistry": [
                { unit: "Unit 1: Organic Chemistry", description: "Introduction to organic compounds, functional groups, and reaction mechanisms." },
                { unit: "Unit 2: Inorganic Chemistry", description: "Study of periodic table elements, bonding, and coordination compounds." },
                { unit: "Unit 3: Physical Chemistry", description: "Concepts of chemical kinetics, equilibrium, and thermodynamics in chemistry." },
                { unit: "Unit 4: Biochemistry", description: "Overview of biomolecules, enzymes, metabolism, and biochemical pathways." },
                { unit: "Unit 5: Environmental Chemistry", description: "Environmental pollution, green chemistry, and chemical waste management." }
            ],
            "English": [
                { unit: "Unit 1: Grammar", description: "Detailed review of parts of speech, tenses, clauses, and sentence structure." },
                { unit: "Unit 2: Writing Skills", description: "Essay writing, letter writing, summarizing, and note-taking techniques." },
                { unit: "Unit 3: Literature", description: "Analysis of prose, poetry, and drama from classic and contemporary authors." },
                { unit: "Unit 4: Comprehension", description: "Reading comprehension techniques, inference skills, and critical analysis." },
                { unit: "Unit 5: Communication", description: "Effective verbal and non-verbal communication, presentations, and debates." }
            ],
            "Computer Science": [
                { unit: "Unit 1: Programming Basics", description: "Introduction to programming languages, basic syntax, and control structures." },
                { unit: "Unit 2: Data Structures", description: "Arrays, linked lists, stacks, queues, trees, and graphs." },
                { unit: "Unit 3: Algorithms", description: "Sorting, searching, recursion, and algorithm complexity analysis." },
                { unit: "Unit 4: Databases", description: "Introduction to databases, SQL queries, normalization, and transactions." },
                { unit: "Unit 5: Networking", description: "Network models, protocols, IP addressing, and basic network security." }
            ]
        },

        timetable: {
            Monday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Physics", room: "102B", time: "10:00-11:00" },
                { subject: "Chemistry", room: "103C", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Tuesday: [
                { subject: "Physics", room: "102B", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "English", room: "104D", time: "11:15-12:15" },
                { subject: "Chemistry", room: "103C", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Wednesday: [
                { subject: "Computer Science", room: "105E", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ],
            Thursday: [
                { subject: "English", room: "104D", time: "9:00-10:00" },
                { subject: "Chemistry", room: "103C", time: "10:00-11:00" },
                { subject: "Mathematics", room: "101A", time: "11:15-12:15" },
                { subject: "Computer Science", room: "105E", time: "1:00-2:00" },
                { subject: "Physics", room: "102B", time: "2:00-3:00" }
            ],
            Friday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Computer Science", room: "105E", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ]
        },    

        exams: [
            { subject: "Mathematics", date: "2025-03-10", time: "10:00 AM", room: "Exam Hall A" },
            { subject: "Physics", date: "2025-03-12", time: "10:00 AM", room: "Exam Hall B" },
            { subject: "Chemistry", date: "2025-03-14", time: "10:00 AM", room: "Exam Hall C" },
            { subject: "English", date: "2025-03-16", time: "10:00 AM", room: "Exam Hall D" },
            { subject: "Computer Science", date: "2025-03-18", time: "10:00 AM", room: "Exam Hall E" }
        ]
    },

    REG1002: {
        name: "Alice Johnson",
        syllabus: {
            "Mathematics": [
                { unit: "Unit 1: Algebra", description: "Introduction to algebraic expressions, equations, inequalities, polynomials, and quadratic functions." },
                { unit: "Unit 2: Calculus", description: "Covers limits, derivatives, integrals, and applications of differentiation and integration." },
                { unit: "Unit 3: Probability", description: "Fundamentals of probability theory, random variables, distributions, and basic statistics." },
                { unit: "Unit 4: Matrices", description: "Introduction to matrices, types of matrices, matrix operations, and determinants." },
                { unit: "Unit 5: Differential Equations", description: "Solving first and higher order differential equations and their applications." }
            ],
            "Physics": [
                { unit: "Unit 1: Mechanics", description: "Study of motion, forces, energy, momentum, and rotational dynamics." },
                { unit: "Unit 2: Thermodynamics", description: "Concepts of heat, work, laws of thermodynamics, and heat engines." },
                { unit: "Unit 3: Optics", description: "Introduction to reflection, refraction, lenses, and optical instruments." },
                { unit: "Unit 4: Electromagnetism", description: "Exploration of electric fields, magnetic fields, electromagnetic waves, and circuits." },
                { unit: "Unit 5: Quantum Physics", description: "Basics of quantum theory, atomic models, and principles like wave-particle duality." }
            ],
            "Chemistry": [
                { unit: "Unit 1: Organic Chemistry", description: "Introduction to organic compounds, functional groups, and reaction mechanisms." },
                { unit: "Unit 2: Inorganic Chemistry", description: "Study of periodic table elements, bonding, and coordination compounds." },
                { unit: "Unit 3: Physical Chemistry", description: "Concepts of chemical kinetics, equilibrium, and thermodynamics in chemistry." },
                { unit: "Unit 4: Biochemistry", description: "Overview of biomolecules, enzymes, metabolism, and biochemical pathways." },
                { unit: "Unit 5: Environmental Chemistry", description: "Environmental pollution, green chemistry, and chemical waste management." }
            ],
            "English": [
                { unit: "Unit 1: Grammar", description: "Detailed review of parts of speech, tenses, clauses, and sentence structure." },
                { unit: "Unit 2: Writing Skills", description: "Essay writing, letter writing, summarizing, and note-taking techniques." },
                { unit: "Unit 3: Literature", description: "Analysis of prose, poetry, and drama from classic and contemporary authors." },
                { unit: "Unit 4: Comprehension", description: "Reading comprehension techniques, inference skills, and critical analysis." },
                { unit: "Unit 5: Communication", description: "Effective verbal and non-verbal communication, presentations, and debates." }
            ],
            "Computer Science": [
                { unit: "Unit 1: Programming Basics", description: "Introduction to programming languages, basic syntax, and control structures." },
                { unit: "Unit 2: Data Structures", description: "Arrays, linked lists, stacks, queues, trees, and graphs." },
                { unit: "Unit 3: Algorithms", description: "Sorting, searching, recursion, and algorithm complexity analysis." },
                { unit: "Unit 4: Databases", description: "Introduction to databases, SQL queries, normalization, and transactions." },
                { unit: "Unit 5: Networking", description: "Network models, protocols, IP addressing, and basic network security." }
            ]
        },

        timetable: {
            Monday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Physics", room: "102B", time: "10:00-11:00" },
                { subject: "Chemistry", room: "103C", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Tuesday: [
                { subject: "Physics", room: "102B", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "English", room: "104D", time: "11:15-12:15" },
                { subject: "Chemistry", room: "103C", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Wednesday: [
                { subject: "Computer Science", room: "105E", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ],
            Thursday: [
                { subject: "English", room: "104D", time: "9:00-10:00" },
                { subject: "Chemistry", room: "103C", time: "10:00-11:00" },
                { subject: "Mathematics", room: "101A", time: "11:15-12:15" },
                { subject: "Computer Science", room: "105E", time: "1:00-2:00" },
                { subject: "Physics", room: "102B", time: "2:00-3:00" }
            ],
            Friday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Computer Science", room: "105E", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ]
        },    

        exams: [
            { subject: "Mathematics", date: "2025-03-10", time: "10:00 AM", room: "Exam Hall A" },
            { subject: "Physics", date: "2025-03-12", time: "10:00 AM", room: "Exam Hall B" },
            { subject: "Chemistry", date: "2025-03-14", time: "10:00 AM", room: "Exam Hall C" },
            { subject: "English", date: "2025-03-16", time: "10:00 AM", room: "Exam Hall D" },
            { subject: "Computer Science", date: "2025-03-18", time: "10:00 AM", room: "Exam Hall E" }
        ]
    },

    REG1003: {
        name: "Kaushik Raj",
        syllabus: {
            "Mathematics": [
                { unit: "Unit 1: Algebra", description: "Introduction to algebraic expressions, equations, inequalities, polynomials, and quadratic functions." },
                { unit: "Unit 2: Calculus", description: "Covers limits, derivatives, integrals, and applications of differentiation and integration." },
                { unit: "Unit 3: Probability", description: "Fundamentals of probability theory, random variables, distributions, and basic statistics." },
                { unit: "Unit 4: Matrices", description: "Introduction to matrices, types of matrices, matrix operations, and determinants." },
                { unit: "Unit 5: Differential Equations", description: "Solving first and higher order differential equations and their applications." }
            ],
            "Physics": [
                { unit: "Unit 1: Mechanics", description: "Study of motion, forces, energy, momentum, and rotational dynamics." },
                { unit: "Unit 2: Thermodynamics", description: "Concepts of heat, work, laws of thermodynamics, and heat engines." },
                { unit: "Unit 3: Optics", description: "Introduction to reflection, refraction, lenses, and optical instruments." },
                { unit: "Unit 4: Electromagnetism", description: "Exploration of electric fields, magnetic fields, electromagnetic waves, and circuits." },
                { unit: "Unit 5: Quantum Physics", description: "Basics of quantum theory, atomic models, and principles like wave-particle duality." }
            ],
            "Chemistry": [
                { unit: "Unit 1: Organic Chemistry", description: "Introduction to organic compounds, functional groups, and reaction mechanisms." },
                { unit: "Unit 2: Inorganic Chemistry", description: "Study of periodic table elements, bonding, and coordination compounds." },
                { unit: "Unit 3: Physical Chemistry", description: "Concepts of chemical kinetics, equilibrium, and thermodynamics in chemistry." },
                { unit: "Unit 4: Biochemistry", description: "Overview of biomolecules, enzymes, metabolism, and biochemical pathways." },
                { unit: "Unit 5: Environmental Chemistry", description: "Environmental pollution, green chemistry, and chemical waste management." }
            ],
            "English": [
                { unit: "Unit 1: Grammar", description: "Detailed review of parts of speech, tenses, clauses, and sentence structure." },
                { unit: "Unit 2: Writing Skills", description: "Essay writing, letter writing, summarizing, and note-taking techniques." },
                { unit: "Unit 3: Literature", description: "Analysis of prose, poetry, and drama from classic and contemporary authors." },
                { unit: "Unit 4: Comprehension", description: "Reading comprehension techniques, inference skills, and critical analysis." },
                { unit: "Unit 5: Communication", description: "Effective verbal and non-verbal communication, presentations, and debates." }
            ],
            "Computer Science": [
                { unit: "Unit 1: Programming Basics", description: "Introduction to programming languages, basic syntax, and control structures." },
                { unit: "Unit 2: Data Structures", description: "Arrays, linked lists, stacks, queues, trees, and graphs." },
                { unit: "Unit 3: Algorithms", description: "Sorting, searching, recursion, and algorithm complexity analysis." },
                { unit: "Unit 4: Databases", description: "Introduction to databases, SQL queries, normalization, and transactions." },
                { unit: "Unit 5: Networking", description: "Network models, protocols, IP addressing, and basic network security." }
            ]
        },

        timetable: {
            Monday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Physics", room: "102B", time: "10:00-11:00" },
                { subject: "Chemistry", room: "103C", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Tuesday: [
                { subject: "Physics", room: "102B", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "English", room: "104D", time: "11:15-12:15" },
                { subject: "Chemistry", room: "103C", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Wednesday: [
                { subject: "Computer Science", room: "105E", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ],
            Thursday: [
                { subject: "English", room: "104D", time: "9:00-10:00" },
                { subject: "Chemistry", room: "103C", time: "10:00-11:00" },
                { subject: "Mathematics", room: "101A", time: "11:15-12:15" },
                { subject: "Computer Science", room: "105E", time: "1:00-2:00" },
                { subject: "Physics", room: "102B", time: "2:00-3:00" }
            ],
            Friday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Computer Science", room: "105E", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ]
        },    

        exams: [
            { subject: "Mathematics", date: "2025-03-10", time: "10:00 AM", room: "Exam Hall A" },
            { subject: "Physics", date: "2025-03-12", time: "10:00 AM", room: "Exam Hall B" },
            { subject: "Chemistry", date: "2025-03-14", time: "10:00 AM", room: "Exam Hall C" },
            { subject: "English", date: "2025-03-16", time: "10:00 AM", room: "Exam Hall D" },
            { subject: "Computer Science", date: "2025-03-18", time: "10:00 AM", room: "Exam Hall E" }
        ]
    },

    REG1004: {
        name: "John Doe",
        syllabus: {
            "Mathematics": [
                { unit: "Unit 1: Algebra", description: "Introduction to algebraic expressions, equations, inequalities, polynomials, and quadratic functions." },
                { unit: "Unit 2: Calculus", description: "Covers limits, derivatives, integrals, and applications of differentiation and integration." },
                { unit: "Unit 3: Probability", description: "Fundamentals of probability theory, random variables, distributions, and basic statistics." },
                { unit: "Unit 4: Matrices", description: "Introduction to matrices, types of matrices, matrix operations, and determinants." },
                { unit: "Unit 5: Differential Equations", description: "Solving first and higher order differential equations and their applications." }
            ],
            "Physics": [
                { unit: "Unit 1: Mechanics", description: "Study of motion, forces, energy, momentum, and rotational dynamics." },
                { unit: "Unit 2: Thermodynamics", description: "Concepts of heat, work, laws of thermodynamics, and heat engines." },
                { unit: "Unit 3: Optics", description: "Introduction to reflection, refraction, lenses, and optical instruments." },
                { unit: "Unit 4: Electromagnetism", description: "Exploration of electric fields, magnetic fields, electromagnetic waves, and circuits." },
                { unit: "Unit 5: Quantum Physics", description: "Basics of quantum theory, atomic models, and principles like wave-particle duality." }
            ],
            "Chemistry": [
                { unit: "Unit 1: Organic Chemistry", description: "Introduction to organic compounds, functional groups, and reaction mechanisms." },
                { unit: "Unit 2: Inorganic Chemistry", description: "Study of periodic table elements, bonding, and coordination compounds." },
                { unit: "Unit 3: Physical Chemistry", description: "Concepts of chemical kinetics, equilibrium, and thermodynamics in chemistry." },
                { unit: "Unit 4: Biochemistry", description: "Overview of biomolecules, enzymes, metabolism, and biochemical pathways." },
                { unit: "Unit 5: Environmental Chemistry", description: "Environmental pollution, green chemistry, and chemical waste management." }
            ],
            "English": [
                { unit: "Unit 1: Grammar", description: "Detailed review of parts of speech, tenses, clauses, and sentence structure." },
                { unit: "Unit 2: Writing Skills", description: "Essay writing, letter writing, summarizing, and note-taking techniques." },
                { unit: "Unit 3: Literature", description: "Analysis of prose, poetry, and drama from classic and contemporary authors." },
                { unit: "Unit 4: Comprehension", description: "Reading comprehension techniques, inference skills, and critical analysis." },
                { unit: "Unit 5: Communication", description: "Effective verbal and non-verbal communication, presentations, and debates." }
            ],
            "Computer Science": [
                { unit: "Unit 1: Programming Basics", description: "Introduction to programming languages, basic syntax, and control structures." },
                { unit: "Unit 2: Data Structures", description: "Arrays, linked lists, stacks, queues, trees, and graphs." },
                { unit: "Unit 3: Algorithms", description: "Sorting, searching, recursion, and algorithm complexity analysis." },
                { unit: "Unit 4: Databases", description: "Introduction to databases, SQL queries, normalization, and transactions." },
                { unit: "Unit 5: Networking", description: "Network models, protocols, IP addressing, and basic network security." }
            ]
        },

        timetable: {
            Monday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Physics", room: "102B", time: "10:00-11:00" },
                { subject: "Chemistry", room: "103C", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Tuesday: [
                { subject: "Physics", room: "102B", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "English", room: "104D", time: "11:15-12:15" },
                { subject: "Chemistry", room: "103C", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Wednesday: [
                { subject: "Computer Science", room: "105E", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ],
            Thursday: [
                { subject: "English", room: "104D", time: "9:00-10:00" },
                { subject: "Chemistry", room: "103C", time: "10:00-11:00" },
                { subject: "Mathematics", room: "101A", time: "11:15-12:15" },
                { subject: "Computer Science", room: "105E", time: "1:00-2:00" },
                { subject: "Physics", room: "102B", time: "2:00-3:00" }
            ],
            Friday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Computer Science", room: "105E", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ]
        },    

        exams: [
            { subject: "Mathematics", date: "2025-03-10", time: "10:00 AM", room: "Exam Hall A" },
            { subject: "Physics", date: "2025-03-12", time: "10:00 AM", room: "Exam Hall B" },
            { subject: "Chemistry", date: "2025-03-14", time: "10:00 AM", room: "Exam Hall C" },
            { subject: "English", date: "2025-03-16", time: "10:00 AM", room: "Exam Hall D" },
            { subject: "Computer Science", date: "2025-03-18", time: "10:00 AM", room: "Exam Hall E" }
        ]
    },

    REG1005: {
        name:"Rajesh Kumar",
        syllabus: {
            "Mathematics": [
                { unit: "Unit 1: Algebra", description: "Introduction to algebraic expressions, equations, inequalities, polynomials, and quadratic functions." },
                { unit: "Unit 2: Calculus", description: "Covers limits, derivatives, integrals, and applications of differentiation and integration." },
                { unit: "Unit 3: Probability", description: "Fundamentals of probability theory, random variables, distributions, and basic statistics." },
                { unit: "Unit 4: Matrices", description: "Introduction to matrices, types of matrices, matrix operations, and determinants." },
                { unit: "Unit 5: Differential Equations", description: "Solving first and higher order differential equations and their applications." }
            ],
            "Physics": [
                { unit: "Unit 1: Mechanics", description: "Study of motion, forces, energy, momentum, and rotational dynamics." },
                { unit: "Unit 2: Thermodynamics", description: "Concepts of heat, work, laws of thermodynamics, and heat engines." },
                { unit: "Unit 3: Optics", description: "Introduction to reflection, refraction, lenses, and optical instruments." },
                { unit: "Unit 4: Electromagnetism", description: "Exploration of electric fields, magnetic fields, electromagnetic waves, and circuits." },
                { unit: "Unit 5: Quantum Physics", description: "Basics of quantum theory, atomic models, and principles like wave-particle duality." }
            ],
            "Chemistry": [
                { unit: "Unit 1: Organic Chemistry", description: "Introduction to organic compounds, functional groups, and reaction mechanisms." },
                { unit: "Unit 2: Inorganic Chemistry", description: "Study of periodic table elements, bonding, and coordination compounds." },
                { unit: "Unit 3: Physical Chemistry", description: "Concepts of chemical kinetics, equilibrium, and thermodynamics in chemistry." },
                { unit: "Unit 4: Biochemistry", description: "Overview of biomolecules, enzymes, metabolism, and biochemical pathways." },
                { unit: "Unit 5: Environmental Chemistry", description: "Environmental pollution, green chemistry, and chemical waste management." }
            ],
            "English": [
                { unit: "Unit 1: Grammar", description: "Detailed review of parts of speech, tenses, clauses, and sentence structure." },
                { unit: "Unit 2: Writing Skills", description: "Essay writing, letter writing, summarizing, and note-taking techniques." },
                { unit: "Unit 3: Literature", description: "Analysis of prose, poetry, and drama from classic and contemporary authors." },
                { unit: "Unit 4: Comprehension", description: "Reading comprehension techniques, inference skills, and critical analysis." },
                { unit: "Unit 5: Communication", description: "Effective verbal and non-verbal communication, presentations, and debates." }
            ],
            "Computer Science": [
                { unit: "Unit 1: Programming Basics", description: "Introduction to programming languages, basic syntax, and control structures." },
                { unit: "Unit 2: Data Structures", description: "Arrays, linked lists, stacks, queues, trees, and graphs." },
                { unit: "Unit 3: Algorithms", description: "Sorting, searching, recursion, and algorithm complexity analysis." },
                { unit: "Unit 4: Databases", description: "Introduction to databases, SQL queries, normalization, and transactions." },
                { unit: "Unit 5: Networking", description: "Network models, protocols, IP addressing, and basic network security." }
            ]
        },

        timetable: {
            Monday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Physics", room: "102B", time: "10:00-11:00" },
                { subject: "Chemistry", room: "103C", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Tuesday: [
                { subject: "Physics", room: "102B", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "English", room: "104D", time: "11:15-12:15" },
                { subject: "Chemistry", room: "103C", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Wednesday: [
                { subject: "Computer Science", room: "105E", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ],
            Thursday: [
                { subject: "English", room: "104D", time: "9:00-10:00" },
                { subject: "Chemistry", room: "103C", time: "10:00-11:00" },
                { subject: "Mathematics", room: "101A", time: "11:15-12:15" },
                { subject: "Computer Science", room: "105E", time: "1:00-2:00" },
                { subject: "Physics", room: "102B", time: "2:00-3:00" }
            ],
            Friday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Computer Science", room: "105E", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ]
        },    

        exams: [
            { subject: "Mathematics", date: "2025-03-10", time: "10:00 AM", room: "Exam Hall A" },
            { subject: "Physics", date: "2025-03-12", time: "10:00 AM", room: "Exam Hall B" },
            { subject: "Chemistry", date: "2025-03-14", time: "10:00 AM", room: "Exam Hall C" },
            { subject: "English", date: "2025-03-16", time: "10:00 AM", room: "Exam Hall D" },
            { subject: "Computer Science", date: "2025-03-18", time: "10:00 AM", room: "Exam Hall E" }
        ]
    },

    REG1006: {
        name: "Jane Smith",
        syllabus: {
            "Mathematics": [
                { unit: "Unit 1: Algebra", description: "Introduction to algebraic expressions, equations, inequalities, polynomials, and quadratic functions." },
                { unit: "Unit 2: Calculus", description: "Covers limits, derivatives, integrals, and applications of differentiation and integration." },
                { unit: "Unit 3: Probability", description: "Fundamentals of probability theory, random variables, distributions, and basic statistics." },
                { unit: "Unit 4: Matrices", description: "Introduction to matrices, types of matrices, matrix operations, and determinants." },
                { unit: "Unit 5: Differential Equations", description: "Solving first and higher order differential equations and their applications." }
            ],
            "Physics": [
                { unit: "Unit 1: Mechanics", description: "Study of motion, forces, energy, momentum, and rotational dynamics." },
                { unit: "Unit 2: Thermodynamics", description: "Concepts of heat, work, laws of thermodynamics, and heat engines." },
                { unit: "Unit 3: Optics", description: "Introduction to reflection, refraction, lenses, and optical instruments." },
                { unit: "Unit 4: Electromagnetism", description: "Exploration of electric fields, magnetic fields, electromagnetic waves, and circuits." },
                { unit: "Unit 5: Quantum Physics", description: "Basics of quantum theory, atomic models, and principles like wave-particle duality." }
            ],
            "Chemistry": [
                { unit: "Unit 1: Organic Chemistry", description: "Introduction to organic compounds, functional groups, and reaction mechanisms." },
                { unit: "Unit 2: Inorganic Chemistry", description: "Study of periodic table elements, bonding, and coordination compounds." },
                { unit: "Unit 3: Physical Chemistry", description: "Concepts of chemical kinetics, equilibrium, and thermodynamics in chemistry." },
                { unit: "Unit 4: Biochemistry", description: "Overview of biomolecules, enzymes, metabolism, and biochemical pathways." },
                { unit: "Unit 5: Environmental Chemistry", description: "Environmental pollution, green chemistry, and chemical waste management." }
            ],
            "English": [
                { unit: "Unit 1: Grammar", description: "Detailed review of parts of speech, tenses, clauses, and sentence structure." },
                { unit: "Unit 2: Writing Skills", description: "Essay writing, letter writing, summarizing, and note-taking techniques." },
                { unit: "Unit 3: Literature", description: "Analysis of prose, poetry, and drama from classic and contemporary authors." },
                { unit: "Unit 4: Comprehension", description: "Reading comprehension techniques, inference skills, and critical analysis." },
                { unit: "Unit 5: Communication", description: "Effective verbal and non-verbal communication, presentations, and debates." }
            ],
            "Computer Science": [
                { unit: "Unit 1: Programming Basics", description: "Introduction to programming languages, basic syntax, and control structures." },
                { unit: "Unit 2: Data Structures", description: "Arrays, linked lists, stacks, queues, trees, and graphs." },
                { unit: "Unit 3: Algorithms", description: "Sorting, searching, recursion, and algorithm complexity analysis." },
                { unit: "Unit 4: Databases", description: "Introduction to databases, SQL queries, normalization, and transactions." },
                { unit: "Unit 5: Networking", description: "Network models, protocols, IP addressing, and basic network security." }
            ]
        },

        timetable: {
            Monday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Physics", room: "102B", time: "10:00-11:00" },
                { subject: "Chemistry", room: "103C", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Tuesday: [
                { subject: "Physics", room: "102B", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "English", room: "104D", time: "11:15-12:15" },
                { subject: "Chemistry", room: "103C", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Wednesday: [
                { subject: "Computer Science", room: "105E", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ],
            Thursday: [
                { subject: "English", room: "104D", time: "9:00-10:00" },
                { subject: "Chemistry", room: "103C", time: "10:00-11:00" },
                { subject: "Mathematics", room: "101A", time: "11:15-12:15" },
                { subject: "Computer Science", room: "105E", time: "1:00-2:00" },
                { subject: "Physics", room: "102B", time: "2:00-3:00" }
            ],
            Friday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Computer Science", room: "105E", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ]
        },    

        exams: [
            { subject: "Mathematics", date: "2025-03-10", time: "10:00 AM", room: "Exam Hall A" },
            { subject: "Physics", date: "2025-03-12", time: "10:00 AM", room: "Exam Hall B" },
            { subject: "Chemistry", date: "2025-03-14", time: "10:00 AM", room: "Exam Hall C" },
            { subject: "English", date: "2025-03-16", time: "10:00 AM", room: "Exam Hall D" },
            { subject: "Computer Science", date: "2025-03-18", time: "10:00 AM", room: "Exam Hall E" }
        ]
    },

    REG1007: {
        name: "Alice Johnson",
        syllabus: {
            "Mathematics": [
                { unit: "Unit 1: Algebra", description: "Introduction to algebraic expressions, equations, inequalities, polynomials, and quadratic functions." },
                { unit: "Unit 2: Calculus", description: "Covers limits, derivatives, integrals, and applications of differentiation and integration." },
                { unit: "Unit 3: Probability", description: "Fundamentals of probability theory, random variables, distributions, and basic statistics." },
                { unit: "Unit 4: Matrices", description: "Introduction to matrices, types of matrices, matrix operations, and determinants." },
                { unit: "Unit 5: Differential Equations", description: "Solving first and higher order differential equations and their applications." }
            ],
            "Physics": [
                { unit: "Unit 1: Mechanics", description: "Study of motion, forces, energy, momentum, and rotational dynamics." },
                { unit: "Unit 2: Thermodynamics", description: "Concepts of heat, work, laws of thermodynamics, and heat engines." },
                { unit: "Unit 3: Optics", description: "Introduction to reflection, refraction, lenses, and optical instruments." },
                { unit: "Unit 4: Electromagnetism", description: "Exploration of electric fields, magnetic fields, electromagnetic waves, and circuits." },
                { unit: "Unit 5: Quantum Physics", description: "Basics of quantum theory, atomic models, and principles like wave-particle duality." }
            ],
            "Chemistry": [
                { unit: "Unit 1: Organic Chemistry", description: "Introduction to organic compounds, functional groups, and reaction mechanisms." },
                { unit: "Unit 2: Inorganic Chemistry", description: "Study of periodic table elements, bonding, and coordination compounds." },
                { unit: "Unit 3: Physical Chemistry", description: "Concepts of chemical kinetics, equilibrium, and thermodynamics in chemistry." },
                { unit: "Unit 4: Biochemistry", description: "Overview of biomolecules, enzymes, metabolism, and biochemical pathways." },
                { unit: "Unit 5: Environmental Chemistry", description: "Environmental pollution, green chemistry, and chemical waste management." }
            ],
            "English": [
                { unit: "Unit 1: Grammar", description: "Detailed review of parts of speech, tenses, clauses, and sentence structure." },
                { unit: "Unit 2: Writing Skills", description: "Essay writing, letter writing, summarizing, and note-taking techniques." },
                { unit: "Unit 3: Literature", description: "Analysis of prose, poetry, and drama from classic and contemporary authors." },
                { unit: "Unit 4: Comprehension", description: "Reading comprehension techniques, inference skills, and critical analysis." },
                { unit: "Unit 5: Communication", description: "Effective verbal and non-verbal communication, presentations, and debates." }
            ],
            "Computer Science": [
                { unit: "Unit 1: Programming Basics", description: "Introduction to programming languages, basic syntax, and control structures." },
                { unit: "Unit 2: Data Structures", description: "Arrays, linked lists, stacks, queues, trees, and graphs." },
                { unit: "Unit 3: Algorithms", description: "Sorting, searching, recursion, and algorithm complexity analysis." },
                { unit: "Unit 4: Databases", description: "Introduction to databases, SQL queries, normalization, and transactions." },
                { unit: "Unit 5: Networking", description: "Network models, protocols, IP addressing, and basic network security." }
            ]
        },

        timetable: {
            Monday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Physics", room: "102B", time: "10:00-11:00" },
                { subject: "Chemistry", room: "103C", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Tuesday: [
                { subject: "Physics", room: "102B", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "English", room: "104D", time: "11:15-12:15" },
                { subject: "Chemistry", room: "103C", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Wednesday: [
                { subject: "Computer Science", room: "105E", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ],
            Thursday: [
                { subject: "English", room: "104D", time: "9:00-10:00" },
                { subject: "Chemistry", room: "103C", time: "10:00-11:00" },
                { subject: "Mathematics", room: "101A", time: "11:15-12:15" },
                { subject: "Computer Science", room: "105E", time: "1:00-2:00" },
                { subject: "Physics", room: "102B", time: "2:00-3:00" }
            ],
            Friday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Computer Science", room: "105E", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ]
        },    

        exams: [
            { subject: "Mathematics", date: "2025-03-10", time: "10:00 AM", room: "Exam Hall A" },
            { subject: "Physics", date: "2025-03-12", time: "10:00 AM", room: "Exam Hall B" },
            { subject: "Chemistry", date: "2025-03-14", time: "10:00 AM", room: "Exam Hall C" },
            { subject: "English", date: "2025-03-16", time: "10:00 AM", room: "Exam Hall D" },
            { subject: "Computer Science", date: "2025-03-18", time: "10:00 AM", room: "Exam Hall E" }
        ]
    },

    REG1008: {
        name: "Sruti Patel",
        syllabus: {
            "Mathematics": [
                { unit: "Unit 1: Algebra", description: "Introduction to algebraic expressions, equations, inequalities, polynomials, and quadratic functions." },
                { unit: "Unit 2: Calculus", description: "Covers limits, derivatives, integrals, and applications of differentiation and integration." },
                { unit: "Unit 3: Probability", description: "Fundamentals of probability theory, random variables, distributions, and basic statistics." },
                { unit: "Unit 4: Matrices", description: "Introduction to matrices, types of matrices, matrix operations, and determinants." },
                { unit: "Unit 5: Differential Equations", description: "Solving first and higher order differential equations and their applications." }
            ],
            "Physics": [
                { unit: "Unit 1: Mechanics", description: "Study of motion, forces, energy, momentum, and rotational dynamics." },
                { unit: "Unit 2: Thermodynamics", description: "Concepts of heat, work, laws of thermodynamics, and heat engines." },
                { unit: "Unit 3: Optics", description: "Introduction to reflection, refraction, lenses, and optical instruments." },
                { unit: "Unit 4: Electromagnetism", description: "Exploration of electric fields, magnetic fields, electromagnetic waves, and circuits." },
                { unit: "Unit 5: Quantum Physics", description: "Basics of quantum theory, atomic models, and principles like wave-particle duality." }
            ],
            "Chemistry": [
                { unit: "Unit 1: Organic Chemistry", description: "Introduction to organic compounds, functional groups, and reaction mechanisms." },
                { unit: "Unit 2: Inorganic Chemistry", description: "Study of periodic table elements, bonding, and coordination compounds." },
                { unit: "Unit 3: Physical Chemistry", description: "Concepts of chemical kinetics, equilibrium, and thermodynamics in chemistry." },
                { unit: "Unit 4: Biochemistry", description: "Overview of biomolecules, enzymes, metabolism, and biochemical pathways." },
                { unit: "Unit 5: Environmental Chemistry", description: "Environmental pollution, green chemistry, and chemical waste management." }
            ],
            "English": [
                { unit: "Unit 1: Grammar", description: "Detailed review of parts of speech, tenses, clauses, and sentence structure." },
                { unit: "Unit 2: Writing Skills", description: "Essay writing, letter writing, summarizing, and note-taking techniques." },
                { unit: "Unit 3: Literature", description: "Analysis of prose, poetry, and drama from classic and contemporary authors." },
                { unit: "Unit 4: Comprehension", description: "Reading comprehension techniques, inference skills, and critical analysis." },
                { unit: "Unit 5: Communication", description: "Effective verbal and non-verbal communication, presentations, and debates." }
            ],
            "Computer Science": [
                { unit: "Unit 1: Programming Basics", description: "Introduction to programming languages, basic syntax, and control structures." },
                { unit: "Unit 2: Data Structures", description: "Arrays, linked lists, stacks, queues, trees, and graphs." },
                { unit: "Unit 3: Algorithms", description: "Sorting, searching, recursion, and algorithm complexity analysis." },
                { unit: "Unit 4: Databases", description: "Introduction to databases, SQL queries, normalization, and transactions." },
                { unit: "Unit 5: Networking", description: "Network models, protocols, IP addressing, and basic network security." }
            ]
        },

        timetable: {
            Monday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Physics", room: "102B", time: "10:00-11:00" },
                { subject: "Chemistry", room: "103C", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Tuesday: [
                { subject: "Physics", room: "102B", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "English", room: "104D", time: "11:15-12:15" },
                { subject: "Chemistry", room: "103C", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Wednesday: [
                { subject: "Computer Science", room: "105E", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ],
            Thursday: [
                { subject: "English", room: "104D", time: "9:00-10:00" },
                { subject: "Chemistry", room: "103C", time: "10:00-11:00" },
                { subject: "Mathematics", room: "101A", time: "11:15-12:15" },
                { subject: "Computer Science", room: "105E", time: "1:00-2:00" },
                { subject: "Physics", room: "102B", time: "2:00-3:00" }
            ],
            Friday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Computer Science", room: "105E", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ]
        },    

        exams: [
            { subject: "Mathematics", date: "2025-03-10", time: "10:00 AM", room: "Exam Hall A" },
            { subject: "Physics", date: "2025-03-12", time: "10:00 AM", room: "Exam Hall B" },
            { subject: "Chemistry", date: "2025-03-14", time: "10:00 AM", room: "Exam Hall C" },
            { subject: "English", date: "2025-03-16", time: "10:00 AM", room: "Exam Hall D" },
            { subject: "Computer Science", date: "2025-03-18", time: "10:00 AM", room: "Exam Hall E" }
        ]
    },

    REG1009: {
        name: "Bishnu Prakash",
        syllabus: {
            "Mathematics": [
                { unit: "Unit 1: Algebra", description: "Introduction to algebraic expressions, equations, inequalities, polynomials, and quadratic functions." },
                { unit: "Unit 2: Calculus", description: "Covers limits, derivatives, integrals, and applications of differentiation and integration." },
                { unit: "Unit 3: Probability", description: "Fundamentals of probability theory, random variables, distributions, and basic statistics." },
                { unit: "Unit 4: Matrices", description: "Introduction to matrices, types of matrices, matrix operations, and determinants." },
                { unit: "Unit 5: Differential Equations", description: "Solving first and higher order differential equations and their applications." }
            ],
            "Physics": [
                { unit: "Unit 1: Mechanics", description: "Study of motion, forces, energy, momentum, and rotational dynamics." },
                { unit: "Unit 2: Thermodynamics", description: "Concepts of heat, work, laws of thermodynamics, and heat engines." },
                { unit: "Unit 3: Optics", description: "Introduction to reflection, refraction, lenses, and optical instruments." },
                { unit: "Unit 4: Electromagnetism", description: "Exploration of electric fields, magnetic fields, electromagnetic waves, and circuits." },
                { unit: "Unit 5: Quantum Physics", description: "Basics of quantum theory, atomic models, and principles like wave-particle duality." }
            ],
            "Chemistry": [
                { unit: "Unit 1: Organic Chemistry", description: "Introduction to organic compounds, functional groups, and reaction mechanisms." },
                { unit: "Unit 2: Inorganic Chemistry", description: "Study of periodic table elements, bonding, and coordination compounds." },
                { unit: "Unit 3: Physical Chemistry", description: "Concepts of chemical kinetics, equilibrium, and thermodynamics in chemistry." },
                { unit: "Unit 4: Biochemistry", description: "Overview of biomolecules, enzymes, metabolism, and biochemical pathways." },
                { unit: "Unit 5: Environmental Chemistry", description: "Environmental pollution, green chemistry, and chemical waste management." }
            ],
            "English": [
                { unit: "Unit 1: Grammar", description: "Detailed review of parts of speech, tenses, clauses, and sentence structure." },
                { unit: "Unit 2: Writing Skills", description: "Essay writing, letter writing, summarizing, and note-taking techniques." },
                { unit: "Unit 3: Literature", description: "Analysis of prose, poetry, and drama from classic and contemporary authors." },
                { unit: "Unit 4: Comprehension", description: "Reading comprehension techniques, inference skills, and critical analysis." },
                { unit: "Unit 5: Communication", description: "Effective verbal and non-verbal communication, presentations, and debates." }
            ],
            "Computer Science": [
                { unit: "Unit 1: Programming Basics", description: "Introduction to programming languages, basic syntax, and control structures." },
                { unit: "Unit 2: Data Structures", description: "Arrays, linked lists, stacks, queues, trees, and graphs." },
                { unit: "Unit 3: Algorithms", description: "Sorting, searching, recursion, and algorithm complexity analysis." },
                { unit: "Unit 4: Databases", description: "Introduction to databases, SQL queries, normalization, and transactions." },
                { unit: "Unit 5: Networking", description: "Network models, protocols, IP addressing, and basic network security." }
            ]
        },

        timetable: {
            Monday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Physics", room: "102B", time: "10:00-11:00" },
                { subject: "Chemistry", room: "103C", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Tuesday: [
                { subject: "Physics", room: "102B", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "English", room: "104D", time: "11:15-12:15" },
                { subject: "Chemistry", room: "103C", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Wednesday: [
                { subject: "Computer Science", room: "105E", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ],
            Thursday: [
                { subject: "English", room: "104D", time: "9:00-10:00" },
                { subject: "Chemistry", room: "103C", time: "10:00-11:00" },
                { subject: "Mathematics", room: "101A", time: "11:15-12:15" },
                { subject: "Computer Science", room: "105E", time: "1:00-2:00" },
                { subject: "Physics", room: "102B", time: "2:00-3:00" }
            ],
            Friday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Computer Science", room: "105E", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ]
        },    

        exams: [
            { subject: "Mathematics", date: "2025-03-10", time: "10:00 AM", room: "Exam Hall A" },
            { subject: "Physics", date: "2025-03-12", time: "10:00 AM", room: "Exam Hall B" },
            { subject: "Chemistry", date: "2025-03-14", time: "10:00 AM", room: "Exam Hall C" },
            { subject: "English", date: "2025-03-16", time: "10:00 AM", room: "Exam Hall D" },
            { subject: "Computer Science", date: "2025-03-18", time: "10:00 AM", room: "Exam Hall E" }
        ]
    },

    REG1010: {
        name:"Iqbal Singh",
        syllabus: {
            "Mathematics": [
                { unit: "Unit 1: Algebra", description: "Introduction to algebraic expressions, equations, inequalities, polynomials, and quadratic functions." },
                { unit: "Unit 2: Calculus", description: "Covers limits, derivatives, integrals, and applications of differentiation and integration." },
                { unit: "Unit 3: Probability", description: "Fundamentals of probability theory, random variables, distributions, and basic statistics." },
                { unit: "Unit 4: Matrices", description: "Introduction to matrices, types of matrices, matrix operations, and determinants." },
                { unit: "Unit 5: Differential Equations", description: "Solving first and higher order differential equations and their applications." }
            ],
            "Physics": [
                { unit: "Unit 1: Mechanics", description: "Study of motion, forces, energy, momentum, and rotational dynamics." },
                { unit: "Unit 2: Thermodynamics", description: "Concepts of heat, work, laws of thermodynamics, and heat engines." },
                { unit: "Unit 3: Optics", description: "Introduction to reflection, refraction, lenses, and optical instruments." },
                { unit: "Unit 4: Electromagnetism", description: "Exploration of electric fields, magnetic fields, electromagnetic waves, and circuits." },
                { unit: "Unit 5: Quantum Physics", description: "Basics of quantum theory, atomic models, and principles like wave-particle duality." }
            ],
            "Chemistry": [
                { unit: "Unit 1: Organic Chemistry", description: "Introduction to organic compounds, functional groups, and reaction mechanisms." },
                { unit: "Unit 2: Inorganic Chemistry", description: "Study of periodic table elements, bonding, and coordination compounds." },
                { unit: "Unit 3: Physical Chemistry", description: "Concepts of chemical kinetics, equilibrium, and thermodynamics in chemistry." },
                { unit: "Unit 4: Biochemistry", description: "Overview of biomolecules, enzymes, metabolism, and biochemical pathways." },
                { unit: "Unit 5: Environmental Chemistry", description: "Environmental pollution, green chemistry, and chemical waste management." }
            ],
            "English": [
                { unit: "Unit 1: Grammar", description: "Detailed review of parts of speech, tenses, clauses, and sentence structure." },
                { unit: "Unit 2: Writing Skills", description: "Essay writing, letter writing, summarizing, and note-taking techniques." },
                { unit: "Unit 3: Literature", description: "Analysis of prose, poetry, and drama from classic and contemporary authors." },
                { unit: "Unit 4: Comprehension", description: "Reading comprehension techniques, inference skills, and critical analysis." },
                { unit: "Unit 5: Communication", description: "Effective verbal and non-verbal communication, presentations, and debates." }
            ],
            "Computer Science": [
                { unit: "Unit 1: Programming Basics", description: "Introduction to programming languages, basic syntax, and control structures." },
                { unit: "Unit 2: Data Structures", description: "Arrays, linked lists, stacks, queues, trees, and graphs." },
                { unit: "Unit 3: Algorithms", description: "Sorting, searching, recursion, and algorithm complexity analysis." },
                { unit: "Unit 4: Databases", description: "Introduction to databases, SQL queries, normalization, and transactions." },
                { unit: "Unit 5: Networking", description: "Network models, protocols, IP addressing, and basic network security." }
            ]
        },

        timetable: {
            Monday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Physics", room: "102B", time: "10:00-11:00" },
                { subject: "Chemistry", room: "103C", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Tuesday: [
                { subject: "Physics", room: "102B", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "English", room: "104D", time: "11:15-12:15" },
                { subject: "Chemistry", room: "103C", time: "1:00-2:00" },
                { subject: "Computer Science", room: "105E", time: "2:00-3:00" }
            ],
            Wednesday: [
                { subject: "Computer Science", room: "105E", time: "9:00-10:00" },
                { subject: "Mathematics", room: "101A", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ],
            Thursday: [
                { subject: "English", room: "104D", time: "9:00-10:00" },
                { subject: "Chemistry", room: "103C", time: "10:00-11:00" },
                { subject: "Mathematics", room: "101A", time: "11:15-12:15" },
                { subject: "Computer Science", room: "105E", time: "1:00-2:00" },
                { subject: "Physics", room: "102B", time: "2:00-3:00" }
            ],
            Friday: [
                { subject: "Mathematics", room: "101A", time: "9:00-10:00" },
                { subject: "Computer Science", room: "105E", time: "10:00-11:00" },
                { subject: "Physics", room: "102B", time: "11:15-12:15" },
                { subject: "English", room: "104D", time: "1:00-2:00" },
                { subject: "Chemistry", room: "103C", time: "2:00-3:00" }
            ]
        },    

        exams: [
            { subject: "Mathematics", date: "2025-03-10", time: "10:00 AM", room: "Exam Hall A" },
            { subject: "Physics", date: "2025-03-12", time: "10:00 AM", room: "Exam Hall B" },
            { subject: "Chemistry", date: "2025-03-14", time: "10:00 AM", room: "Exam Hall C" },
            { subject: "English", date: "2025-03-16", time: "10:00 AM", room: "Exam Hall D" },
            { subject: "Computer Science", date: "2025-03-18", time: "10:00 AM", room: "Exam Hall E" }
        ]
    },
};
export default students;