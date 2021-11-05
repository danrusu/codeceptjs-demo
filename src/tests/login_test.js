// globally inject
const { CookiePage } = inject();

Feature('qatools.ro tricky stuff');

Scenario('Lazy set cookie', async ({ I }) => {
  await I.amOnPage(CookiePage.url);
  await I.see('Test Cookies', CookiePage.header);
  await I.seeCookie('test-cookie');
  await I.see('Hello testers!', CookiePage.cookieMessage);

  console.log(await CookiePage.getPageContent());
});
