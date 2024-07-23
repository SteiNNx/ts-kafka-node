#!/bin/bash
# Autor: Jorge Reyes

# Incluir funciones de utilidad
source scripts/utilities/terminal_utils.sh

# Función para validar que npm está instalado y su versión
validate_npm() {
    info " === Init Bash === "
    warning "Validando instalación de npm..."
    breakline

    info " === Entorno Local === "
    check_command_version npm "npm"
    check_command_version node "Node.js"
    breakline

    # Obtener versiones de npm y Node.js
    npm_version=$(npm --version)

    success "npm validado exitosamente. Versión: $npm_version"

    if [ -f package.json ]; then
        success "Archivo package.json encontrado. ✓"
        breakline

        project_name=$(searchInsidePkgJson "name")
        required_node_version=$(searchInsidePkgJson "node")

        info "Nombre del proyecto: $project_name"
        info "Versión requerida package.json->engines->node: $required_node_version"
        breakline
    else
        critical_error "Error: archivo package.json no encontrado. No se pudo verificar la versión requerida de Node.js."
    fi
}

# Función para instalar dependencias con npm
install_dependencies() {
    warning "Instalando dependencias..."
    breakline
    npm install
    if [ $? -ne 0 ]; then
        critical_error "Error al instalar dependencias."
    fi
    success "Dependencias instaladas exitosamente."
    breakline
}

# Función para iniciar la aplicación con npm
start_application() {
    warning "Iniciando la aplicación..."
    breakline
    npm start
    if [ $? -ne 0 ]; then
        critical_error "Error al iniciar la aplicación."
    else
        success "Aplicación iniciada exitosamente."
    fi
}

# Función para ejecutar ambos pasos: instalar dependencias e iniciar la aplicación
install_and_start() {
    install_dependencies
    start_application
}

# Función principal
main() {
    validate_npm
    install_and_start
}

# Llamada a la función principal con los argumentos de línea de comandos
main "$@"