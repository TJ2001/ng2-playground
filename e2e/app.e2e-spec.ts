import { PlaygroundNg2Page } from './app.po';

describe('playground-ng2 App', function() {
  let page: PlaygroundNg2Page;

  beforeEach(() => {
    page = new PlaygroundNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
