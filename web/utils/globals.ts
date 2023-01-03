import type { PlaceholderImageGetter } from "../types";

export const getPlaceholderImage: PlaceholderImageGetter = size => `https://via.placeholder.com/${size}x${size}`;
