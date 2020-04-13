# CISC4800-project2

## Endpoints 

GET <br/>
/api/v1/employees/ -> findAll() <br/>
GET <br/>
/api/v1/employees/{id} findById() <br/>
POST <br/>
/api/v1/employees/ -> addNew() <br/>
PUT <br/>
/api/v1/employees/{id} -> updateById() <br/>
DELETE <br/>
/api/v1/employees/{id} -> deletebyId() <br/>



Request Format  <br/>

body: json <br/>

{ <br/>
    "firstName": "John", <br/>
    "lastName": "Doe", <br/>
    "emailId": "JohnDoe@mail.com" <br/>
}


