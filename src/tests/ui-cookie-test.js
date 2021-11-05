// globally inject
const { CookiePage } = inject();

Feature('qatools.ro tricky stuff');

Scenario('Lazy set cookie', async ({ I }) => {
  I.amOnPage(CookiePage.url);
  I.see('Test Cookies', CookiePage.header);
  I.seeCookie('test-cookie');
  I.see('Hello testers!', CookiePage.cookieMessage);

  console.log(await CookiePage.getPageContent());
});
