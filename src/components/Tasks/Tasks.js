import React from "react";
import { ReactComponent as TaskIcon } from "../../icons/task.svg";

import "./Tasks.scss";

const Tasks = ({ task }) => {
  return (
    <div className="task-card">
      <div className="task-hd">
        <h4 className="title ">
          <div className="tick-icon">
            <TaskIcon />
          </div>
          <div
            className="summary ellipsis"
            title={task.name}
          >
            {task.name}
          </div>
        </h4>
      </div>
      <div className="task-bd">
        <div className="task-items">
          {task.description && (
            <div className="task-item">
              <div className="task-name ellipsis" title={task.description}>
                {task.description}
              </div>
            </div>
          )}
          {task.user && (
            <div className="task-item">
              <div className="task-name task-user" title={task.user}>
                {task.user}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
