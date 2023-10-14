import { Component } from 'solid-js'
import { ComponentType } from '../types'
import { SectionComponent } from '../components/Section'
import { FooterComponent } from '../components/Footer'
import { NavComponent } from '../components/Navbar'
import { BannerComponent } from '../components/Banner'
import { HeroWithSearch } from '../components/HeroWithSearch'

export const componentMapper: Record<ComponentType, Component<any>> = {
    section: SectionComponent,
    footer: FooterComponent,
    nav: NavComponent,
    banner: BannerComponent,
    hero: HeroWithSearch,
}
