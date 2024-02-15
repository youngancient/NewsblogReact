export const slideVariants = {
    right: {
      x: "100vw",
    },
    final: {
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      x: "100vw",
      transition: {
        duration: 0.6,
      },
    },
  };

export const PopupVariant ={
    initial: {
        opacity: 0,
      },
      final: {
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      },
}