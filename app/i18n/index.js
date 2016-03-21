import i18n from 'i18next'
import XHR from 'i18next-xhr-backend'
// import LngDetector from 'i18next-browser-languagedetector'

const DEFAULT_LANGUAGE = 'zh'

const loadLocales = done => (lng, options, callback, data) => {
  try {
    let requestLocale = require(`bundle!./locales/${lng}/index.js`)

    requestLocale((locale) => {
      callback(locale, {status: '200'})
      i18n.removeResourceBundle(lng, 'translation')
      Object.keys(locale).forEach(key => {
        i18n.addResourceBundle(lng, key, locale[key], true, true)
      })
      done(i18n)
    })
  } catch (e) {
    callback(null, {status: '404'})
  }
}

const load = (done) => {
  i18n
    .use(XHR)
    // .use(LngDetector)
    .init({
      lng: DEFAULT_LANGUAGE,
      fallbackLng: DEFAULT_LANGUAGE,
      fallbackNS: 'common',
      defaultNS: ['common'],
      debug: __DEV__,
      returnObjects: true,
      interpolation: {
        escapeValue: false // not needed for react!!
      },
      parseMissingKeyHandler: () => null,
      backend: {
        loadPath: '{{lng}}',
        parse: (data) => data,
        ajax: loadLocales(done)
      }
    })
}

export { DEFAULT_LANGUAGE, load }
export default i18n
