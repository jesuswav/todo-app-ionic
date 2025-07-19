import React, { useState } from "react";
import {
  IonContent,
  IonList,
  IonInput,
  IonItem,
  IonButton,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import TodoItem from "../../components/todoItem/TodoItem";
import CustomModal from "../../components/customModal/customModal";
import { todoClass } from "../../classes/todoClass";
import "./Todo.css";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<todoClass[]>([
    new todoClass("Comprar pan", "Pan integral"),
    new todoClass("Hacer ejercicio", "30 minutos", true),
  ]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState<number | null>(null);
  const [newTodo, setNewTodo] = useState({
    nombre: "Nombre",
    descripcion: "Descripción",
  });

  // Eliminar Todo
  const handleDelete = (index: number) => {
    setTodoToDelete(index);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (todoToDelete !== null) {
      setTodos(todos.filter((_, i) => i !== todoToDelete));
    }
    setShowDeleteModal(false);
  };

  // Agregar Todo
  const handleAddTodo = () => {
    setTodos([...todos, new todoClass(newTodo.nombre, newTodo.descripcion)]);
    setNewTodo({ nombre: "", descripcion: "" });
    setShowAddModal(false);
  };

  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo´s Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonList>
        {/* Lista de Todos */}
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            nombre={todo.nombre}
            descripcion={todo.descripcion}
            completado={todo.completado}
            onToggle={() => {
              const newTodos = [...todos];
              newTodos[index].completado = !newTodos[index].completado;
              setTodos(newTodos);
            }}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </IonList>

      {/* Botón para abrir modal de agregar */}
      <div className="button-container">
        <IonButton
          expand="block"
          className="add-button"
          onClick={() => setShowAddModal(true)}
        >
          Agregar Todo
        </IonButton>
      </div>

      {/* Modal para confirmar eliminación */}
      <CustomModal
        isOpen={showDeleteModal}
        title="Confirmar eliminación"
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      >
        <p>¿Estás seguro de eliminar esta tarea?</p>
      </CustomModal>

      {/* Modal para agregar nuevo Todo */}
      <CustomModal
        isOpen={showAddModal}
        title="Nueva tarea"
        onClose={() => setShowAddModal(false)}
        onConfirm={handleAddTodo}
      >
        <IonContent>
          <IonItem>
            <p>Hola</p>
            <IonInput
              label="Nombre"
              value={newTodo.nombre}
              onIonChange={(e) =>
                setNewTodo({ ...newTodo, nombre: e.detail.value! })
              }
            />
          </IonItem>
          <IonItem>
            <IonInput
              label="Descripción"
              value={newTodo.descripcion}
              onIonChange={(e) =>
                setNewTodo({ ...newTodo, descripcion: e.detail.value! })
              }
            />
          </IonItem>
        </IonContent>
      </CustomModal>
    </IonContent>
  );
};

export default Home;
