# trello-board

### Database

#### Users
| Column          | Type             | Description           |
| --------------- | ---------------- | --------------------- |
| `id`            | UUID / INT       | Primary key           |
| `name`          | VARCHAR          | Full name             |
| `email`         | VARCHAR (UNIQUE) | Email address         |
| `password_hash` | VARCHAR          | Hashed password       |
| `created_at`    | TIMESTAMP        | Account creation time |

#### Boards
| Column       | Type       | Description       |
| ------------ | ---------- | ----------------- |
| `id`         | UUID / INT | Primary key       |
| `name`       | VARCHAR    | Board name        |
| `owner_id`   | UUID / INT | FK to `users(id)` |
| `created_at` | TIMESTAMP  | Time of creation  |

#### board_members
| Column        | Type       | Description                 |
| ------------- | ---------- | --------------------------- |
| `id`          | UUID / INT | Primary key                 |
| `stage_id`    | UUID / INT | FK to `stages(id)`          |
| `title`       | VARCHAR    | Task title                  |
| `description` | TEXT       | Task description (optional) |
| `position`    | INT        | Ordering within the stage   |
| `due_date`    | TIMESTAMP  | Optional due date           |
| `created_at`  | TIMESTAMP  | Creation time               |

#### stages
| Column     | Type       | Description               |
| ---------- | ---------- | ------------------------- |
| `id`       | UUID / INT | Primary key               |
| `board_id` | UUID / INT | FK to `boards(id)`        |
| `name`     | VARCHAR    | Stage name                |

#### tasks
| Column        | Type       | Description                 |
| ------------- | ---------- | --------------------------- |
| `id`          | UUID / INT | Primary key                 |
| `stage_id`    | UUID / INT | FK to `stages(id)`          |
| `title`       | VARCHAR    | Task title                  |
| `description` | TEXT       | Task description (optional) |
| `position`    | INT        | Ordering within the stage   |
| `due_date`    | TIMESTAMP  | Optional due date           |
| `created_at`  | TIMESTAMP  | Creation time               |

#### task_assignes
| Column        | Type       | Description            |
| ------------- | ---------- | ---------------------- |
| `id`          | UUID / INT | Primary key            |
| `task_id`     | UUID / INT | FK to `tasks(id)`      |
| `user_id`     | UUID / INT | FK to `users(id)`      |
| `assigned_at` | TIMESTAMP  | When user was assigned |



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
