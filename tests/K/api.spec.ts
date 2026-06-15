// get from local server http://localhost:3000/ - aipoindi
// check 200 - aipoindi
// Post to local server  http://localhost:3000/users
// check 210 - aipoindi
// Post to local server -   - aipoindi
// check 210 - aipiondi
// Then Get using ID , 200 + data - aipondi
// patch to local server - modify data on existing id.  - aipoindi
// check 200.   - aipoindi
// get using id , verify the changes are reflected.  - aipoindi
// PUT to local server - modify data on existing id.  - aipoindi
// check 200.  - aipoindi
// get using id , verify the changes are reflected.  - aipoindi
// DELETE FROM local server    - aipoindi
// check 200.   - aipoindi
// get using id , verify the RECORD IS DELETED.  - aipoindi
// DELETE FROM local server  - aipoindi
// check 200.   - aipoindi
// get using id , verify the RECORD IS DELETED.  - aipoindi

import { test, expect } from '@playwright/test';
let localhost = 'http://localhost:3000/'
let usersUrl = "http://localhost:3000/users"
let id1: string;
let id2: string;


test('GET FROM API', async ({ request }) => {
    const response = await request.get(localhost)
    //console.log(response)
    expect(response.status()).toBe(200);
});
test('POST TO API 1', async ({ request }) => {
    const response2 = await request.post(usersUrl, {
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
    const responseBody = await response2.json();
    id1 = responseBody.id;
    console.log("object Id = " + id1)
});

test('POST TO API2', async ({ request }) => {

    const response3 = await request.post(usersUrl, {
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
    const responseBody3 = await response3.json();
    id2 = responseBody3.id;
    console.log("object Id = " + id2)
});


test('PATCH TO ID1 ', async ({ request }) => {
    //const response = await request.get(localhost)
    //console.log(response)
 const response4 = await request.patch(usersUrl+"/"+id1, {
        data: {
             name: "Kalyan"
        }
    });

    expect(response4.status()).toBe(200);

     const responseBody4 = await response4.json();
    const currentName = responseBody4.name;
        if(currentName=='Kalyan'){
            console.log("test case 4 passed");
        }
  
});

test('PUT TO ID2 ', async ({ request }) => {
    //const response = await request.get(localhost)
    //console.log(response)
 const response5 = await request.put(usersUrl+"/"+id2, {
        data: {
        	"name": "Macharla",
	    "data": {
		"year": 2026,
		"price": 1.99,
		"CPU model": "Portal",
		"Hard disk size": "23TB",
		"color": "Jumanji"
        }
    }
});

    expect(response5.status()).toBe(200);

     const responseBody5 = await response5.json();
    const currentName = responseBody5.name;
        if(currentName=='Macharla'){
            console.log("test case 5 passed");
        }
  
});


test('DELETE ID1 ', async ({ request }) => {
    //const response = await request.get(localhost)
    //console.log(response)
 let response6 = await request.delete(usersUrl+"/"+id1);
 const response6Body = await response6.json();
 expect(response6.status()).toBe(200);  
 response6 = await request.get(usersUrl+"/"+id1);
 expect(response6.status()).toBe(404);

});
test('DELETE ID2 ', async ({ request }) => {
    //const response = await request.get(localhost)
    //console.log(response)
 let response7 = await request.delete(usersUrl+"/"+id2);
 const response7Body = await response7.json();
 expect(response7.status()).toBe(200);  
 response7 = await request.get(usersUrl+"/"+id1);
 expect(response7.status()).toBe(404);

});