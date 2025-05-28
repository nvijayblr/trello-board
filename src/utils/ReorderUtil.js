const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export default reorder;

export const onTaskReorder = ({ stages, source, destination }) => {
  const currentStageCards = stages.find(
    (stage) => stage.id === +source.droppableId
  ).tasks;

  const nextStageCards = stages.find(
    (stage) => stage.id === +destination.droppableId
  ).tasks;

  const currentStage = stages.find(
    (stage) => stage.id === +source.droppableId
  );

  const nextStage = stages.find(
    (stage) => stage.id === +destination.droppableId
  );

  // moving to same list
  if (source.droppableId === +destination.droppableId) {
    const reordered = reorder(
      currentStageCards,
      source.index,
      destination.index
    );
    stages.map((stage) => {
      if (stage.id === source.droppableId) {
        stage.tasks = reordered;
      }
    });

    return {
      stages: [...stages],
      task: {},
      destinationStage: {},
    };
  }

  // moving to different list
  const target = currentStageCards[source.index];

  const movedCard = currentStageCards.splice(source.index, 1);

  // Update the Status
  target.Status = nextStage.display_value;

  // insert into next
  nextStageCards.splice(destination.index, 0, target);

  return {
    stages: [...stages],
    card: movedCard && movedCard.length ? movedCard[0] : {},
    destinationStage: nextStage,
  };
};

export function moveBetween({ list1, list2, source, destination }) {
  const newFirst = Array.from(list1.values);
  const newSecond = Array.from(list2.values);

  const moveFrom = source.droppableId === list1.id ? newFirst : newSecond;
  const moveTo = moveFrom === newFirst ? newSecond : newFirst;

  const [moved] = moveFrom.splice(source.index, 1);
  moveTo.splice(destination.index, 0, moved);

  return {
    list1: {
      ...list1,
      values: newFirst,
    },
    list2: {
      ...list2,
      values: newSecond,
    },
  };
}
