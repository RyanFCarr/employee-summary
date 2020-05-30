module.exports = {
    "employee": [
        {
            "type": "input",
            "name": "name",
            "message": "What is your name?"
        },
        {
            "type": "input",
            "name": "email",
            "message": "What is your email?",
            "validate": email => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        },
        {
            "type": "input",
            "name": "id",
            "message": "What is your id?"
        }  
    ],
    "manager": [
        {
            "type": "input",
            "name": "officeNumber",
            "message": "Manager's officeNumber?",
            "validate": phone => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone)
        }
    ],
    "engineer": [
        {
            "type": "input",
            "name": "gitHub",
            "message": "Engineer's GitHub name?"
        },
        {
            "type": "confirm",
            "name": "done",
            "message": "Would you like to add another Engineer?"
        }
    ],
    "intern": [
        {
            "type": "input",
            "name": "schoolName",
            "message": "Intern's school name?"
        },
        {
            "type": "confirm",
            "name": "done",
            "message": "Would you like to add another Intern?"
        }
    ]
}