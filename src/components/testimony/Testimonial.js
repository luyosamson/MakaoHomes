import React, {useState, useEffect} from "react"
import './Testimonial.css'
import data from "../../data"



const Testimonial = () => {
    const [people] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length -1;
        if(index < 0) {
            setIndex(lastIndex);
        }

        if(index > lastIndex) {
            setIndex(0);
        }

    }, [index, people]);

    useEffect(() => {
       let testimonial =setInterval(() => {
         setIndex(index + 1)
       }, 5000)

       return () => {
        clearInterval (testimonial)
     }
    }, [index])

   
    return (
        <div className="testimony">
        <section className="section">
           <div className="title">

           <h2>New Clients</h2>
           
           </div>

           <div className="section-center">
             {people.map((item, indexPeople) => {

                const {id, image, name, title, quote} = item;

                let position = "nextSlide";

                if(indexPeople === index) {
                    position = "activeSlide"
                }

                if(indexPeople === index -1 || (index === 0 && indexPeople === people.length-1)) {
                    position = "lastSlide"
                }

                return (
                    <article className={position} key={id}>
                    <img src={image} alt={name} className="person-img"/>
                    <h4>{name}</h4>
                    <p className="title">{title}</p>
                    <p className="text">{quote}</p>
                    
                    </article>
                )
             })}
             <button className="prev" onClick={() => setIndex(index - 1)}>
               <i className="fa fa-arrow-right"/>
             </button>
             <button className="next" onClick={() => setIndex(index + 1)}>
             <i className="fa fa-arrow-right"/>
           </button>
           </div>
        </section>

        </div>
    )
}



export default Testimonial