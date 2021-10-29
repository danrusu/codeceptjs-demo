const { I } = inject();

module.exports = {
  // LOCATORS

  url: 'http://qatools.ro/xcookie',
  page: 'body',
  pageHeader: { css: 'h1' },
  cookieMessage: { css: '#cookieMessage' },

  // ACTIONS
  async getPageContent() {
    await I.waitForVisible(this.cookieMessage);
    const message = await I.grabTextFrom(_this.cookieMessage);
    const title = await I.grabTextFrom(_this.pageHeader);
    return { title, message };
  },
};
