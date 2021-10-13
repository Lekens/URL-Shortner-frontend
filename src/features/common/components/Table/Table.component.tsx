import { ITableData, IURLData } from './interfaces';
import styles from './styles.module.scss';

function Table({ data }: ITableData) {
  return (
    <div className={styles.tableWrapper}>
      <table>
        <thead className={styles.thead}>
          <tr>
            <th>S/N</th>
            <th>User IP</th>
            <th>Long Url</th>
            <th>Short Url</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((tableData: IURLData, index) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
