import React, { useCallback, useState } from 'react';
import {useHistory} from 'react-router-dom';

import { useMovies } from '../../features/movie/hook';
import { debounce } from '../../utils/utils';

import InfiniteScrolls from '../../components/InfiniteScroll/InfiniteScroll';
import Modal from '../../components/Modal/Modal';

import '../../App.css';
import Loading from '../../assets/loading.gif';

const Apps = () => {
  const [visible, setVisible] = useState(false);
  const [selectedMovie, setMovie] = useState(null);

  const history = useHistory();
  const { movies, setSearchTerm, loading, onLoadMore, setPage } = useMovies();

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

  const onQueryChange = useCallback(debounce((e) => {
      /**
       * function to chanfe the search term based on user input
       * will reset the page if there is new value omitted
       */
    setSearchTerm(e.target.value);
    setPage(1);
  }, 1000), []);


  return (
    <div className="row">


      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Kami Hadir Untuk Anda</h1>
            <p className="lead text-muted">Kebosanan pasti ada ya... , Nah untuk menghilangan kebosaan apalagi anda
              banyak disibukan bekerja dirumah selama pandemi COVIC-19 ini dan pasti jenuh sekali. Nah MyMovie.com hadir
              untuk membunuh rasa bosan anda dan ditemani film favorit anda, yuk segara cari film kesayangan anda disini</p>
            <div className="col-md-12 d-flex justify-content-center p-3">
              <input
                  type="text"
                  className="form-control"
                  placeholder="Yuk Cari Film Anda Disini..."
                  style={{ maxWidth: '50%', borderWidth: 2, borderColor: 'grey', textAlign: 'center'}}
                  onChange={onQueryChange}
              />
            </div>
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
              <img src={((selectedMovie.Poster !== 'N/A') && selectedMovie.Poster) || Loading} alt=""/>
            </div>
          </div>
        }
      />}
    </div>

  )
}

export default Apps;
