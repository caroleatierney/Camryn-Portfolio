# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

npm run dev
npm run build
npm run deploy (tried to add to package.json and it was recursive)



add error page
https://reactrouter.com/en/main/start/tutorial

Add marketing image on home page

className="font-normal text:sm text-red-500 sm:text-3xl sm:text-amber-500 md:text-4xl md:text-yellow-200 lg:text-5xl lg:text-blue-500 bg-gray-200 text-gray-500 dark:text-gray-400 p-2 text-center"

  text-red-500 sm:text-amber-500 md:text-yellow-200 lg:text-blue-500 xl:text-green-500 

    // "build": "vite build --outDir build --base=/Camryn-Portfolio/",
  // { path: "/Camryn-Portfolio", element: <App />, errorElement: <ErrorPage /> },
  // { path: "/about", element: <About />, errorElement: <ErrorPage /> },


                // text-orange-500
                // tablet:text-purple-500
                // laptop:text-pink-500
                // desktop:text-blue-500
                // largeScreen:text-green-500

text-xxs smallestMobile:text-xxxs smallMobile:text-xxs smallMedMobile:text-sm tablet:text-sm laptop:text-xl desktop:text-2xl largeScreen:text-3xl

=================================

const CustomTheme = {
  carousel: {
    root: {
      base: {
        styles: {
          carousel: {
            position: "relative",
          },
          slide: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },
        },
        // base: "relative h-full w-full",
        control: {
          base: "absolute top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/75 dark:bg-gray-800/50 dark:hover:bg-gray-800/75 rounded-full p-2 cursor-pointer",
          prev: "left-4",
          next: "right-4",
        },
        indicators: {
          base: "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-3",
          item: "w-3 h-3 rounded-full transition-colors duration-300 bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800 cursor-pointer",
          active: "bg-white dark:bg-gray-800",
        },
        leftControl:
          "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
        rightControl:
          "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
      },
      indicators: {
        active: {
          off: "bg-backgroundGray hover:bg-backgroundGray dark:bg-gray-800/50 dark:hover:bg-gray-800",
          on: "bg-lightBorderGray dark:bg-red-500",
        },
        base: "h-3 w-3 rounded-full",
        wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
      },
      item: {
        base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
        wrapper: {
          off: "w-full flex-shrink-0 transform cursor-default snap-center",
          on: "w-full flex-shrink-0 transform cursor-grab snap-center",
        },
      },
      control: {
         base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-webPageBackground hover:bg-mediumGray focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-800/30 dark:hover:bg-gray-800/60 dark:focus:ring-gray-800/70 sm:h-10 sm:w-10",
         icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
       },
      scrollContainer: {
        base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
        snap: "snap-x",
      },
    },
  },
};

export default CustomTheme;

Seek community support: The Flowbite documentation and community forums might have additional resources or solutions for your specific use case. Don't hesitate to reach out and ask for help if you're still facing issues.

Break down the problem: Try to tackle the carousel customization in smaller, more manageable steps. For example, start by getting the indicators working correctly, then move on to the arrows, and finally integrate everything together.