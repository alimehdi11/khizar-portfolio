import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const projects = [
    {
      cat: "app",
      data: [
        {
          img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/app-1.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur",
        },
        {
          img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/app-2.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur",
        },
        {
          img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/app-3.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur",
        },
      ],
    },
    {
      cat: "product",
      data: [
        {
          img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/product-1.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur",
        },
        {
          img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/product-2.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur",
        },
        {
          img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/product-3.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur",
        },
      ],
    },
    {
      cat: "branding",
      data: [
        {
          img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/branding-1.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur",
        },
        {
          img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/branding-2.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur",
        },
        {
          img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/branding-3.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur",
        },
      ],
    },
    {
      cat: "book",
      data: [
        {
          img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/books-1.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur",
        },
        {
          img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/books-2.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur",
        },
        {
          img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/books-3.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(null);

  const openLightBox = (cat, idx) => {
    const selectedObj = projects.find((item) => item.cat === cat);
    setSelectedCategory(selectedObj);
    setCurrentImgIdx(idx);
  };

  const closeLightBox = () => {
    setSelectedCategory(null);
  };

  

  const nextSlide = () => {
    if (currentImgIdx !== null && currentImgIdx < selectedCategory.data.length - 1) {
      setCurrentImgIdx(currentImgIdx + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentImgIdx !== null &&  currentImgIdx > 0)
      setCurrentImgIdx(currentImgIdx - 1);
  };

  const contextValue = {
    selectedCategory,
    currentImgIdx,
    projects,
    openLightBox,
    closeLightBox,
    nextSlide,
    prevSlide,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
