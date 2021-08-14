import React, {useRef, useCallback} from "react";

import MovieItem from './Item/MovieItem'

const InfiniteScroll = ({
                            hasMoreData,
                            listData = [],
                            isLoading,
                            onBottomHit,
                            onImageClick,
                            onBodyClick
                        }) => {
    const observer = useRef();

    const lastBookElementRef = useCallback(
        (node) => {
            if (isLoading) {
                return;
            }

            /**
             * This function will look for the last element from list data
             * and will fetch the next page data if element found
             */
            if (observer.current) {
                observer.current.disconnect();
            }

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMoreData && onBottomHit) {
                    onBottomHit()
                }
            });

            if (node) {
                observer.current.observe(node);
            }
        },
        [isLoading, hasMoreData, onBottomHit]
    );

    return (
        <>
            <div className="row justify-content-center" data-testid="infinitescroll-test">
                {listData.map((data, idx) => <MovieItem key={idx}
                                                        item={data} idx={idx}
                                                        elementRef={lastBookElementRef} records={listData.length}
                                                        onImageClick={onImageClick} onBodyClick={onBodyClick}
                />)}
            </div>
            {isLoading && <div className="row justify-content-center align-items-center" style={{height: '150px'}}>
                <div className="col-md-2 d-flex justify-content-center" data-testid="loading-test">
                    <p>{"Loading..."}</p>
                </div>
            </div>}
        </>
    );
}


export default InfiniteScroll;
