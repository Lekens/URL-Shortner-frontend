import { PAGES } from 'constants/pages';

const getTabs = () => [
  {
    title: 'Shorten Url',
    url: PAGES.HOME.INDEX,
    redirect: PAGES.HOME.INDEX,
  },
  {
    title: 'Decode Url',
    url: PAGES.HOME.DECODE,
    redirect: PAGES.HOME.DECODE,
  },
  {
    title: 'List URLs',
    url: PAGES.HOME.LIST,
    redirect: PAGES.HOME.LIST,
  },
];

export const TABS = getTabs();
