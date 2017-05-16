import { FormJmPage } from './app.po';

describe('form-jm App', () => {
  let page: FormJmPage;

  beforeEach(() => {
    page = new FormJmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
