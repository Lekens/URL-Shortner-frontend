import styles from './styles.module.scss';

function IntegrateApiScreen() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.title}>Integrate with our API</div>
        <div className={styles.documentation}>
          <p>Hi there,</p>
          <p>
            You can integrate with our apis to help you generate encoded URLs in
            your application
          </p>
          <p>
            All you need to do is to follow the API documentation&nbsp;
            <a
              href="http://localhost:8090/swagger/documentation/"
              target="_blank"
            >
              here
            </a>
          </p>

          <p>
            Documentation is in Swagger:
            <a
              href="http://localhost:8090/swagger/documentation/"
              target="_blank"
            >
              http://localhost:8090/swagger/documentation
            </a>
          </p>

          <p>
            Use the default API KEY provided as the authorization code for your
            application.
          </p>
          <div>Contact us for more information.</div>
        </div>
      </div>
    </div>
  );
}

export default IntegrateApiScreen;
