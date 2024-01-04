interface Dict {
    [key: string]: any
}

const dictionaries: Dict = {
    "en": () => import('./en.json').then((module) => module.default),
    "pt-br": () => import('./pt-br.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => dictionaries[locale]()