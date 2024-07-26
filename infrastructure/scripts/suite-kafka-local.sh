#!/bin/bash
# Autor: Jorge Reyes

# Incluir funciones de utilidad
source infrastructure/scripts/no_run/terminal_utils.sh

# Inicializar y levantar los servicios de Docker
init_suit_local_up() {
    print_current_directory
    source_env_vars ".env"
    docker-compose -f ./infrastructure/docker/docker-compose.yml down --volumes all --remove-orphans
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
