import supertest from 'supertest';
const request = supertest('https://gorest.co.in/public-api/');

import { expect, use } from 'chai';

const TOKEN = 'f7175db77eb6c101312b0eb0f58b2a1f341ed26b52b590585fd1e7e973694aa5';

describe('Users', () => {

    let userid;
    describe('Post Testsuite', () => {
        it('POST/Users', () => {
            const data = {
                email: `test-${Math.floor(Math.random() * 9999)}@mail.ca`,
                name: 'Test13232 fgfg Name',
                gender: 'male',
                status: 'inactive'
            };
            return request
                .post('users')
                .set("Authorization", `Bearer ${TOKEN}`)
                .send(data)
                .then((res) => {
                    console.log(res.body)
                    expect(res.body.data.email).to.eq(data.email)
                    expect(res.body.data).to.deep.include(data);
                    userid = res.body.data.id;
                    console.log(userid)
                })
        });

    });


    describe('GET TestSuite', () => {
        it('GET /users', () => {
            // request.get(`users?access-token=${TOKEN}`).end((err, res) => {
            //   expect(res.body.data).to.not.be.empty;
            //   done();
            // });

            return request.get(`users?access-token=${TOKEN}`).then((res) => {
                expect(res.body.data).to.not.be.empty;
            });
        })

        it('GET/Users/:id', () => {
            return request.get(`users/${userid}?access-token=${TOKEN}`).then((res) => {
                expect(res.body.data.id).to.be.eq(userid)
            });
        });

        it('GET/Users with query params', () => {

            const url = `users?access-token=${TOKEN}&page=5&gender=female&status=active`

            return request.get(url).then((res) => {
                expect(res.body.data).to.not.be.empty;
                res.body.data.forEach((data) => {
                    expect(data.gender).to.eq('female')
                    expect(data.status).to.eq('active')
                });

            });
        });


    });


    describe('PUT', () => {
        it('PUT/Users/:id', () => {

            const data = {
                "status": "active",
                "gender": "female",
                "name": `Luffy123+ ${Math.floor(Math.random() * 9999)}`
            }

            return request
                .put(`users/${userid}`)
                .set("Authorization", `Bearer ${TOKEN}`)
                .send(data)
                .then(res => {
                    expect(res.body.data).to.deep.include(data)
                })

        });

    });

    describe('DELETE', () => {
        it('DELETE/User/:id', () => {
            return request
                .delete(`users/${userid}`)
                .set("Authorization", `Bearer ${TOKEN}`)
                .then(res => {
                    expect(res.body.data).to.be.eq(null)
                })
        });
    
    });


    


});