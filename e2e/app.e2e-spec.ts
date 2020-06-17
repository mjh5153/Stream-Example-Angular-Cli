import {} from 'jasmine';
import { AppPage } from './app.po';

describe('stream-example-angular-cli App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    page.getParagraphText().then((text) => { 
      expect(text).toEqual('Welcome to app!');
    });
  });
});
