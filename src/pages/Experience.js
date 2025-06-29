//Experience.js

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GraduationCap, Briefcase } from 'lucide-react';
import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className='vertical-timeline-element-education'
          date='2010 - 2014'
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<GraduationCap />}
        >
          <h3 className='vertical-timeline-element-title'>Kericho High School</h3>
          <p>High School Certificate</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element-education'
          date='2014 - 2019'
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<GraduationCap />}
        >
          <h3 className='vertical-timeline-element-title'>Moi University, Eldoret</h3>
          <p>Bachelor of Science in Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element-work'
          date='2019 - 2020'
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Briefcase />}
        >
          <h3 className='vertical-timeline-element-title'>Software Engineer - Shopify</h3>
          <p>Developed front-end features for merchant dashboards using React. Led a project to build a custom inventory management app, utilizing a MongoDB backend for real-time stock updates for over 5,000 small businesses.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element-work'
          date='2020 - 2021'
          iconStyle={{ background: "#1877F2", color: "#fff" }}
          icon={<Briefcase />}
        >
          <h3 className='vertical-timeline-element-title'>Full-Stack Engineer - Meta (Facebook)</h3>
          <p>Engineered RESTful APIs with Node.js and Express for the Facebook Events feature, using MongoDB to manage flexible, unstructured event data. This contributed to a 15% increase in event creation speed.</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement 
          className='vertical-timeline-element-work'
          date='2021 - 2022'
          iconStyle={{ background: "#6772E5", color: "#fff" }}
          icon={<Briefcase />}
        >
          <h3 className='vertical-timeline-element-title'>Payments Engineer - Stripe</h3>
          <p>Focused on building robust payment solutions. Contributed to backend services using Node.js that interfaced with MongoDB databases for logging transaction metadata and generating reports for high-volume clients.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element-work'
          date='2022 - 2023'
          iconStyle={{ background: "#E50914", color: "#fff" }}
          icon={<Briefcase />}
        >
          <h3 className='vertical-timeline-element-title'>Senior UI Engineer - Netflix</h3>
          <p>Worked on the content discovery team to enhance user experience. Implemented a new, performant server-side rendered (SSR) movie details page using React, which fetched data from a Node.js API backed by a distributed MongoDB cluster.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element-work'
          date='2023 - 2024'
          iconStyle={{ background: "#FF9900", color: "#fff" }}
          icon={<Briefcase />}
        >
          <h3 className='vertical-timeline-element-title'>Cloud Engineer - Amazon Web Services (AWS)</h3>
          <p>Designed and deployed scalable, serverless applications for enterprise clients using AWS Lambda, API Gateway, and MongoDB Atlas. I created a CI/CD pipeline that automated MERN stack deployments, reducing manual configuration errors by 95%.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element-work'
          date='2024 - Present'
          iconStyle={{ background: "teal", color: "#fff" }}
          icon={<Briefcase />}
        >
          <h3 className='vertical-timeline-element-title'>Lead Full-Stack Developer - Bidmania Ventures</h3>
          <p>Architected and built a complete online bidding platform from the ground up using the MERN stack (MongoDB, Express.js, React, Node.js). Successfully integrated the M-Pesa Daraja API for secure, real-time mobile payments in the Kenyan market.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience;