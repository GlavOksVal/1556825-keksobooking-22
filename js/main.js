// import './create-array-ads.js';
// import { generateSimilarAdsMarkup } from './generate-similar-ads-markup.js';
// generateSimilarAdsMarkup();

import { createRentAds } from './create-array-ads.js';
import { generateAdsMarkup } from './generate-ads-markup.js';
import './form.js';

const FROM_AD_COUNT = 0;
const TO_AD_COUNT = 1;

const ads = createRentAds().slice(FROM_AD_COUNT, TO_AD_COUNT);

generateAdsMarkup(ads);
