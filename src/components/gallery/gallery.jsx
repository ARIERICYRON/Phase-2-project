import {useState,useEffect} from 'react'
import './gallery.css';

function Gallery() {
  const [weddingPhotos, setWeddingPhotos] = useState([])

  useEffect(() => {
    fetch("http://localhost:8004/images")
    .then(response => response.json())
    .then((data) => {
      setWeddingPhotos(data)
    
    })
  }, [])

  const image=weddingPhotos.map((image)=>(
    <img src={image.image} alt="" key={image.id}/>
  ))

  return (
    <div className="toggle_contain">
     {image}
    </div>
  );
}


export default Gallery;
