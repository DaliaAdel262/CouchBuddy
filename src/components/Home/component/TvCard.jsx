import React from 'react';
import {Link} from 'react-router-dom'
import imgPath from '../../../constfunction/imgPath';
import placeholder from '../../../images/image-placeholder.png';
import { motion } from "framer-motion";

export default function TvCard({tv}) {
  return (
    
        <motion.div 
        whileHover={{ scale: 1.1 }}
        initial={{  x: -100, opacity:0 }}
        animate={{ x:0, opacity:1 }}
        transition={{ 
          opacity: { duration: 1, ease: "easeInOut" }, 
          x: {duration:1, ease:"easeInOut"}
        }}
        className="col-xl-2 col-lg-3 col-md-6" role='button'>
          <Link to={`/details/tv/${tv.id}`}>
            <div className="w-100 p-3">
              <div className="img-style">
                <img src={tv?.poster_path ? imgPath(tv.poster_path):placeholder} alt="" className='w-100 h-100'/>
              </div>
              <h2 className="text-truncate mt-3" data-toggle="tooltip" data-placement="start" title={tv.title==undefined ? tv.name : tv.title}>
                {tv.title==undefined ? tv.name : tv.title}
              </h2>
            </div>
          </Link>
        </motion.div>
      
  )
}