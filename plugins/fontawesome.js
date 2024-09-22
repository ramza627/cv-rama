// plugins/fontawesome.js

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faDribbble, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebookF, faTwitter, faDribbble, faLinkedin, faInstagram)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
