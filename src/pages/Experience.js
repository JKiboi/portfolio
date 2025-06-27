import { GraduationCap, Briefcase } from 'lucide-react';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
        className='vertical-timeline-element-education'
        date='2010-2014'
        iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<GraduationCap/>}
        >
         <h3 className='vertical-timeline-element-title'>My random High school</h3>
         <p>High School Certificate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element-education'
        date='2014-2019'
        iconStyle={{background:"coral",color:"#fff"}}
        icon={<GraduationCap/>}
        >
         <h3 className='vertical-timeline-element-title'>Moi University</h3>
         <p>University Certificate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element-education'
        date='2014-2019'
        iconStyle={{background:"teal",color:"#fff"}}
        icon={<Briefcase/>}
        >
         <h3 className='vertical-timeline-element-title'>Spotify</h3>
         <p>Developed React frontend for the podcast project</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element-education'
        date='2019-2021'
        iconStyle={{background:"teal",color:"#fff"}}
        icon={<Briefcase/>}
        >
         <h3 className='vertical-timeline-element-title'>Facebook</h3>
         <p>Built apis using node.js for new features updates </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element-education'
        date='2021-present'
        iconStyle={{background:"teal",color:"#fff"}}
        icon={<Briefcase/>}
        >
         <h3 className='vertical-timeline-element-title'>Bidmania Ventures</h3>
         <p>Implemented backend ,MongoDB database and intergrated mpesa online payment using Daraja API </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
