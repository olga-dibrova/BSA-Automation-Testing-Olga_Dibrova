const { expect } = require('chai');
const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();

describe('Registration:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-up');
  });

  afterEach(async function () {
    await browser.reloadSession();
  });

  it('should be able to register doctor', async function () {
    await app.authPage.register({
      name: `John${rundomNumber()}`,
      surname: 'Doctor',
      email: `marcus${rundomNumber()}@gmail.com`,
      password: 'Pa55word',
      phone: '380999999',
      birthDate: '11/11/2000',
      status: 'doctor',
      gender: 'female',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
  });
});
