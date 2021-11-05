const { expect } = require('chai');

let accessToken;

Feature('API tests');

Scenario.skip('Cars info', async ({ I }) => {
  const response = await I.sendGetRequest('/testfiles/cars.json');
  expect(response.status).eq(200);
  expect(response.data, 'response is an array of 6')
    .is.an('array')
    .and.has.lengthOf(6);

  expect(response.data).deep.equals(require('../test-data/api/cars.json'));

  //console.log(JSON.stringify(response.data));
});

Scenario('Login', async ({ I }) => {
  const response = await I.sendPostRequest(
    '/api/login.php?username=tester&password=passw0rd',
  );

  expect(response.status).eq(200);

  accessToken = response.headers['access-token'];
  expect(accessToken).is.not.undefined;
});

Scenario('Fetching Names with authentication', async ({ I }) => {
  const response = await I.sendGetRequest('/api/names', {
    'access-token': accessToken,
  });

  expect(response.status).eq(200);

  expect(response.data).deep.equals([
    'Ford Fiesta',
    'BMW X5',
    'Porsche 911',
    'Lamborghini',
  ]);
});

Scenario('Fetching Names without authentication should fail', async ({ I }) => {
  const response = await I.sendGetRequest('/api/names');
  expect(response.status).eq(401);
  expect(response.statusText).eq('Unauthorized');
});
