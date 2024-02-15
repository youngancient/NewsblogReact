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

export const setVariants ={
    initial :{
      scale: 0.9
    },
    final: {
      scale: 1,
      transition:{
        duration: 0.7,
      }
    }
  }
export const oneVariants ={
    initial :{
      y: -30,
    },
    final: {
      y: 0,
      transition:{
        duration: 0.7,
      }
    }
  }
  export const pVariants ={
    final: {
      transition:{
        staggerChildren: 0.65,
        delayChildren: 0.5,
      }
    }
  }