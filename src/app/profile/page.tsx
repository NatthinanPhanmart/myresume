import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className={styles.profileImg}
        />
        <h1>Natthinan Phanmart</h1>
        <p>ตำแหน่งที่ต้องการ: <strong>นักพัฒนาเว็บ</strong></p>
      </header>

      <nav className={styles.nav}>
        <a href="#profile">โปรไฟล์</a>
        <a href="#contact">ข้อมูลติดต่อ</a>
        <a href="#education">การศึกษา</a>
        <a href="#skills">ทักษะ</a>
        <a href="#projects">โปรเจค</a>
      </nav>

      <section id="contact" className={styles.section}>
        <h2>ข้อมูลติดต่อ</h2>
        <ul>
          <li><strong>อีเมล:</strong> <a href="mailto:Phanmart08@gmail.com">Phanmart08@gmail.com</a></li>
          <li><strong>โทรศัพท์:</strong> <a href="tel:0988253724">098-025-3724</a></li>
        </ul>
      </section>

      <section id="skills" className={styles.section}>
        <h2>ทักษะ</h2>
        <div className={styles.skillsGrid}>
          <div>
            <Image src="/images/html.png" alt="HTML" width={80} height={80} />
            <p>HTML</p>
          </div>
          <div>
            <Image src="/images/css.png" alt="CSS" width={80} height={80} />
            <p>CSS</p>
          </div>
          <div>
            <Image src="/images/js.png" alt="JavaScript" width={80} height={80} />
            <p>JavaScript</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
