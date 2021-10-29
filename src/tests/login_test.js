Feature('qatools.ro tricky stuff');

Scenario('Lazy set cookie', async ({ I }) => {
  I.amOnPage('http://qatools.ro/xcookie');
  I.see('Test Cookies', { css: 'h1' });
  I.seeCookie('test-cookie');
  I.grabCookie('test-cookie');
  I.see('Hello testers!', { css: '#cookieMessage' });
});
