import Loading from '../../../assets/loading.gif';
import React from "react";

const MovieItem = ({ item, idx, elementRef, records, onImageClick, onBodyClick }) => {
    let itemRef = {}

    if (records === idx + 5) {
        itemRef.ref = elementRef;
    }

    return (
            <div className="col-8 col-sm-4 col-md-2 col-lg-2 m-2" key={idx} {...itemRef}>
                <div className="card border-2 rounded-5">
                    <img className="card-img-top img-poster poster" onClick={onImageClick(item)}
                         alt={'poster'}
                         src={item.Poster || Loading} data-testid="infinitescroll-img"/>
                    <div className="card-body"
                         onClick={onBodyClick(item.imdbID)}
                    style={{
                        backgroundColor: '#313131',
                        opacity: 0.5,
                        color: '#e5bf16',
                        position: 'relative',
                    }}
                    >
                        <h5 className="card-title text-truncate">{item.Title}</h5>
                        <span className="text-capitalize">{item.Type}</span> — {item.Year}
                    </div>
                </div>
            </div>


    )
}

export default MovieItem;
