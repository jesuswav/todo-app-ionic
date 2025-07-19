import React from "react";
import {
  IonItem,
  IonCheckbox,
  IonLabel,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { trashOutline } from "ionicons/icons"; // Ícono de eliminar
import "./TodoItem.css";

interface TodoItemProps {
  nombre: string;
  descripcion: string;
  completado: boolean;
  onToggle: () => void;
  onDelete: () => void; // Nueva prop para eliminar
}

const TodoItem: React.FC<TodoItemProps> = ({
  nombre,
  descripcion,
  completado,
  onToggle,
  onDelete,
}) => {
  return (
    <IonItem className="todo-item">
      <IonCheckbox slot="start" checked={completado} onIonChange={onToggle} />
      <IonLabel className="todo-content">
        <h2 className={completado ? "completed" : ""}>{nombre}</h2>
        <p>{descripcion}</p>
      </IonLabel>
      {/* Botón de eliminar */}
      <IonButton slot="end" fill="clear" color="danger" onClick={onDelete}>
        <IonIcon icon={trashOutline} />
      </IonButton>
    </IonItem>
  );
};

export default TodoItem;
