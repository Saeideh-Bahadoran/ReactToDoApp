import React from 'react';
import styles from './About.module.css';
import ruiFoto from '../../assets/rui.jpeg';
import saideh from '../../assets/saideh.jpg';

const ContactsPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Meet the Team</h1>
        <div className={styles.teamContainer}>
          <div className={styles.teamMember}>
            <p className={styles.memberName}>Saeideh</p>
            <img src={saideh} alt="Saeideh" className={styles.memberPhoto} />
            <div className={styles.memberInfo}>
            <p>Email <a href="Saeideh.bahadoran@gmail.com">Saeideh.bahadoran@gmail.com</a></p>
              <a href="https://github.com/Saeideh-Bahadoran">Saeideh's GitHub</a>
            </div>
          </div>
          <div className={styles.teamMember}>
            <p className={styles.memberName}>Rui Folgado</p>
            <img src={ruiFoto} alt="Rui" className={styles.memberPhoto} />
            <div className={styles.memberInfo}>
              <p>Email <a href="rui.folgado@hotmail.com">rui.folgado@hotmail.com</a></p>
              <a href="https://github.com/Folgad0" backgroundColor='red'>Rui's GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
