import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {debounce} from '../utils';


describe('Utils Test', () => {
    afterEach(cleanup)
    it('should invoke the given function after some delay', () => {
        jest.useFakeTimers();
        const mockFunction = jest.fn();

        const callback = debounce(mockFunction, 200);
        callback();
        expect(mockFunction).not.toBeCalled();

        jest.advanceTimersByTime(500);
        expect(mockFunction).toBeCalled();
    });
})