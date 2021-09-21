import supertest from 'supertest';
const request = supertest('https://xkcd.com/614/');

import { expect } from 'chai';

describe('API test TestSuite', () => {
  it('GET /response/title', () => {
    return request.get('info.0.json').then((res) => {
      expect(res.body).to.not.be.empty;  // Body not be empty
      expect(res.body.title).to.exist    // Title should be exist
      expect(res.body.title).to.not.be.empty;  // Title should not be empty
      expect(res.body.title).to.eql('Woodpecker')  // Title should be "Woodpecker"
    });
  })
})