import React from "react";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
} from "@ionic/react";
import "./customModal.css";

interface CustomModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onConfirm?: () => void;
  children: React.ReactNode;
  showConfirm?: boolean;
  confirmText?: string;
  cancelText?: string;
  width?: string;
  height?: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  title,
  onClose,
  onConfirm,
  children,
  showConfirm = true,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  width = "80%",
  height = "auto",
}) => {
  return (
    <IonModal
      isOpen={isOpen}
      onDidDismiss={onClose}
      className="custom-modal"
      backdropDismiss={false}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">{children}</IonContent>
      <IonToolbar>
        <IonButtons slot="end">
          <IonButton onClick={onClose} color="medium">
            {cancelText}
          </IonButton>
          {showConfirm && (
            <IonButton onClick={onConfirm} color="primary">
              {confirmText}
            </IonButton>
          )}
        </IonButtons>
      </IonToolbar>
    </IonModal>
  );
};

export default CustomModal;
