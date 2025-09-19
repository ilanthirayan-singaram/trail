import { HeaderComponent } from '../general/header/header.component';
import { FooterComponent } from '../general/footer/footer.component';
import { AlertComponent } from '../common/alert/alert.component';
import { LoaderComponent } from '../common/loader/loader.component';


import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';

// Default swiper config
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

export const SHARED_IMPORTS = [
  SwiperModule,
  HeaderComponent,
  FooterComponent,
  AlertComponent,
  LoaderComponent
];

export const SWIPER_PROVIDERS = [
  { provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG }
];
