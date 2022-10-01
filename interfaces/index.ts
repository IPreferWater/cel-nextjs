// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type Post = {
  id: string,
  title: string
date: string
component: string
description: string
category: string
icon: string
}

export type Product = {
  name: string
  price: number
  image: string
  sku: string
  currency: string
  id: string
}

export type Creation = {
  title: string
  date: number
  informations: IInformations
  imgs: Array<string>
}

export type IInformations = {
  story: IStory
  realisation: IRealisation
}

export type IStory = {
  origins: Array<ICaseInformation>
}

export type IRealisation = {
  sketchs: Array<ICaseInformation>
  patterns: Array<ICaseInformation>
  sewings: Array<ICaseInformation>
  costs: Array<string>
}

export type ICaseInformation = {
  txt: string
  img: string
}


export type IPlanning = {
  title: string
  days: Array<IPlanningDay>
}

export type IPlanningDay = {
  day: number
  events: Array<IPlanningEvent>
}

export type IPlanningEvent = {
  type: string
  start: string
  end: string
  label: string
  participants?: IPlanningParticipants
}

export type IPlanningParticipants = {
  max: number
  booked: number
}

export type IPlanningTitle = {
  id: string
  title: string
}
