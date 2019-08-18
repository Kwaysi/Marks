import { images } from "../Assets/images/Logos";

export const getAllBrands = () => {
  let keys = [];
  for (var key in images) {
    keys.push(key.slice(0, -4));
  }
  return keys;
};

export const allBrands = getAllBrands();

const setBrandDetails = () => {
  let brands = [];
  for (var key in images) {
    brands.push({name: key.slice(0, -4), icon: images[key]});
  }
  return brands;
}

export const brandDetails = setBrandDetails();