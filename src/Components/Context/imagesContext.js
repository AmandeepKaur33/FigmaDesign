import React, { createContext, useState, useRef, useEffect, useReducer } from "react";
import ImgReducer from "../Reducers/imageReducer";

const ImagesContext = createContext();
const initialData = {
    imgSrc: "",
    images:  JSON.parse(localStorage.getItem("img")) || []
}
const ImagesProvider = ({ children }) => {
    const [containerClass] = useState("image-container");
    const [state, dispatch] = useReducer(ImgReducer, initialData);
    const containerRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(()=>{
        localStorage.setItem("img", JSON.stringify(state?.images));
    },[state?.images])

    const btnPrev = () => {
        if (containerRef.current) {
            let width = containerRef.current.clientWidth;
            containerRef.current.scrollLeft -= width;
        }
    };

    const btnNext = () => {
        if (containerRef.current) {
            let width = containerRef.current.clientWidth;
            containerRef.current.scrollLeft += width;
        }
    };
    const handleImgChange = (e) => {
        const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch({
          type: "INPUT_CHANGE",
          field: e.target.name,
          value: reader.result,
        });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    }
    console.log(state?.imgSrc,state?.images);
    
    const handleAddImages= (e) => {
        inputRef.current.click();
        e.preventDefault();
        if (state?.imgSrc) {
          const existingData = JSON.parse(localStorage.getItem("img")) || [];
        const payload = [
          ...existingData,
          state?.imgSrc
        ];
        
        dispatch({ type: "SUBMIT", images: payload });
        }
      console.log(state?.images);
      
    }
    return (
        <ImagesContext.Provider value={{ state, btnPrev, btnNext, containerClass, containerRef, inputRef, handleImgChange ,handleAddImages }}>
            {children}
        </ImagesContext.Provider>
    );
}

export { ImagesContext, ImagesProvider };
