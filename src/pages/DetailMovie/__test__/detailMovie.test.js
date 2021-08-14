import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';

import  * as hooks from '../../../features/movie/hook';

import DetailMovie from '../DetailMovie';

import DefaultPoster from '../../../assets/default_poster.png';

const dummyData = {
    "Title": "Batman",
    "Year": "1989",
    "Rated": "PG-13",
    "Released": "23 Jun 1989",
    "Runtime": "126 min",
    "Genre": "Action, Adventure",
    "Director": "Tim Burton",
    "Writer": "Bob Kane, Sam Hamm, Warren Skaaren",
    "Actors": "Michael Keaton, Jack Nicholson, Kim Basinger",
    "Plot": "Gotham City. Crime boss Carl Grissom (Jack Palance) effectively runs the town but there's a new crime fighter in town - Batman (Michael Keaton). Grissom's right-hand man is Jack Napier (Jack Nicholson), a brutal man who is not entirely sane... After falling out between the two Grissom has Napier set up with the Police and Napier falls to his apparent death in a vat of chemicals. However, he soon reappears as The Joker and starts a reign of terror in Gotham City. Meanwhile, reporter Vicki Vale (Kim Basinger) is in the city to do an article on Batman. She soon starts a relationship with Batman's everyday persona, billionaire Bruce Wayne.",
    "Language": "English, French, Spanish",
    "Country": "United States, United Kingdom",
    "Awards": "Won 1 Oscar. 9 wins & 26 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "71%"
      },
      {
        "Source": "Metacritic",
        "Value": "69/100"
      }
    ],
    "Metascore": "69",
    "imdbRating": "7.5",
    "imdbVotes": "345,938",
    "imdbID": "tt0096895",
    "Type": "movie",
    "DVD": "24 Jul 2014",
    "BoxOffice": "$251,348,343",
    "Production": "Warner Brothers, PolyGram Filmed Entertainment, Guber-Peters Company",
    "Website": "N/A",
    "Response": "True"
  };

describe('Detail Movie Component Test', () => {
  let routeComponentPropsMock;
    afterEach(cleanup)
    beforeEach(() => {
      routeComponentPropsMock = {
        history: {},
        location: {},
        match: {
            params: {
                id: 1
            }
        },
      };
      jest.spyOn(hooks, 'useMovie').mockImplementation(() => ({movie: dummyData}));
    })
    it('should render detail movie component and match with snapshot', () => {
        const wrapper = shallow(<DetailMovie {...routeComponentPropsMock}/>);
        expect(wrapper.getElements()).toMatchSnapshot();
    });

    it('should render image poster with default image', () => {
      dummyData.Poster = null;
      const wrapper = render(<DetailMovie {...routeComponentPropsMock}/>);
      const result = wrapper.getByTestId('default-img');
      expect(result).toHaveAttribute('src', DefaultPoster)
    });

    // eslint-disable-next-line jest/no-identical-title
    it('should render image poster with default image', () => {
      const wrapper = render(<DetailMovie {...routeComponentPropsMock}/>);
      const result = wrapper.getByTestId('nav-tabs')
      expect(result).toBeTruthy();
      expect(result).toBeInTheDocument();
    });
})
