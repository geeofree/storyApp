import { StoryAppPage } from './app.po';

describe('story-app App', () => {
  let page: StoryAppPage;

  beforeEach(() => {
    page = new StoryAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
