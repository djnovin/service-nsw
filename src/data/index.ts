import { DefaultArrow } from '../components/Icons';
import { CardLabel, ComponentData } from '../types';

export const data: ComponentData[] = [
  {
    _type: 'nav',
    navItems: ['Home', 'About', 'Contact'],
  },
  {
    _type: 'section',
    title: 'Browse services',
    cards: [
      {
        label: CardLabel.BirthsRelationshipsDeaths,
        arrow: DefaultArrow,
      },
      {
        label: CardLabel.BusinessIndustriesEmployment,
        arrow: DefaultArrow,
      },
      {
        label: CardLabel.DrivingTransport,
        arrow: DefaultArrow,
      },
    ],
  },
  {
    _type: 'banner',
    bannerTitle: 'ACKNOWLEDGEMENT OF COUNTRY',
    bannerText:
      'We acknowledge the Traditional Custodians of NSW, and their continued connection to land, water and culture. We pay our respects to Elders past and present.',
  },
  {
    _type: 'footer',
    footerLinks: [
      {
        label: 'About',
        href: '#',
      },
      {
        label: 'Contact',
        href: '#',
      },
      {
        label: 'Privacy',
        href: '#',
      },
      {
        label: 'Jobs at Service NSW',
        href: '#',
      },
      {
        label: 'News',
        href: '#',
      },
      {
        label: 'Download the Service NSW app',
        href: '#',
      },
      {
        label: 'Phone 13 77 88',
        href: '#',
      },
      {
        label: 'Find a Service NSW location',
        href: '#',
      },
    ],
  },
  {
    _type: 'footer',
    footerLinks: [
      {
        label: 'Acessibility',
        href: '#',
      },
      {
        label: 'Privacy Policy',
        href: '#',
      },
      {
        label: 'Copyright and disclaimer',
        href: '#',
      },
      {
        label: 'Accessing Information',
        href: '#',
      },
      {
        label: 'NSW Government',
        href: '#',
      },
    ],
  },
];
