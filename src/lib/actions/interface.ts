export interface AddTodoReqBody {
    content: string;
    assignee: string;
    description: string;
};

export interface AddTodoResponse {
    createTodo: {
        assignee: string;
        description: string;
    };
};
