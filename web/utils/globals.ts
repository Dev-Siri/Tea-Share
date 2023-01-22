import type { BannerImageGetter } from "../types";

/**
 * @param size - Size of the image Width to Height
 * @param categories - List of categories for the image to be related to.
 * @returns A url that can be used in an `<Image />` component
 */
export const getBannerImage: BannerImageGetter = (size, categories) => {
  const [width, height]: [number, number] = size;
  const categoriesAsString: string = categories.join(",");

  return `https://source.unsplash.com/${width}x${height}/?${categoriesAsString}`;
};
