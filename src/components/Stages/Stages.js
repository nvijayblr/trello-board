import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Tasks from "../Tasks/Tasks";
import "./Stages.scss";

const Stages = ({ stage }) => {
  return (
    <div className="tasks-status">
      <div className="task-status-header">{stage.name}</div>
      <div className="task-status-body">
        <Droppable droppableId={`${stage.id}`}>
          {(dropProvided, dropSnapshot) => (
            <div
              className={`drop-area ${
                dropSnapshot.isDraggingOver ? "drag-over" : ""
              } ${
                Boolean(dropSnapshot.draggingFromThisWith) ? "drag-from" : ""
              }`}
              isDraggingOver={dropSnapshot.isDraggingOver}
              isDropDisabled={false}
              isDraggingFrom={Boolean(dropSnapshot.draggingFromThisWith)}
              {...dropProvided.droppableProps}
            >
              <div className="card-drop-zone" ref={dropProvided.innerRef}>
                {stage.tasks.length === 0 && (
                  <div className="no-card-found">No tasks found.</div>
                )}
                {stage.tasks.map((task, index) => {
                  return (
                    <Draggable
                      key={task.id}
                      draggableId={`${task.id}`}
                      index={index}
                    >
                      {(dragProvided, dragSnapshot) => (
                        <div
                          className={`draggable-card ${
                            dragSnapshot.isDragging ? "dragging" : ""
                          }`}
                          ref={dragProvided.innerRef}
                          {...dragProvided.draggableProps}
                          {...dragProvided.dragHandleProps}
                          data-is-dragging={dragSnapshot.isDragging}
                        >
                          <Tasks task={task} />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {dropProvided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default Stages;
