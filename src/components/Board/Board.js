import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Loading from "../../shared/Loading/Loading";
import Stages from "../Stages/Stages";

import { onTaskReorder } from "../../utils/ReorderUtil";

import boardsMockData from "../../json/boards.json";

import "./Board.scss";

const Board = () => {
  const [stages, setStages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("Loading...");

  useEffect(() => {
    setIsLoading(true);
    initTasks();
  }, []);

  const initTasks = () => {
    // API calls comes here
    setIsLoading(true);
    setStages(boardsMockData);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const data = onTaskReorder({
      stages,
      source,
      destination,
    });

    setStages(data.stages);
  };

  return (
    <div className="tasks-terello-view">
      {isLoading && <Loading message={loaderMessage} />}
      <div className="header">
        <h3>Utiltyx</h3>
      </div>
      <div className="terello-view-wrapper">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="board"
            type="ROW"
            direction="vertical"
            ignoreContainerClipping={true}
            isCombineEnabled={true}
          >
            {(provided) => (
              <div className="board-container">
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {stages.map((stage, index) => {
                    return (
                      <Stages
                        key={stage.id}
                        stage={stage}
                        isScrollable={true}
                      />
                    );
                  })}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Board;
