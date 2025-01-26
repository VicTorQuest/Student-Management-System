class User {
    // storing users in arrays and objects
    static users =  [
        {
            'id': 1,
            'username': 'EzehLivi',
            'email': 'ezehlivinus@gmail.com',
            'isStaff': true
        },
        {
            'id': 2,
            'username': 'saucecode',
            'email': 'ifedilionyeabu@gmail.com',
            'isStaff': true
        },
        {
            'id': 3,
            'username': 'Kingjames23',
            'email': 'lebronto23@gmail.com',
            'isStaff': false
        },
        {
            'id': 4,
            'username': 'genesys',
            'email': 'hello@genesystechhub.com',
            'isStaff': true,
        },
        {
            'id': 5,
            'username': 'Tappi',
            'email': 'tappi@genesystechhub.com',
            'isStaff': true,
        },
        {
            'id': 6,
            'username': 'StenphenCurry30',
            'email': 'babyfaceassasin@gmail.com',
            'isStaff': false,
        },
        {
            'id': 7,
            'username': 'kevinDurant35',
            'email': 'easymoneysniper@gmail.com',
            'isStaff': false,
        }

    ]

    constructor (id, username, email, isStaff) {
        this.id = id
        this.username = username
        this.email = email
        this.isStaff = isStaff

        // throwing an error if the abstract/base class is initailized
        if (this.constructor === User) {
            throw new Error('User cannot be called or instantiates')
        }
    }

    // displays the total users
    static getTotal() {
        console.log(`Total users: ${User.users.length}`)
        return 
    }
}



class Student extends User {
    // storing students in arrays and objects
    static students = [
        {
            'id': 1,
            'username': 'StenphenCurry30',
            'email': 'babyfaceassasin@gmail.com',
            'isStaff': false,
            'firstName': 'Stephen',
            'lastName': 'Curry',
            'level': 'Intern',
            'department': 'Web3',
            'enrollmentDate': '24-01-2025',
            'scores': {
                'html': 97,
                'css': 79,
                'javascript': 88,
                'python': 92,
                'solidity': 75
            }
        },
        {
            'id': 2,
            'username': 'kevinDurant35',
            'email': 'easymoneysniper@gmail.com',
            'isStaff': false,
            'firstName': 'Kevin',
            'lastName': 'Durant',
            'level': 'Intern',
            'department': 'Backend',
            'enrollmentDate': '24-01-2025',
            'scores': {
                'html': 87,
                'css': 65,
                'javascript': 92,
                'python': 98,
                'sql': 80
            }
        },
        {
            'id': 3,
            'username': 'Kingjames23',
            'email': 'lebronto23@gmail.com',
            'isStaff': false,
            'firstName': 'Lebron',
            'lastName': 'James',
            'level': 'Intern',
            'department': 'Frontend',
            'enrollmentDate': '24-01-2025',
            'scores': {
                'html': 92,
                'css': 99,
                'javascript': 89,
                'react': 74,
                'tailwind': 70
            }
        },
    ]


    constructor (id, username, email, isStaff, firstName, lastName, level, department, enrollmentDate, scores) {
        super(id, username, email, isStaff)
        this.firstName = firstName,
        this.lastName = lastName,
        this.level = level
        this.department = department
        this.enrollmentDate = enrollmentDate
        this.scores = scores

        // emulating scores to a student during initialization
        if (this.constructor === Student) {
            this.scores = {
                'html': this.#getRandomScore(),
                'css': this.#getRandomScore(),
                'javascript': this.#getRandomScore(),
                'python': this.#getRandomScore(),
                'sql': this.#getRandomScore()
            }
        }
    }

    // displays the total enrolled students
    static getTotal() {
        console.log(`Total enrolled students: ${this.students.length}`)
        return
    }

    // private method to get a score for a subject
    #getRandomScore() {
        return Math.floor(Math.random() * 100) + 1;
    }

    // displays the details of a student
    getStudentDetails () {
        console.log(`${this.firstName} ${this.lastName} student details:`)
        console.log(`
            First name ----- ${this.firstName}
            Last name ----- ${this.lastName}
            Email ----- ${this.email}
            Level ----- ${this.level}
            Department ----- ${this.department}
            Enrolled on ----- ${this.enrollmentDate}
            scores ----- ${JSON.stringify(this.scores)}
        `)
    }

    
    // displays the average score of a student
    getAverageScore() {
        const scoreValues = Object.values(this.scores); 
        const total = scoreValues.reduce((sum, score) => sum + score, 0); 
        const average = total / scoreValues.length;

        console.log(`${this.firstName} ${this.lastName}'s average score is: ${average}`)
        return
    }
}


