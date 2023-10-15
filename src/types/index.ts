import { JSX, JSXElement } from 'solid-js';

export type ComponentType = 'section' | 'footer' | 'nav' | 'banner' | 'hero';

export type HeroData = {
    _type: 'hero';
};

export type SectionData = {
    _type: 'section';
    title: string;
    cards: CardData[];
};

export type FooterData = {
    _type: 'footer';
    footerLinks: {
        label: string;
        href: string;
    }[];
};

export type NavData = {
    _type: 'nav';
    navItems: string[];
};

export type BannerData = {
    _type: 'banner';
    bannerTitle: string;
    bannerText: string;
};

export type ComponentData =
    | SectionData
    | FooterData
    | NavData
    | BannerData
    | HeroData;

export enum CardLabel {
    BirthsRelationshipsDeaths = 'Births, relationships and deaths',
    BusinessIndustriesEmployment = 'Business, industries, and employment',
    ConcessionsRebatesAssistance = 'Concessions, rebates and assistance',
    DrivingTransport = 'Driving and transport',
    HealthCare = 'Health and care',
    HousingProperty = 'Housing and property',
    LegalPoliceServices = 'Legal and police services'
}

export type Data = {
    cards: CardData[];
    title: string;
};

export type CardData = {
    arrow?: JSXElement;
    icon?: JSX.Element;
    label: Partial<CardLabel>;
};
