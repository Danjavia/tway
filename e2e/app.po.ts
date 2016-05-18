export class TwayPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tway-app h1')).getText();
  }
}
