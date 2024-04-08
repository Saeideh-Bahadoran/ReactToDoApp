import React from 'react';
import styles from './About.module.css';
import ruiFoto from '../../assets/rui.jpeg';
import saideh from '../../assets/dedpool.jpg';

const ContactsPage = () => {
  return (
    <div className={styles.container}>
    <div>
      <h1 className={styles.title}>Meet the Team</h1>
      <div className={styles.teamContainer}>
        <div className={styles.teamMember}>
          <p className={styles.memberName}>Saeideh</p>
          <img src={saideh} alt="Saeideh" className={styles.memberPhoto} />
        </div>
        <div className={styles.teamMember}>
          <p className={styles.memberName}>Rui Folgado</p>
          <img src={ruiFoto} alt="Rui" className={styles.memberPhoto} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactsPage;
