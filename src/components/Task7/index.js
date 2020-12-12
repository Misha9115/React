import React from "react";
import { ImageSlider } from "react-simple-gallery";
import "react-simple-gallery/dist/index.css";
 
export default function demoComponent  (props)  {

  const data =[
    { title: "Image Title", src="url/to/your/Image" },
    { title: "Image Title", src="url/to/your/Image" },
  ]
  ggg =()=>{}
  return (
    <div>
      <ImageSlider data={data} />
    </div>
  )
}