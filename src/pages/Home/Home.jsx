import React, { useCallback, useState,useEffect } from 'react';
import {useHistory} from 'react-router-dom';

import { useMovies } from '../../features/movie/hook';
import { debounce } from '../../utils/utils';

import InfiniteScrolls from '../../components/InfiniteScroll/InfiniteScroll';
import Modal from '../../components/Modal/Modal';

import '../../App.css';
import Loading from '../../assets/loading.gif';
import Video from '../../assets/Video2.mp4';


const Apps = () => {
  const [visible, setVisible] = useState(false);
  const [selectedMovie, setMovie] = useState(null);
  const [inputMovie, setInputMovie] = useState()
  const history = useHistory();
  const { movies, setSearchTerm, loading, onLoadMore, setPage } = useMovies();

  useEffect(() => {
    setSearchTerm('Batman');
    setPage(1)
  }, []);


  const hasMoreData = movies.length < 1000;

  const openDetail = useCallback((id) => () =>{
    history.push('/detail/' + id);
  }, [history]);

  const toggleModal = useCallback(() => {
    setVisible(!visible);
  }, [visible])

  const showImage = useCallback((movie) => () => {
      /**
       * function to open the modal from each element data
       */
    toggleModal();
    setMovie(movie)
  }, [toggleModal])

  const onQueryChange = ((e) => {
      /**
       * function to change the input movie state based on user input
       */
      setInputMovie(e.target.value)
  });

  const onButtonClick = useCallback(() => {
    /**
     * function to change the input movie state based on user click button
     * will reset the page if there is new value omitted
     */
    setSearchTerm(inputMovie);
    setPage(1);
  },[inputMovie, setPage, setSearchTerm])


  return (
    <div className="row">
      <section className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-2 fw-bolder text-warning mb-2">mymovie.com</h1>
                <h1 className="display-5 fw-bolder text-white mb-2">Kami Hadir Untuk Anda</h1>
                <p className="lead fw-normal text-white-50 mb-4">Kebosanan pasti ada ya... , Nah untuk menghilangan kebosanan apalagi anda
                  banyak disibukan bekerja dirumah selama pandemi COVIC-19 ini dan pasti jenuh sekali. Nah MyMovie.com hadir
                  untuk membunuh rasa bosan anda dan ditemani film favorit anda, yuk segara cari film kesayangan anda disini</p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <input
                      value={inputMovie}
                      name="input"
                      type="text"
                      className="form-control"
                      placeholder="Yuk Cari Film Anda Disini..."
                      style={{ maxWidth: '100%', borderWidth: 2, borderColor: 'grey', textAlign: 'center'}}
                      onChange={onQueryChange}
                  />
                  <button
                      type="button"
                      className='btn btn-lg bg-warning ms-3'
                      onClick={onButtonClick}>Search</button>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center" >
              <div className="ratio ratio-16x9" >
                <video autoPlay="autoPlay" muted="muted" loop="loop">
                  <source src={Video} type="video/mp4" />
                </video>

              </div></div>
          </div>
        </div>
      </section>


      <InfiniteScrolls hasMoreData={hasMoreData}
        isLoading={loading}
        onBottomHit={onLoadMore}
        listData={movies}
        onImageClick={showImage}
        onBodyClick={openDetail} />

      {selectedMovie && <Modal
        visible={visible}
        toggle={toggleModal}
        title={`${selectedMovie.Title || ''} (${selectedMovie.Year})`}
        content={<div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <img style={{width: 400, height: 400}} src={((selectedMovie.Poster !== 'N/A') && selectedMovie.Poster) || Loading} alt=""/>
            </div>
          </div>
        }
      />}
    </div>

  )
};

export default Apps;
