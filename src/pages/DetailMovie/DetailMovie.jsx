import React, { useCallback, useState } from 'react';

import { useMovie } from '../../features/movie/hook';

import Loading from '../../assets/loading.gif'

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
        <div className="row justify-content-center h-100"
             style={{backgroundColor: '#1f1f1f', color: 'white', fontWeight: 'bold', fontSize: '15'}}>
            <div className="col-md-2 p-3 ">
                <div className="row justify-content-center">
                    <img className="poster"  src={movie.Poster || Loading} alt="" data-testid="default-img"/>
                </div>
            </div>
            <div className="col-md-8 p-3">
                <div className="row">
                    <div className="col-md-10" style={{ paddingLeft: '20px' }}>
                        <h2>{movie.Title}</h2>
                        <span>{movie.Year}</span>
                        <span style={{ marginLeft: '10px' }}>Directed by <b>{movie.Director}</b></span>
                        <span className="badge bg-warning" style={{ marginLeft: '15px' }}>{movie.Rated}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="pt-3 w-75">
                            <p style={{ paddingLeft: '10px' }}>{movie.Plot}</p>
                        </div>

                        <ul className="nav nav-tabs mt-4" data-testid="nav-tabs">
                            <li className="nav-item bg-warning rounded-2">
                                <button onClick={onChangeTab('details')}
                                        style={{color: 'black'}}
                                    className={activeTab === 'details' ? "nav-link active" : "nav-link"}>
                                        Details
                                    </button>
                            </li>
                            <li className="nav-item bg-warning rounded-2">
                                <button onClick={onChangeTab('cast')}
                                        style={{color: 'black'}}
                                    className={activeTab === 'cast' ? "nav-link active" : "nav-link"}>
                                        Cast
                                    </button>
                            </li>
                            <li className="nav-item bg-warning rounded-2">
                                <button onClick={onChangeTab('genre')}
                                        style={{color: 'black'}}
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
                            <span className="badge bg-warning">{item.Value}</span>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailMovie;
