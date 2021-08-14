import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getList, detailMovieById} from './logic';


export const useMovies = () => {
    const dispatch = useDispatch();
    const moviesRaw = useSelector((state) => state.movie.movies);
    const isSuccess = useSelector((state) => state.movie.success);

    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        /**
        * This function will fetch data from the API
        * with given parameter from the modules
        */
        setLoading(true);
        const dispatcher = dispatch(getList({ searchTerm, page }));

        dispatcher.then(() => {
            setLoading(false);
        });

        return () => {
            dispatcher.abort();
            setLoading(false);
        };
    }, [searchTerm]);

    useEffect(() => {
        setMovies([]);
    }, [searchTerm]);

    useEffect(() => {
        /**
         * This function will create a new array with existing list data and
         * additional data from the API based on pagination and wil return array with unique item
         */
         if (!isSuccess) {
            setMovies([]);
         } else {
             const key = 'imdbID';
             setMovies((prev) => {
                 return  [...new Map([...prev, ...moviesRaw].map(item =>
                     [item[key], item])).values()];
               });
         }
    }, [page, searchTerm, moviesRaw]);

    const onLoadMore = useCallback(async () => {
        setLoading(true);
        await dispatch(getList({ searchTerm, page: page + 1 }));
        setLoading(false);
        setPage(page + 1);
    }, [page, searchTerm]);

    return {loading, movies, searchTerm, setSearchTerm, onLoadMore, setPage};
}

export const useMovie = (id) => {
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movie.movie);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        /**
        * This function will fetch data from the API
        * with given parameter from the modules
        */
        setLoading(true);
        const dispatcher = dispatch(detailMovieById(id));

        dispatcher.then(() => {
            setLoading(false);
        });

        return () => {
            dispatcher.abort();
            setLoading(false);
        };
    }, []);

    return {movie, loading}
}
