import React, { useCallback, useState } from 'react';

import { useMovie } from '../../features/movie/hook';

import DefaultPoster from '../../assets/default_poster.png'

const DetailMovie = ({ match }) => {
    const [activeTab, setActiveTab] = useState('details');

    const {movie} = useMovie(match.params.id);

    const onChangeTab = useCallback((id) => () => {
        setActiveTab(id);
    }, []);

    if (!movie) {
        return (null);
    }

    return (
        <div className="row mt-5 justify-content-center h-100">
            <div className="col-md-2 p-3 ">
                <div className="row justify-content-center">
                    <img className="poster"  src={movie.Poster || DefaultPoster} alt="" data-testid="default-img"/>
                </div>
            </div>
            <div className="col-md-8 p-3">
                <div className="row">
                    <div className="col-md-10" style={{ paddingLeft: '20px' }}>
                        <h2>{movie.Title}</h2>
                        <span>{movie.Year}</span>
                        <span style={{ marginLeft: '10px' }}>Directed by <b>{movie.Director}</b></span>
                        <span className="badge bg-primary" style={{ marginLeft: '15px' }}>{movie.Rated}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="pt-3 w-75">
                            <p style={{ paddingLeft: '10px' }}>{movie.Plot}</p>
                        </div>

                        <ul className="nav nav-tabs mt-4" data-testid="nav-tabs">
                            <li className="nav-item">
                                <button onClick={onChangeTab('details')}
                                    className={activeTab === 'details' ? "nav-link active" : "nav-link"}>
                                        Details
                                    </button>
                            </li>
                            <li className="nav-item">
                                <button onClick={onChangeTab('cast')}
                                    className={activeTab === 'cast' ? "nav-link active" : "nav-link"}>
                                        Cast
                                    </button>
                            </li>
                            <li className="nav-item">
                                <button onClick={onChangeTab('genre')}
                                    className={activeTab === 'genre' ? "nav-link active" : "nav-link"}>
                                        Genre
                                    </button>
                            </li>
                        </ul>
                        <div className="row p-4">
                            {activeTab === 'cast' && <div className="col-md-12">
                                {movie.Actors && movie.Actors.map((actor, i) => <span class="badge bg-secondary m-1" key={i}>{actor}</span>)}
                            </div>}
                            {activeTab === 'details' && <div className="col-md-12">
                                <b>Languange: </b><p>{movie.Language}</p>
                                <b>Country: </b><p>{movie.Country}</p>
                                <b>Awards: </b><p>{movie.Awards}</p>
                                <b>Production: </b><p>{movie.Production}</p>
                                <b>BoxOffice: </b><p>{movie.BoxOffice}</p>
                            </div>}
                            {activeTab === 'genre' && <div className="col-md-12">
                                {movie.Genre && movie.Genre.map((gen, i) => <span class="badge bg-secondary m-1" key={i}>{gen}</span>)}
                            </div>}
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        {movie.Ratings && movie.Ratings.map((item, i) => (<div className="m-3 mt-0" key={i}>
                            <div className="d-flex align-items-end rating-title"><p>{item.Source}</p></div>
                            <span className="badge bg-primary">{item.Value}</span>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailMovie;