# Student Dashboard

## Endpoints 

GET <br/>
/api/students/ -> findAll() <br/>
GET <br/>
/api/students/{id} findById() <br/>
POST <br/>
/api/students/ -> addNew() <br/>
PUT <br/>
/api/students{id} -> updateById() <br/>
DELETE <br/>
/api/students{id} -> deletebyId() <br/>



Request Format  <br/>

body: json <br/>

    {
        "firstName": "Sam",
        "lastName": "Smith",
        "address": "23 Main St",
        "gpa": 2.1,
        "year": "Freshman",
        "graduation_date": "2020-08-11",
        "tuition_due": 9765.0
    }


