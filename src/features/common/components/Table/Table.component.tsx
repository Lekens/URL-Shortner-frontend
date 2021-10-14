import { useState } from 'react';

import { ShowStats } from 'features/common/components/ShowStats';

import { ITableData, IURLData } from './interfaces';
import styles from './styles.module.scss';

function Table({ data }: ITableData) {
  const [code, setCode] = useState('');
  const [url, setUrl] = useState('');
  const [URLs, setURLs] = useState(data);
  const showStats = (urlData: IURLData) => {
    setCode(urlData.urlCode);
  };
  const handleCloseModal = () => {
    setCode('');
  };
  const handleChange = (event: any) => {
    setUrl(event.target.value);
  };
  const searchUrl = () => {
    const filteredData = URLs.filter((urlData) =>
      urlData.longUrl.includes(url) ? urlData : null,
    );
    setURLs(() => filteredData);
  };
  return (
    <div className={styles.tableWrapper}>
      <div className={styles.searchWrapper}>
        <input
          type="search"
          placeholder="Search Long url..."
          onChange={handleChange}
          className={styles.searchInput}
        />
        <button type="button" className={styles.searchBtn} onClick={searchUrl}>
          Search
        </button>
      </div>
      {code && <ShowStats code={code} closeModal={handleCloseModal} />}
      <table>
        <thead className={styles.thead}>
          <tr>
            <th>S/N</th>
            <th>User IP</th>
            <th>Long Url</th>
            <th>Short Url</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {URLs.map((tableData: IURLData, index) => (
            <tr key={tableData.urlCode}>
              <td>{index + 1}</td>
              <td>{tableData.creatorIP}</td>
              <td>{tableData.longUrl}</td>
              <td>
                <a href={tableData.shortUrl} target="_blank">
                  {tableData.shortUrl}
                </a>
              </td>
              <td>{tableData.createdAt}</td>
              <td>
                <button
                  type="button"
                  className={styles.showStatBtn}
                  onClick={() => showStats(tableData)}
                >
                  Show Stats
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
