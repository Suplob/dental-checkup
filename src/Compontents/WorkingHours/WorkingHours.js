import React from "react";

const WorkingHours = () => {
  return (
    <div className="my-5 bg-light  pb-2">
      <h1 className="text-center mt-5">Working Hours</h1>
      <table class="table container">
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Sunday</th>
            <td></td>
            <td></td>
            <td>8 am - 6 pm</td>
          </tr>
          <tr>
            <th scope="row">Monday</th>
            <td></td>
            <td></td>
            <td>8 am - 6 pm</td>
          </tr>
          <tr>
            <th scope="row">Tuesday</th>
            <td></td>
            <td></td>
            <td>8 am - 6 pm</td>
          </tr>
          <tr>
            <th scope="row">Wednesday</th>
            <td></td>
            <td></td>
            <td>8 am - 6 pm</td>
          </tr>
          <tr>
            <th scope="row">Thursday</th>
            <td></td>
            <td></td>
            <td>8 am - 6 pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WorkingHours;
