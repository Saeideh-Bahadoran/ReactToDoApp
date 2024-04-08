// About.js
import React from 'react';
import styles from './About.module.css';
import ruiFoto from '../../assets/rui.jpeg';
import saideh from '../../assets/dedpool.jpg';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Time Master</h1>
      <p className={styles.description}>
        Time Master is an app designed to help you manage your tasks efficiently and stay organized throughout your day. With its intuitive interface and powerful features, Time Master simplifies task management, allowing you to focus on what matters most.
      </p>
      <h2 className={styles.subtitle}>Key Features:</h2>
      <ul className={styles.featuresList}>
        <li>Viewing Tasks: Easily access your list of tasks to see what needs to be done.</li>
        <li>Marking Tasks as Completed: Keep track of your progress by marking tasks as completed.</li>
        <li>Setting Tasks as Incomplete: Toggle tasks as incomplete to adjust your priorities as needed.</li>
        <li>Creating New Tasks: Quickly add new tasks to your list with the easy-to-use task creation feature.</li>
        <li>Editing Existing Tasks: Make changes to existing tasks, including the task name and its completion state.</li>
      </ul>
      <br />
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
  );
};

export default AboutPage;

