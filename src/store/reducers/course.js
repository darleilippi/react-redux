const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: "Iniciando com React",
            lessons: [
                {id: 1, title: "Aula 1"},
                {id: 2, title: "Aula 2"}
            ]
        },
        {
            id: 2,
            title: "Aprendendo Redux",
            lessons: [
                {id: 3, title: "Aula 1"},
                {id: 4, title: "Aula 2"}
            ]
        }
    ]
}

export default function reducer(state = INITIAL_STATE, action) {

    if (action.type === 'TOGGLE_LESSON') {
        return {
            ...state,
            activeModule: action.module,
            activeLesson: action.lesson
        };
    }

    return state;
}