import { TwayPage } from './app.po';

describe('tway App', function() {
  let page: TwayPage;

  beforeEach(() => {
    page = new TwayPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tway works!');
  });
});
