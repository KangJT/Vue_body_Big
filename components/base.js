import Footer from './footer/footer'
import {SwiperIn, Banner} from './banner/index'
import TabCheck from './tabCheck/tabCheck'
import { Lists, ListX, ListY } from './listComponent/index'
import Alerts from './alertComponent/alerts'
import Button from './btnComponent/btnComponent'
const Components = {
  Footer,
  SwiperIn,
  Banner,
  TabCheck,
  Lists,
  ListX,
  ListY,
  Alerts,
  Button
}
export default {
  install (Vue) {
    for (let i in Components) {
      Vue.component(i, Components[i])
    }
  }
}
