import supertest from 'supertest';
const request = supertest('https://gorest.co.in/public-api/');

import { expect } from 'chai';

const TOKEN = 'f7175db77eb6c101312b0eb0f58b2a1f341ed26b52b590585fd1e7e973694aa5';

describe('User Post', () => {
    it('Posts', () => {
        const data = {
            user_id :"17",
            title : "My title",
            body : "my blog post" 
        }


    });


});