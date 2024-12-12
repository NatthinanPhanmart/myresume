import React from "react";

const Resume: React.FC = () => {
  const skills = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s",
      alt: "HTML",
      name: "HTML",
    },
    {
      src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
      alt: "CSS",
      name: "CSS",
    },
    {
      src: "https://jbstechinfo.com/wp-content/uploads/2023/08/JavaScript-Symbol.png",
      alt: "JavaScript",
      name: "JavaScript",
    },
    {
      src: "https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png",
      alt: "Node.js",
      name: "Node.js",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLfG0eMaHUfZdyYtPcP5hpdsBsdhzUf3w6yw&s",
      alt: "Figma",
      name: "Figma",
    },
    {
      src: "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png",
      alt: "MySQL",
      name: "MySQL",
    },
  ];

  const projects = [
    {
      title: "แอปสั่งอาหาร",
      description: "แอปพลิเคชันที่ช่วยให้ผู้ใช้สามารถสั่งซื้ออาหารผ่านระบบออนไลน์",
    },
    {
      title: "เว็บไซต์ขายของมือสอง",
      description: "เว็บไซต์ที่ช่วยให้ผู้ใช้สามารถสั่งซื้อสินค้ามือสองผ่านระบบออนไลน์",
    },
    {
      title: "เว็บจองรถ",
      description: "เว็บไซต์ที่ช่วยให้ผู้ใช้สามารถจองรถผ่านระบบออนไลน์",
    },
  ];

  return (
    <div>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
          }
          .navbar {
            display: flex;
            justify-content: center;
            background-color: #333;
            padding: 10px 0;
            position: sticky;
            top: 0;
            z-index: 100;
          }
          .navbar a {
            color: #fff;
            margin: 0 15px;
            text-decoration: none;
            font-size: 1.2rem;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background-color 0.3s;
          }
          .navbar a:hover {
            background-color: #0078d7;
          }
          .container {
            max-width: 900px;
            margin: 30px auto;
            padding: 20px;
          }
          .header {
            text-align: center;
            padding: 50px 20px;
            background-color: #0078d7;
            color: #fff;
            border-radius: 10px;
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .header img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin-bottom: 20px;
            object-fit: cover;
            border: 4px solid #fff;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }
          .header h1 {
            font-size: 3rem;
            margin: 0;
          }
          .header p {
            font-size: 1.2rem;
          }
          .section {
            margin: 30px 0;
            padding: 20px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
          .section h2 {
            font-size: 2rem;
            color: #0078d7;
            border-bottom: 2px solid #0078d7;
            padding-bottom: 5px;
            margin-bottom: 20px;
          }
          .skills-grid {
            display: flex;
            justify-content: space-between;
            gap: 20px;
          }
          .skill-item {
            text-align: center;
          }
          .skill-item img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 50%;
            margin-bottom: 10px;
          }
          .projects-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }
          .project-item {
            width: calc(33.333% - 20px);
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .project-item:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }
          .project-item h3 {
            font-size: 1.5rem;
            color: #0078d7;
            margin-top: 15px;
          }
          .project-item p {
            margin: 10px 0;
          }
        `}
      </style>

      <nav className="navbar">
        {["โปรไฟล์", "ข้อมูลติดต่อ", "การศึกษา", "ทักษะ", "โปรเจค"].map(
          (section, index) => (
            <a key={index} href={`#${section}`}>{section}</a>
          )
        )}
      </nav>

      <div className="container">
        <section id="โปรไฟล์" className="header">
          <img
            src="https://pbs.twimg.com/media/DvHcY2DVYAAh01Q.jpg"
            alt="รูปของฉัน"
          />
          <h1>Natthinan Phanmart</h1>
          <p>ตำแหน่งที่ต้องการ: <strong>นักพัฒนาเว็บ</strong></p>
        </section>

        <section id="ข้อมูลติดต่อ" className="section">
          <h2>ข้อมูลติดต่อ</h2>
          <ul>
            <li><strong>อีเมล:</strong> <a href="mailto:Phanmart08@gmail.com">Phanmart08@gmail.com</a></li>
            <li><strong>โทรศัพท์:</strong> <a href="tel:0988253724">098-025-3724</a></li>
            <li><strong>FB:</strong> <a href="https://www.facebook.com/natthinan.phanmart.3" target="_blank">facebook.com/natthinan.phanmart.3</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/NatthinanPhanmart" target="_blank">github.com/NatthinanPhanmart</a></li>
          </ul>
        </section>

        <section id="การศึกษา" className="section">
          <h2>การศึกษา</h2>
          <ul>
            <li>ปริญญาตรี คณะเทคโนโลยีสารสนเทศ สาขาวิศวกรรมซอฟต์แวร์ - มหาวิทยาลัยพะเยา (กำลังศึกษาชั้นปีที่ 2)</li>
          </ul>
        </section>

        <section id="ทักษะ" className="section">
          <h2>ทักษะ</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <img src={skill.src} alt={skill.alt} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="โปรเจค" className="section">
          <h2>โปรเจคที่ทำ</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-item" key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
