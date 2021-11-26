import React from "react";
import { Accordion } from "react-bootstrap";

const WhyUs = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center">Why Us?</h1>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>We Provide the best hygiene</Accordion.Header>
          <Accordion.Body>
            Hygiene is important for maintaining good health. It means the
            practice of keeping ourselves clean and tidy. To keep our home,
            workplaces, and surroundings clean is also called 'hygiene'. It is
            important for our good health. A sound mind lies in a sound body.
            Without following the rules of hygiene, we cannot keep ourselves
            clean and so we cannot achieve anything physically, mentally or
            spiritually. To maintain hygiene, first, we must keep our body clean
            and have a bath every day and wash our hair regularly. This will
            keep the body and hair free from dirt and bacteria. Secondly, we
            should wash our clothes regularly.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>We Care About Your Teeth</Accordion.Header>
          <Accordion.Body>
            Hygiene is important for maintaining good health. It means the
            practice of keeping ourselves clean and tidy. To keep our home,
            workplaces, and surroundings clean is also called 'hygiene'. It is
            important for our good health. A sound mind lies in a sound body.
            Without following the rules of hygiene, we cannot keep ourselves
            clean and so we cannot achieve anything physically, mentally or
            spiritually. To maintain hygiene, first, we must keep our body clean
            and have a bath every day and wash our hair regularly. This will
            keep the body and hair free from dirt and bacteria. Secondly, we
            should wash our clothes regularly.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Senior Doctors</Accordion.Header>
          <Accordion.Body>
            Hygiene is important for maintaining good health. It means the
            practice of keeping ourselves clean and tidy. To keep our home,
            workplaces, and surroundings clean is also called 'hygiene'. It is
            important for our good health. A sound mind lies in a sound body.
            Without following the rules of hygiene, we cannot keep ourselves
            clean and so we cannot achieve anything physically, mentally or
            spiritually. To maintain hygiene, first, we must keep our body clean
            and have a bath every day and wash our hair regularly. This will
            keep the body and hair free from dirt and bacteria. Secondly, we
            should wash our clothes regularly.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default WhyUs;
