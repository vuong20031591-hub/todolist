checkcompleted: true
import Todo from '../models/Todo.js';

// Toggle the completed status of a todo item
const toggleTodoCompletion = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    todo.completed = !todo.completed;
    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export { toggleTodoCompletion };
// --- a/file:///c%3A/Users/Sen/Desktop/todolist/backend/src/controllers/todoController.js
// +++ b/file:///c%3A/Users/Sen/Desktop/todolist/backend/src/controllers/todoController.js
// @@ -1,1 +1,1 @@
// +
// -toggle complete status controller --- IGNORE ---