import React from "react";
import Students from "./Students";

const Roster = (props) => {
  return (
    <React.Fragment>
      {props.students.map((student) => {
        return (
          <Students
            key={student.name}
            name={student.name}
            bio={student.bio}
            scores={student.scores}
          />
        );
      })}
    </React.Fragment>
  );
};

export default Roster;
