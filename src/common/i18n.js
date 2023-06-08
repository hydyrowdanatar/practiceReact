import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'


const resources = {
    en: {
        translation: {
            'home_page': 'Home',
            'about_page': 'About Us',

            about: {
                'main': 'Example'
            },
            footer: {
                'home': 'Home',
                'home-menu': 'Home-menu'
            }
        }
    },
    tm: {
        translation: {
            'home_page': 'Bash sahypa',
            'about_page': 'Biz barada',

            about: {
                'main': 'Meselem'
            },
            footer: {
                'home': 'Bash',
                'home-menu': 'Bash-menyu'
            }
        }
    }
}

i18n.use(initReactI18next)
    .init({
        resources,
        lng: 'tm',

        interpolation: {
            escapeValue: false
        }
    })

export default i18n;