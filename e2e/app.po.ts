export class AngularTwoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-two-app h1')).getText();
  }
}
