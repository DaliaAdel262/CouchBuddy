import { ContextMovies } from '../Store';
import React, { useEffect, useState, useContext } from 'react'
import PeopleCard from '../Home/component/PeopleCard';

export default function People() {

  let {people, setPage} = useContext(ContextMovies);

  return (
    <>
      <div className='row gy-2 py-5'>
        {people.map((people,i)=>(
          <PeopleCard key={i} people={people} />
        ))}
      </div>
      <nav aria-label="Page navigation example">
          <ul className="pagination d-flex justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true" className='text-white'>&laquo;</span>
              </a>
            </li>
            <li className="page-item" onClick={()=>{setPage(1)}}><a className="page-link text-white" href="#" >1</a></li>
            <li className="page-item" onClick={()=>{setPage(2)}}><a className="page-link text-white" href="#" >2</a></li>
            <li className="page-item" onClick={()=>{setPage(3)}}><a className="page-link text-white" href="#" >3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true" className='text-white'>&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
    </>
  )
}
