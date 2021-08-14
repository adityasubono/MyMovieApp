import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';

import InfiniteScroll from '../InfiniteScroll';

const dummyData = {
    "Search": [
      {
        "Title": "Batman: Arkham Knight",
        "Year": "2015",
        "imdbID": "tt3554580",
        "Type": "game",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc0MTcxMzQ0Ml5BMl5BanBnXkFtZTgwNDc3MzE0MTE@._V1_SX300.jpg"
      },
      {
        "Title": "Batman: The Brave and the Bold",
        "Year": "2008–2011",
        "imdbID": "tt1213218",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDBiODMwZmYtYWFiZC00N2I2LWJiMDktMGYwM2QxNzUxMzc3XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
      },
      {
        "Title": "Batman: Dead End",
        "Year": "2003",
        "imdbID": "tt0374526",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTkzMDI0MTIyNF5BMl5BanBnXkFtZTYwMTUxMTY3._V1_SX300.jpg"
      },
      {
        "Title": "Batman Beyond: The Movie",
        "Year": "1999",
        "imdbID": "tt0231237",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTJjNmViYjEtNGRjZS00MDk3LThmZjktNzhkZDg1YjBiNjA0XkEyXkFqcGdeQXVyNjYyODY4NDU@._V1_SX300.jpg"
      },
      {
        "Title": "Batman: Return of the Caped Crusaders",
        "Year": "2016",
        "imdbID": "tt5973626",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTdlNjNhOGEtZTk2Yy00MjI5LTllOTMtODczMWFmNmNhZmVlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Lego Batman: The Movie - DC Super Heroes Unite",
        "Year": "2013",
        "imdbID": "tt2465238",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjRjOGU2NzUtMjAwOC00MDI3LThmNmUtNTVkZTQ0MDEyYTc1XkEyXkFqcGdeQXVyMTA5NzUzODM4._V1_SX300.jpg"
      },
      {
        "Title": "Beware the Batman",
        "Year": "2013–2014",
        "imdbID": "tt2329077",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2IzMGUzN2UtZDI4NS00NWM3LTgyNTYtYWJiNTg5OGNjNWQ0XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
      },
      {
        "Title": "Batman: Soul of the Dragon",
        "Year": "2021",
        "imdbID": "tt12885852",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTUxNDQ3OGMtNWM2Yy00MDEwLThkMmUtZGVmZWM5MTczNjExXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
      },
      {
        "Title": "Batman vs. Two-Face",
        "Year": "2017",
        "imdbID": "tt6142314",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2MyY2NjNzgtZDAxNi00OWM2LTg3MDUtOTcyOGU1OTdjODNjXkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_SX300.jpg"
      },
      {
        "Title": "Batman: The Telltale Series",
        "Year": "2016",
        "imdbID": "tt5785964",
        "Type": "game",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDQ0YTU2ZjgtZmZiZC00YWM2LTljYWYtOWI2NzUzZmIwMzg4XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg"
      }
    ],
    "totalResults": "444",
    "Response": "True"
  }

describe('Infinite Scroll Component Test', () => {
    afterEach(cleanup)
    it('should render infinite scroll component with loading indicator', () => {
        render(<InfiniteScroll isLoading={true}/>);
        const loadingElement = screen.getByTestId('loading-test');
        expect(loadingElement).toBeTruthy();
        expect(loadingElement).toBeInTheDocument();
    });

    it('should render infinite scroll component with movie item', () => {
        const mockOnImageClick = jest.fn();
        const mockOnBodyClick = jest.fn();

        const wrapper = shallow(<InfiniteScroll 
            isLoading={false} listData={dummyData.Search} 
            onImageClick={mockOnImageClick} onBodyClick={mockOnBodyClick}
        />);
        
        expect(wrapper.getElements()).toMatchSnapshot();
    });

    it('onImageClick should have called', () => {
      let counter = 1;
      const mockOnImageClick = jest.fn(() => () => {
        counter = 2;
      });
      const mockOnBodyClick = jest.fn();

      const observe = jest.fn();
      const disconnect = jest.fn();
      window.IntersectionObserver = jest.fn(function() {
        this.observe = observe;
        this.disconnect = disconnect;
      });

      const wrapper = shallow(<InfiniteScroll isLoading={false} listData={dummyData.Search} 
        onImageClick={mockOnImageClick} onBodyClick={mockOnBodyClick}/>);

      wrapper.find({ idx: 1 }).dive().find('.img-poster').simulate('click');
      expect(counter).toEqual(2);
  });

  it('onBodyClick should have called', () => {
    let counter = 1;
    const mockOnImageClick = jest.fn();
    const mockOnBodyClick = jest.fn(() => () => {
      counter = 2;
    });

    const observe = jest.fn();
    const disconnect = jest.fn();
    window.IntersectionObserver = jest.fn(function() {
      this.observe = observe;
      this.disconnect = disconnect;
    });

    const wrapper = shallow(<InfiniteScroll isLoading={false} listData={dummyData.Search} 
      onImageClick={mockOnImageClick} onBodyClick={mockOnBodyClick}/>);

    wrapper.find({ idx: 1 }).dive().find('.card-body').simulate('click');
    expect(counter).toEqual(2);
  });
})