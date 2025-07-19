// Definición de la clase Todo
export class todoClass {
  // Propiedades
  nombre: string;
  descripcion: string;
  completado: boolean;

  // Constructor para inicializar las propiedades
  constructor(
    nombre: string,
    descripcion: string,
    completado: boolean = false
  ) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.completado = completado;
  }

  // Método para marcar como completado
  marcarCompletado() {
    this.completado = true;
  }

  // Método para marcar como pendiente
  marcarPendiente() {
    this.completado = false;
  }
}
