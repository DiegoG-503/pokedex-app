import React from 'react'

export default function Card({data}) {
  return (
    <div className='col' style={{display: 'inline-block'}}>
        <div className="card m-4 p-2">
            <img src={data.sprites.front_default} className="card-img-top" alt={data.name} />
            <div className="card-body">
                <h5 className="card-title">{data.moves.name}</h5>
                <p className="card-text">{data.height}</p>
                <p className="card-text">{data.types.weight}</p>
                <p className="card-text">{data.species}</p>
            </div>
        </div>
    </div>
  )
}
