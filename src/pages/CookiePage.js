const { I } = inject();

module.exports = {
  url: 'http://qatools.ro/xcookie',

  // LOCATORS
  page: 'body',
  pageHeader: { css: 'h1' },
  cookieMessage: { css: '#cookieMessage' },

  // ACTIONS
  async getPageContent() {
    await I.waitForVisible(this.cookieMessage);
    const message = await I.grabTextFrom(this.cookieMessage);
    const title = await I.grabTextFrom(this.pageHeader);
    return { title, message };
  },
};
