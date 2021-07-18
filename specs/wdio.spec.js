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

// change clinic and specialisation
describe('Change data:', function () {

  it('should be able to change info in profile', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');
    const saveBt = await $('styles_btn___s1BB styles_without-border__3Vbp3 styles_primary-dark__1WnyR')
    const specialisationDdl = await $('div.selectStyles__single-value css-1uccc91-singleValue=UCSF Medical Center');
    const pediatricianOption = await $('div.selectStyles__input=pediatrician');


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
      },
      { timeout: 5000 },
      );

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265';
      },
      { timeout: 5000 },
    );
    
    it('should click edit profile', () => {
      const editProfile = $$('Profile')
      editProfile.click()
      },
      { timeout: 5000 },
      );
  
    await pediatricianOption.waitForDisplayed({ timeout: 5000 });
    await pediatricianOption.click();

    await saveBt.waitForDisplayed({ timeout: 5000 });
    await saveBt.click();

    await specialisationDdl.waitForDisplayed({ timeout: 5000 });
    await specialisationDdl.click();

    await saveBt.waitForDisplayed({ timeout: 5000 });
    await saveBt.click();

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

// new clinic
describe('Add clinic:', function () {

  it('should be able to add new clinic', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');
    const addBtn = await $$('Add')
    const submitBtn = await $$('Add')
    const clinicCont= $('styles_cardContainer__qjzSj')


    const clinicnameField = await $('input[name="name"]');
    const addressField = await $('input[name="surname"]');
   
    const statusDdl = ddls[0];
    const cityDdl = ddls[1];

    const stateOption = await $('div.selectStyles__option=state');
    const cityOption = await $('div.selectStyles__option=New York, NY');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`john_admin1@admin.com`);
  
    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');
   
    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/clinics';
      },
      { timeout: 5000 },
    );

    await addBtn.waitForDisplayed({ timeout: 5000 });
    await addBtn.click();

    await clinicnameField.waitForDisplayed({ timeout: 5000 });
    await clinicnameField.setValue('Universal Dental');

    await addressField.waitForDisplayed({ timeout: 5000 });
    await addressField.setValue('3th Street. 47 W 13th St');

    await statusDdl.waitForDisplayed({ timeout: 5000 });
    await statusDdl.click();

    await stateOption.waitForDisplayed({ timeout: 5000 });
    await stateOption.click();

    await cityDdl.waitForDisplayed({ timeout: 5000 });
    await cityDdl.click();

    await cityOption.waitForDisplayed({ timeout: 5000 });
    await cityOption.click();

    await submitBtn.waitForDisplayed({ timeout: 5000 });
    await submitBtn.click();

    expect(clinicCont.styles_title__3xRcc).to.be.eql('Universal Dental');
    
    await browser.reloadSession();
  });
});
