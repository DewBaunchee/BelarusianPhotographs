import i18next from 'i18next'
import Backend from 'i18next-http-backend';
import Cache from 'i18next-localstorage-cache';
import {initReactI18next} from 'react-i18next'

i18next
    .use(Backend)
    .use(Cache)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        returnObjects: true,
        detection: {
            order: ['queryString', 'cookie'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false
        }
    })

export default i18next;