const CustomTheme = {
  carousel: {
    root: {
      base: "relative h-full w-full",
      leftControl:
        "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
      slide: "absolute top-0 left-0 w-100% h-100% object-contain",
    },

    control: {
      base: "inline-flex h-12 w-12 items-center justify-center rounded-full bg-webPageBackground hover:bg-mediumGray focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-800/30 dark:hover:bg-gray-800/60 dark:focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-8 w-8 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },

    // indicators: {
    //     active: {
    //       off: "bg-red hover:bg-backgroundGray dark:bg-gray-800/50 dark:hover:bg-gray-800",
    //       on: "bg-blue dark:bg-red-500",
    //     },
    // },

    // indicators: {
    //   base: "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-3",
    //   item: "w-3 h-3 rounded-full transition-colors duration-300 bg-red-500 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800 cursor-pointer",
    //   active: "bg-blue-500 dark:bg-gray-800",
    // },

    // indicators: {
    //   active: {
    //     off: "bg-red hover:bg-backgroundGray dark:bg-gray-800/50 dark:hover:bg-gray-800",
    //     on: "bg-blue dark:bg-red-500",
    //   },
    //   base: "h-3 w-3 rounded-full",
    //   wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
    // },
  },
};

export default CustomTheme;