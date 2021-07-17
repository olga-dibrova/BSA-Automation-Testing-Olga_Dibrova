const { expect } = require('chai');

const rundomNumber = () => Date.now();

// Login 
describe('Login:', function () {

    it('should be able to login', async function () {
  
      await browser.setWindowSize(1440, 960);
      await browser.url('/sign-in');
  
      const emailField = await $('input[name="email"]');
      const passwordField = await $('input[name="password"]');
  
      const signInButton = await $('button');
  
      await emailField.waitForDisplayed({ timeout: 5000 });
      await emailField.setValue(`john_admin1@admin.com`);
  
      await passwordField.waitForDisplayed({ timeout: 5000 });
      await passwordField.setValue('Pa55word');
  
      await signInButton.waitForDisplayed({ timeout: 5000 });
      await signInButton.click();
  
      await browser.waitUntil(
        async function () {
          const url = await browser.getUrl();
          return url === 'http://46.101.234.121/doctors';
        },
        { timeout: 5000 },
      );
  
      const url = await browser.getUrl();
      expect(url).to.be.eql('http://46.101.234.121/doctors');
      
      await browser.reloadSession();
    });
  });

// Login invalid data
  describe('LoginNO:', function () {

    it('should not be able to login', async function () {
  
      await browser.setWindowSize(1440, 960);
      await browser.url('/sign-in');
  
      const emailField = await $('input[name="email"]');
      const passwordField = await $('input[name="password"]');
  
      const signInButton = await $('button');
  
      await emailField.waitForDisplayed({ timeout: 5000 });
      await emailField.setValue(`solgmail.com`);
  
      await passwordField.waitForDisplayed({ timeout: 5000 });
      await passwordField.setValue('Password');
  
      await signInButton.waitForDisplayed({ timeout: 5000 });
      await signInButton.click();
  
      await browser.waitUntil(
        async function () {
          const url = await browser.getUrl();
          return url === 'http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265';
        },
        { timeout: 5000 },
      );
  
      const url = await browser.getUrl();
      expect(url).to.be.eql('http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265');
      
      await browser.reloadSession();
    });
  });

// change info test
describe('Change data:', function () {

  it('should be able to change info in profile', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`john_admin1@admin.com`);
  
    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');
   
    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    it('should click menu profile', () => {
      const link = $$('#My Profile')
      link.click()
      })

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265';
      },
      { timeout: 5000 },
    );

    const editProfile = $('Profile')
    editProfile.click()

    const phoneField = await $('input[name="phone"]');
    const editBt = $('Edit')

    await phoneField.waitForDisplayed({ timeout: 5000 });
    await phoneField.setValue('380077777');

    await editBt.waitForDisplayed({ timeout: 5000 });
    await editBt.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265');
    
    await browser.reloadSession();
  });
});
