const images = import.meta.glob('/src/assets/images/**/*', { eager: true });

export const dynamicImage = (image: string | undefined) => {
  return images[`/src/assets/images/${image}`];
};
