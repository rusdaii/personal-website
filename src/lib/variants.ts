export const imageVariant = (x: number) => {
  const variant = {
    initial: {
      x: x,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return variant;
};

export const textVariant = (x: number, y: number) => {
  const textVariants = {
    initial: {
      x: x,
      y: y,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return textVariants;
};

export const scrollButtonVariant = () => {
  textVariant(500, 0);

  return {
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
};

export const titleVariant = () => {
  const headerVariants = {
    initial: {
      x: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        delay: 1,
      },
    },
  };

  return headerVariants;
};
