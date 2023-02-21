
import React, { useState, useEffect } from 'react';
import Item from './item';
import axios from 'axios';

const url = 'http://localhost:5000/api';

function SearchResults({ searchText }) {
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRows, setTotalRows] = useState(9);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await axios.get(`${url}?keywords=${searchText}&page=${currentPage}`);  
      console.log(response.data.providers);
      setResults(response.data.providers);
      setPageSize(parseInt(response.data['x-list-page-size']) ||  10);
      setTotalPages(parseInt(response.data['x-list-total-pages'] || 1 ));
      setTotalRows(parseInt(response.data['x-list-total-rows']) || response.data.providers.length);      
    };

    if (searchText) {
      fetchResults();
    } else {
      setResults([]);
    }
  }, [searchText, currentPage, pageSize, totalRows]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(start + pageSize - 1, totalRows);

  return (
    <div className="row">
      {results.slice(start - 1, end).map(result => (
      <div className="col-md-6 border" key={result.id}>
        <div className="text-center">
          <Item key={result.id} result={result} />
        </div>
      </div>
      ))}
      {(totalPages && totalPages !== 0) && (
        <div className="pagination text-center">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}

      {results.length > 0 ? (
        <div className="resultCount">
          Showing {start}-{end} of {results.length} results
        </div>
      ) : (
        <div className="noResults"></div>
      )}

    </div>
  );
}

export default SearchResults;





