import React, { useEffect, useState } from "react";
import "./Table.css";
import TableRow from "./Row";
import Pagination from "./Pagination";

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("https://arab-ms.onrender.com/api/table")
      .then((d) => d.json())
      .then((obj => setData(obj)));
  }, []);
  // console.log(data);

 
  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = data.slice(startIndex, endIndex);

  return (
    <>
      <div>
        <div className="table-cont">
          <table>
            <thead>
              <tr>
                <td>
                  <th>Id</th>
                </td>

                <td>
                  <th>Name</th>
                </td>
                <td>
                  <th>Quantity</th>
                </td>
                <td>
                  <th>Price</th>
                </td>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <TableRow key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        handlePagination={handlePagination}
      />
    </>
  );
};

export default Table;
