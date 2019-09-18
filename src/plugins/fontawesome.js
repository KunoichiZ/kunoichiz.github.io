import Vue from 'vue'
import { library, config, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(fas, far, fab);
dom.watch();

Vue.component('font-awesome-icon', FontAwesomeIcon);