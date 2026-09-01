const IMAGE_EXTENSIONS = /\.(webp|png|jpe?g|gif|svg)$/i;

export const resolveCakeImageSrc = (image) => {
  if (!image) {
    return '';
  }

  if (/^(https?:)?\/\//i.test(image) || image.startsWith('data:')) {
    return image;
  }

  if (image.startsWith('/')) {
    return image;
  }

  if (image.includes('/')) {
    return `/${image.replace(/^\/+/, '')}`;
  }

  const fileName = IMAGE_EXTENSIONS.test(image) ? image : `${image}.webp`;

  return `/assest/cake/${fileName}`;
};