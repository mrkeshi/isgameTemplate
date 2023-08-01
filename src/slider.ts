import Swiper, {
    SwiperPluginLazyload,
    SwiperPluginPagination
} from 'tiny-swiper'

Swiper.use([ SwiperPluginLazyload, SwiperPluginPagination ])

const swiper = new Swiper(document.getElementById('swiper-container') as HTMLElement | string)