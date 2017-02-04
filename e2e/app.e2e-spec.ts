import { MpfCompareClientPage } from './app.po';

describe('mpf-compare-client App', function() {
  let page: MpfCompareClientPage;

  beforeEach(() => {
    page = new MpfCompareClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
