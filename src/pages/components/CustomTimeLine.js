import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';

const styles = [
    {
        dateInnerStyle: {},
        bodyContainerStyle: {
            padding: "20px",
            background: "#F5F6F7"
        },
        h3: {}
    },
    {
        dateInnerStyle: {
            color: "#000000",
            background: "#F5F6F7",
        },
        bodyContainerStyle: {
            padding: "20px",
            background: "rgba(232, 105, 113, 0.85)",
            color: "#F5F6F7"
        },
        h3: {}
    }
];

function getTimelineItem(item, index) {
    const currentStyle = index % styles.length;
    const style = styles[currentStyle];

    const paragraphs = item.paragraphs.map((text) =>
        <p>
            {text}
        </p>
    );

    return (
        <TimelineItem
            key={index}
            dateText={item.date}
            dateInnerStyle={style.dateInnerStyle}
            bodyContainerStyle={style.bodyContainerStyle}
        >
            <h3 style={style.h3}>{item.title}</h3>
            {paragraphs}
        </TimelineItem>
    );
}

const CustomTimeLine = (props) => {
    const timelineItems = props.items.map((item, index) => getTimelineItem(item, index))

    return (
        <Timeline lineColor={'#FF7A85'}>
            {timelineItems}
        </Timeline>
    );
}

export default CustomTimeLine;