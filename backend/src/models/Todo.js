//add complete checkbox and completed style
import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
// --- a/file:///c%3A/Users/Sen/Desktop/todolist/backend/src/models/Todo.js
// +++ b/file:///c%3A/Users/Sen/Desktop/todolist/backend/src/models/Todo.js
// @@ -1,1 +1,1 @@
// +
// -model --- IGNORE ---
