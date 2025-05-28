# trello-board

### Database


### Backend

    Create a new task

    POST /v1/api/task 
    Payload:
    {
        name: string,
        description: string,
        userId: number,
        boardId: number,
        stageId: number,
        status: string,
    }

    Reponse:
    {
        status: 'success',
        code: 200,
        result: {
            id: nummber,
            name: string,
            description: string,
            userId: number,
            boardId: number,
            stageId: number,
            status: string,
        }
    }


    Update an existing task

    PUT /v1/api/task

    Payload:
    {
        id: nummber,
        name: string,
        description: string,
        userId: number,
        boardId: number,
        stageId: number,
        status: string,
    }

    Reponse:
    {
        status: 'success',
        code: 200,
        result: {
            id: nummber,
            name: string,
            description: string,
            userId: number,
            boardId: number,
            stageId: number,
            status: string,
        }
    }


    Get all the tasks

    GET /v1/api/tasks

    Reponse:
    {
        status: 'success',
        code: 200,
        result: [{
            id: nummber,
            name: string,
            description: string,
            userId: number,
            boardId: number,
            stageId: number,
            status: string,
        }, {
            id: nummber,
            name: string,
            description: string,
            userId: number,
            boardId: number,
            stageId: number,
            status: string,
        }]
    }


    Get a task by taskId

    GET /v1/api/board/tasks/:taskId

    Reponse:
    {
        status: 'success',
        code: 200,
        result: {
            id: nummber,
            name: string,
            description: string,
            userId: number,
            boardId: number,
            stageId: number,
            status: string,
        }
    }

    Get a tasks by boardId or userId

    GET /v1/api/tasks?boardId=<boardId>&userId=<userId>

    Reponse:
    {
        status: 'success',
        code: 200,
        result: [{
            id: nummber,
            name: string,
            description: string,
            userId: number,
            boardId: number,
            stageId: number,
            status: string,
        }]
    }
