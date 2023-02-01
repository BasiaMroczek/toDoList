{
    const tasks = [
        {
            content: "pierwsze zadanie",
            done: false,
        },
        {
            content: "drugie zadanie",
            done: true,
        },
    ];

    const addnewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove")

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done")

        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list list__item">
            <button class="list__button--add js-done">${task.done ? '🗸' : ''}</button>
            <span class= "list ${task.done ? "list__item--done" : "list"}">${task.content}
            </span>
            <button class="list__button--remove js-remove">🗑️</button>
            </li>
            `;
        }

        document.querySelector(".js-newTask").innerHTML = htmlString;

        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addnewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form")

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}