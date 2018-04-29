import { ApclPage } from './app.po';

describe('apcl App', () => {
  let page: ApclPage;

  beforeEach(() => {
    page = new ApclPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
