import { WefavesWebappPage } from './app.po';

describe('wefaves-webapp App', () => {
  let page: WefavesWebappPage;

  beforeEach(() => {
    page = new WefavesWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
