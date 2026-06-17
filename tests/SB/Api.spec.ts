// get from local server http://localhost:3000/ - aipoindi
// check 200 - aipoindi
import { test, expect } from '@playwright/test';
let localhost = 'http://localhost:3000/'
let usersUrl = "http://localhost:3000/posts"
let id1: string;
let id2: string;
let id1Url: string;
let id2Url: string;

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
   console.log(response2.json())
    const responseBody = await response2.json();
    id1 = responseBody.id;
    id1Url = usersUrl+"/"+id1;
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
    id2Url = usersUrl+"/"+id2;
    console.log("object Id = " + id2)
    //console.log(responseBody3)
});

test('PUT TO ID2 ', async ({ request }) => {
    //const response = await request.get(localhost)
    //console.log(response)
 const response5 = await request.put(id2Url, {
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

test('Delete of API', async ({request})=>{
let responce7=await request.delete(id2Url);
const responcebody7 = responce7.json();
expect(responce7.status()).toBe(200);
responce7=await request.get(id2Url);
expect(responce7.status()).toBe(404);

});
