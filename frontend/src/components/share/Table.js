import React, { useState, useEffect } from 'react';
import './index.scss';
import LeftArrowIcon from 'components/icons/LeftArrowIcon';
import RightArrowIcon from 'components/icons/RightArrowIcon';

const HistoryTable = props => {
    const { cols, rows, currentPageNum, setCurrentPageNum, totalRowNum, rowsPerPage } = props;
    const [ showNums, setShowNums ] = useState([]);

    useEffect(() => {
        if (totalRowNum / rowsPerPage < 5) {
            let temp = [];
            for (let i=0; i<totalRowNum/rowsPerPage; i++) {
                temp.push(i+1);
            }
            setShowNums(temp);
        } else {
            if (currentPageNum <= 3) setShowNums([ 1, 2, 3, '...', Math.ceil(totalRowNum/rowsPerPage) ]);
            else if (currentPageNum > Math.ceil(totalRowNum/rowsPerPage)-3) {
                let count = Math.ceil(totalRowNum/rowsPerPage)
                setShowNums([ 1, '...', count-2, count-1, count ]);
            } else {
                setShowNums([ 1, '...', currentPageNum-1, currentPageNum, currentPageNum+1, '...', Math.ceil(totalRowNum/rowsPerPage) ]);
            }
        }
    }, [ currentPageNum, totalRowNum, rowsPerPage ]);

    const setPageNumber = num => {
        if (num === '...') return;
        else setCurrentPageNum(parseInt(num));
    }

    const increasePageNum = () => {
        if (currentPageNum !== Math.ceil(totalRowNum/rowsPerPage)) setCurrentPageNum(currentPageNum + 1);
    }

    const decreasePageNum = () => {
        if (currentPageNum !== 1) setCurrentPageNum(currentPageNum - 1);
    }

    return (
        <div className="table-rt">
            { rows.length > 0 ?
                <>
                    <table>
                        <thead>
                            <tr>
                                { cols.map((col, index) => 
                                    <th key={index}>{col.value}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            { rows.map((row, index) =>
                                <tr key={index}>
                                    { cols.map((col, i) => {
                                        return (
                                            <td key={i}>{row[[col.key]]}</td>
                                        )
                                    }
                                    )}
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className='table-footer'>
                        <span className="label">Showing {(currentPageNum-1)*rowsPerPage+1} to {Math.min(currentPageNum*rowsPerPage, totalRowNum)} out of {totalRowNum} stakers</span>
                        <div className="pagination">
                            <span onClick={decreasePageNum}>
                                <LeftArrowIcon />
                            </span>
                            {showNums.map((num, index) => 
                                <span key={index} className={num === currentPageNum ? 'active' : ''} onClick={() => setPageNumber(num)}>{num}</span>
                            )}
                            <span onClick={increasePageNum}>
                                <RightArrowIcon />
                            </span>
                        </div>
                    </div>
                </> :
                <div className='table-footer'>
                    <span>No data to display.</span>
                </div>
            }
        </div>
    )
}

export default HistoryTable;