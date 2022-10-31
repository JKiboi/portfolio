import { SchoolOutlined, WorkOutline, WorkOutlineSharp } from '@material-ui/icons'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import "../styles/Experience.css"

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
        className='vertical-timeline-element-education'
        date='2010-2014'
        iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<SchoolOutlined/>}
        >
         <h3 className='vertical-timeline-element-title'>My random High school</h3>
         <p>High School Certificate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element-education'
        date='2014-2019'
        iconStyle={{background:"coral",color:"#fff"}}
        icon={<SchoolOutlined/>}
        >
         <h3 className='vertical-timeline-element-title'>My random University</h3>
         <p>University Certificate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element-education'
        date='2014-2019'
        iconStyle={{background:"teal",color:"#fff"}}
        icon={<WorkOutline/>}
        >
         <h3 className='vertical-timeline-element-title'>Spotify</h3>
         <p>Developed frontend structure for three projects</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element-education'
        date='2019-present'
        iconStyle={{background:"teal",color:"#fff"}}
        icon={<WorkOutlineSharp/>}
        >
         <h3 className='vertical-timeline-element-title'>Facebook</h3>
         <p>Developed the Redux state management system</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
