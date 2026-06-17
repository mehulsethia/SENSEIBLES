'use client';

export type WorkItem = {
  id: string;
  title: string;
  textureUrl: string;
  pageUrl?: string;
};

const defaultPageUrl = 'https://senseibles.com/';

export const works: WorkItem[] = [
  { id: '1fi', title: '1Fi', textureUrl: '/works/1fi.png' },
  { id: 'banterbox', title: 'Banterbox', textureUrl: '/works/banterbox.PNG' },
  { id: 'bidx', title: 'Bidx', textureUrl: '/works/bidx.png' },
  { id: 'buzzdaddy', title: 'Buzzdaddy', textureUrl: '/works/buzzdaddy.png' },
  { id: 'content-depot', title: 'Content Depot', textureUrl: '/works/contentdepot.png' },
  { id: 'cream-money', title: 'Cream Money', textureUrl: '/works/creammoney.png' },
  { id: 'design-made-cool', title: 'Design Made Cool', textureUrl: '/works/designmadecool.png' },
  { id: 'divviit', title: 'Divviit', textureUrl: '/works/divviit.png' },
  { id: 'doughy', title: 'Doughy', textureUrl: '/works/doughy.png' },
  { id: 'edu-app', title: 'Edu App', textureUrl: '/works/eduappfigma.webp' },
  { id: 'fitness-mobile', title: 'Fitness Mobile App', textureUrl: '/works/fitnessmobileapp.webp' },
  { id: 'formcarry', title: 'Formcarry', textureUrl: '/works/formcarry.png' },
  { id: 'iconic-awards', title: 'Iconic Awards', textureUrl: '/works/iconicawards.png' },
  { id: 'imprint', title: 'Imprint', textureUrl: '/works/imprint.png' },
  { id: 'mantisa', title: 'Mantisa', textureUrl: '/works/mantisa.png' },
  { id: 'overdrive', title: 'Overdrive', textureUrl: '/works/overdrive.png' },
  { id: 'packaly', title: 'Packaly', textureUrl: '/works/packaly.png' },
  { id: 'suburbia', title: 'Suburbia', textureUrl: '/works/suburbia.png' },
  { id: 'suiteop', title: 'SuiteOP', textureUrl: '/works/suiteop.png' },
  { id: 'super-benji', title: 'Super Benji', textureUrl: '/works/superbenji.png' },
  { id: 'thirsty-dumplings', title: 'Thirsty Dumplings', textureUrl: '/works/thirstydumplings.png' },
  { id: 'twigspaper', title: 'Twigs Paper', textureUrl: '/works/twigspaper.png' },
  { id: 'we-are-ker', title: 'We Are Ker', textureUrl: '/works/weareker.png' },
  { id: 'wedmana', title: 'Wedmana', textureUrl: '/works/wedmana.png' },
].map((work) => ({
  ...work,
  pageUrl: defaultPageUrl,
}));

export default works;
