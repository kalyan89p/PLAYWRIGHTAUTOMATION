// get from local server http://localhost:3000/ - aipoindi
// check 200 - aipoindi
// Post to local server  http://localhost:3000/users
// check 210 - aipoindi
// Post to local server -   - aipoindi
// check 210 - aipiondi
// Then Get using ID , 200 + data - aipondi
// patch to local server - modify data on existing id. 
// check 200. 
// get using id , verify the changes are reflected. 
// PUT to local server - modify data on existing id. 
// check 200. 
// get using id , verify the changes are reflected. 
// DELETE FROM local server
// check 200. 
// get using id , verify the RECORD IS DELETED.
// DELETE FROM local server
// check 200. 
// get using id , verify the RECORD IS DELETED.

import {test,expect} from '@playwright/test';
let localhost = 'http://localhost:3000/'
let usersUrl = "http://localhost:3000/users"
let id1:string;
let id2: string;
test('GET FROM API', async({request})=>{
    const response = await request.get(localhost)
    //console.log(response)
    expect(response.status()).toBe(200);

   const response2= await request.post(usersUrl,            {
                data: {
                    name: "Shanmukha",
                    data: {
                        year: 2026,
                        price: 1.99,
                        'CPU model': 'Portal',
                        'Hard disk size': '23TB',
                        color: 'Jumanji'
                    }
                }
            }
        );
expect(response2.status()).toBe(201);
            //console.log(response.json())
            const responseBody= await response2.json();
            id1 = responseBody.id;
            console.log("object Id = "+id1)

            const response3= await request.post(usersUrl,            {
                data: {
                    name: "Rajesh",
                    data: {
                        year: 2025,
                        price: 2.99,
                        'CPU model': 'Borrower',
                        'Hard disk size': '1TB',
                        color: 'Pench'
                    }
                }
            }
        );
expect(response3.status()).toBe(201);
            //console.log(response.json())
            const responseBody3= await response3.json();
            id2 = responseBody3.id;
            console.log("object Id = "+id2)
            console.log(responseBody3)
});
//Rajesh Veldanda