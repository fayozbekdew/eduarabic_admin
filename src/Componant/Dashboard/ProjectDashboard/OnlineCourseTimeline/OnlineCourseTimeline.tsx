import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { OnlineCourseTimelines } from "../../../../utils/Constant";
import moment from "moment";
import { onlineTimelineItems } from "../../../../Data/Dashboard/ProjectData";
import { useEffect, useRef } from "react";
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const OnlineCourseTimeline = () => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calendarEl = calendarRef.current;

    if (!calendarEl) return;

    const formattedEvents = onlineTimelineItems.map(item => ({
      id: item.id.toString(),
      groupId: item.group.toString(),
      title: item.title,
      start: item.start_time.toDate(),
      end: item.end_time.toDate(),
    }));

    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: 'timeGridDay',
      height: 'auto',
      slotDuration: '00:15:00',
      slotLabelInterval: '00:30',
      allDaySlot: false,
      nowIndicator: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridDay,timeGridWeek,dayGridMonth'
      },
      editable: false,
      eventTextColor: '#fff',
      events: formattedEvents,
      timeZone: 'local',
      defaultTimedEventDuration: '00:30:00',
      validRange: {
        start: moment().subtract(1, 'days').format('YYYY-MM-DD'),
        end: moment().add(1, 'days').format('YYYY-MM-DD')
      },
      eventClick: function (info) {
        console.log('Event clicked:', info.event);
      },
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, []);

  return (
    <Col xl="4" md="6" className="col-xl-100 proorder-md-12">
      <Card>
        <CommonCardHeader
          headClass="card-no-border pb-0"
          title={OnlineCourseTimelines}
          mainTitle={true}
          firstItem="Weekly"
          secondItem="Monthly"
          thirdItem="Yearly"
        />
        <CardBody className="pt-0">
          <div className="overflow-auto custom-scrollbar custom-scrollbar">
            <div className="timeline-calendar custom-scrollbar">
              <div className="custom-calendar" id="calendar-container">
                <div className="time-line" id="calendar" ref={calendarRef}></div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OnlineCourseTimeline;
