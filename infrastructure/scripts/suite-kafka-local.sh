#!/bin/bash
# Autor: Jorge Reyes

# Incluir funciones de utilidad
source infrastructure/scripts/no_run/terminal_utils.sh

# Función para cargar variables de entorno desde el archivo .env
source_env_vars() {
    local env_file="$1"
    if [ -f "$env_file" ]; then
        export $(grep -v '^#' "$env_file" | xargs)
        success "Archivo de variables de entorno encontrado"
        breakline
    else
        critical_error "Archivo de variables de entorno no encontrado: $env_file"
    fi
}

# Inicializar y levantar los servicios de Docker
init_suit_local_up() {
    print_current_directory
    source_env_vars ".env"
    docker-compose -f ./infrastructure/docker/docker-compose.yml up --build || {
        critical_error "Problemas al iniciar docker-compose.yml"
    }
}

# Función para validar y levantar Docker Compose
docker_compose_up() {
    log "Validando ambiente"
    breakline
    validate_docker
    validate_docker_compose
    init_suit_local_up
    success "todo ok"
}

# Función principal
main() {    
    docker_compose_up
}

# Llamada a la función principal con los argumentos de línea de comandos
main "$@"
