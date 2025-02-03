import React, { useState, useEffect } from "react";

const Task = ({ category }) => {
  // State for tasks and form inputs
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
 

  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return; // Don't add empty tasks

    // Create new task object
    const task = {
      id: Date.now(), // Simple way to generate unique id
      text: newTask,
      priority: priority || "Medium", // Default to Medium if not selected
      category: taskCategory || "General", // Default to General if not selected
      completed: false,
    };

    // Add new task to tasks array
    setTasks([...tasks, task]);

    // Reset form
    setNewTask("");
    setPriority("");
    setTaskCategory("");
  };

  // Handle task deletion
  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Handle task completion toggle
  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filter tasks based on the selected category
  const filteredTasks = category === "All" ? tasks : tasks.filter((task) => task.category === category);

  return (
    <main className="col-10 offset-2 mt-5 pt-4 " style={{border:"2px solid white"}}>
      <div className="p-4">
        <h2 className="mb-4">{category === "All" ? "All Tasks" : `${category} Tasks`}</h2>

        {/* Task Input Form */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add new task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
              </div>

              {/* Priority Dropdown */}
              <div className="col-6 col-md-3">
                <select
                  className="form-select"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}>
                  <option value="" disabled>Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              {/* Category Dropdown */}
              <div className="col-6 col-md-3">
                <select
                  className="form-select"
                  value={taskCategory}
                  onChange={(e) => setTaskCategory(e.target.value)}>
                  <option value="" disabled>Category</option>
                  <option value="Social">Social</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Savings">Savings</option>
                  <option value="Workouts">Workouts</option>
                </select>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  <i className="bi bi-plus-circle me-2"></i>
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Task List */}
        <div className="task-list mt-4">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <div key={task.id} className="card mb-3">
                <div className="card-body d-flex justify-content-between align-items-center">
                  {/* Left Side - Checkbox & Task Name */}
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="form-check-input me-3"
                      checked={task.completed}
                      onChange={() => handleToggleComplete(task.id)}
                    />
                    <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                      {task.text}
                    </span>
                  </div>

                  {/* Right Side - Priority, Category, Delete Button */}
                  <div className="d-flex align-items-center gap-3">
                    {/* Priority Badge */}
                    <span
                    className={`badge ${
                      task.priority.toLowerCase() === "high"
                        ? "bg-danger"
                        : task.priority.toLowerCase() === "medium"
                        ? "bg-warning"
                        : "bg-success"
                    }`}>
                    {task.priority}
                  </span>

                    {/* Category Badge */}
                    <span className="badge bg-info text-dark">{task.category}</span>

                    {/* Delete Button */}
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(task.id)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No tasks available.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Task;
