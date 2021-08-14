import Loading from '../../../assets/loading.gif';
import React from "react";

const MovieItem = ({ item, idx, elementRef, records, onImageClick, onBodyClick }) => {
    let itemRef = {}

    if (records === idx + 5) {
        itemRef.ref = elementRef;
    }

    return (
    <div className="py-5 bg-light">
        <div className="container">
            <div className="col-8 col-sm-4 col-md-2 col-lg-2 m-2 " key={idx} {...itemRef} >
                <div className="col">
                    <div className="card border-2 rounded-2 shadow-sm">
                        <img className="card-img-top img-poster poster"
                             alt={'poster'}
                             src={item.Poster || Loading} data-testid="infinitescroll-img"
                             onClick={onImageClick(item)}
                        />

                        <div className="card-body " onClick={onBodyClick(item.imdbID)}>
                            <h5 className="card-title text-truncate">{item.Title}</h5>
                            <span className="text-capitalize">{item.Type}</span> — {item.Year}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MovieItem;
