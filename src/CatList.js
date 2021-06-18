import React from 'react'

export default function CatList(props) {
    const cats = props.catPics.map(pic => <img src={pic.url} alt="" key={pic.id}/>)

    return (
        <div>
            {props.loading ? <h3>Loading</h3> : cats}
        </div>
    )
}