class Tutor extends User {
    // storing tutors in arrays and objects
    static teachers = [
        {
            'id': 1,
            'username': 'EzehLivi',
            'email': 'ezehlivinus@gmail.com',
            'isStaff': true,
            'firstName': 'Livinus',
            'lastName': 'Ezeh',
            'department': 'Backend',
            'assignedSubject': 'Javascript',
            'dateOfJoining': '18-08-2018'
        },
        {
            'id': 2,
            'username': 'saucecode',
            'email': 'ifedilionyeabu@gmail.com',
            'isStaff': true,
            'firstName': 'onyeabu',
            'lastName': 'ifedili',
            'department': 'Web3',
            'assignedSubject': 'Solidity',
            'dateOfJoining': '18-08-2018'
        },
    ]

    constructor (id, username, email, isStaff, firstName, lastName, department, assignedSubject, dateOfJoining) {
        super(id, username, email, isStaff)
        this.firstName = firstName,
        this.lastName = lastName,
        this.department = department
        this.assignedSubject = assignedSubject
        this.dateOfJoining = dateOfJoining
    }

    // get the total number of tutors
    static getTotal() {
        console.log(`Total tutors: ${Tutor.teachers.length}`)
        return
    }

    // gets the details for a tutor
    getTutorDetails () {
        console.log(`${this.firstName} ${this.lastName}'s details:`)
        console.log(`
            First name ----- ${this.firstName}
            Last name ----- ${this.lastName}
            is a staff? ----- ${this.department}
            Department ----- ${this.department}
            Assigned subject ----- ${this.assignedSubject}
            Date joined ----- ${this.dateOfJoining}
        `)
    }
}


class Administrator extends User {
    // storing users in arrays and objects
    static administrators = [
        {
            'id': 1,
            'username': 'genesys',
            'email': 'hello@genesystechhub.com',
            'isStaff': true,
            'firstName': undefined,
            'lastName': undefined
        },
        {
            'id': 2,
            'username': 'Tappi',
            'email': 'tappi@genesystechhub.com',
            'isStaff': true,
            'firstName': undefined,
            'lastName': undefined
        }
    ]


    constructor (id, username, email, isStaff, firstName, lastName) {
        super(id, username, email, isStaff,)
        this.firstName = firstName
        this.lastName = lastName
    }

    // get the total admins
    static getTotal() {
        console.log(`Total admins: ${Administrator.administrators.length}`)
        return
    }

    // returns the date a student is being enrolled
    #getEnrollmentDate() {
        const date = new Date()
        const day = String(date.getDate()).padStart(2, '0'); 
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }


    // allows the admin to add a student
    addStudent(id, username, email, isStaff, firstName, lastName, level, department, enrollmentDate=this.#getEnrollmentDate(), scores) {
        console.log(`Adding new student - ${firstName} ${lastName}...`)

        const victor = new Student(id, username, email, isStaff, firstName, lastName, level, department, enrollmentDate)
        

        User.users.push({
            'id': id,
            'username': username,
            'email': email,
            'isStaff': isStaff
        },)
       
        Student.students.push({
            'id': id,
            'username': username,
            'email': email,
            'isStaff': isStaff,
            'firstName': firstName,
            'lastName': lastName,
            'level': level,
            'department': department,
            'enrollmentDate': enrollmentDate,
            'scores': victor.scores
        },)

        console.log(`${victor.firstName} ${victor.lastName} has been added to students`)

        
    }
}



const learnable = new Administrator(3, 'learnable', 'learnable@genesystechhub.com', true)
const quest =  new Student(3,'Quest', 'questcoding2001@gmail.com', false, 'Quest', 'Coding', 'Intern', 'Web3', '24-01-2025')
const judicodes = new Tutor(3, 'judicodes', 'judicodes323@gmail.com', true, 'Joshua', 'Nwankwo', 'Web3', 'Solidity', '19-09-2022')


learnable.addStudent(3, 'victor001', 'victorokolie2001@gmail.com', false, 'Victor', 'Okolie', 'Intern', 'Web3')
console.log(`
    `)
User.getTotal()
console.log(`
    `)
Student.getTotal()
console.log(`
    `)
Tutor.getTotal()
console.log(`
    
`)
quest.getStudentDetails()
console.log(`
    
`)
quest.getAverageScore()
console.log(`
    
    `)
judicodes.getTutorDetails()

