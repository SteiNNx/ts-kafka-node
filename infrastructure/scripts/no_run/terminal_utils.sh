#!/bin/bash
# terminal_utils.sh

# === Sección: Declaración de colores ===
# Colores para la terminal
declare -r COLOR_RESET="\e[0m"          # Resetear color al finalizar
declare -r COLOR_BOLD="\e[1m"           # Texto en negrita
declare -r COLOR_INFO="\e[36m"          # Cyan para información
declare -r COLOR_LOG="\e[94m"           # Azul claro para mensajes generales
declare -r COLOR_SUCCESS="\e[92m"       # Verde para éxito
declare -r COLOR_WARNING="\e[33m"       # Amarillo para advertencias
declare -r COLOR_ERROR="\e[91m"         # Rojo para errores

# === Sección: Funciones de mensajes ===
# Función para imprimir mensajes informativos
info() {
    echo -e "${COLOR_INFO}[INFO] ${COLOR_BOLD}$1${COLOR_RESET}"
}

# Función para imprimir mensajes generales
log() {
    echo -e "${COLOR_LOG}[LOG] ${COLOR_BOLD}$1${COLOR_RESET}"
}

# Función para imprimir mensajes de éxito
success() {
    echo -e "${COLOR_SUCCESS}[SUCCESS] ${COLOR_BOLD}$1${COLOR_RESET}"
}

# Función para imprimir mensajes de advertencia
warning() {
    echo -e "${COLOR_WARNING}[WARNING] ${COLOR_BOLD}$1${COLOR_RESET}"
}

# Función para imprimir mensajes de error
error() {
    echo -e "${COLOR_ERROR}[ERROR] ${COLOR_BOLD}$1${COLOR_RESET}"
}

# Función para imprimir mensajes de error crítico y salir
critical_error() {
    echo -e "${COLOR_ERROR}[CRITICAL ERROR] ${COLOR_BOLD}$1${COLOR_RESET}"
    exit 1
}

# Función para imprimir mensajes de depuración (solo si DEBUG_MODE está activado)
debug() {
    if [ "$DEBUG_MODE" = "true" ]; then
        echo -e "${COLOR_INFO}[DEBUG] ${COLOR_BOLD}$1${COLOR_RESET}"
    fi
}

# === Sección: Funciones de utilidad ===
# Función para imprimir líneas de separación
breakline() {
    local lines=${1:-1}
    for ((i = 0; i < lines; i++)); do
        echo ""
    done
}

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

# Función para registrar un mensaje en un archivo de registro
log_file() {
    local log_file="script.log"
    echo -e "$(date +'%Y-%m-%d %H:%M:%S') - $1" >>"$log_file"
}

# Función para validar que Docker está instalado y en ejecución
validate_docker() {
    if ! command -v docker &>/dev/null; then
        critical_error "Docker no está instalado. Por favor, instálalo antes de continuar."
    fi

    case "$OSTYPE" in
        linux-gnu*)
            systemctl is-active --quiet docker || critical_error "El servicio Docker no está activo. Por favor, inicia Docker antes de continuar."
            ;;
        darwin*)
            pgrep -x "Docker" >/dev/null || critical_error "El servicio Docker no está activo. Por favor, inicia Docker antes de continuar."
            ;;
        msys*)
            docker info >/dev/null 2>&1 || critical_error "El servicio Docker no está activo. Por favor, inicia Docker antes de continuar."
            ;;
        *)
            critical_error "Sistema operativo no soportado."
            ;;
    esac
}

# Función para validar que docker-compose está instalado
validate_docker_compose() {
    if ! command -v docker-compose &>/dev/null; then
        critical_error "docker-compose no está instalado. Por favor, instálalo antes de continuar."
    fi
}

# Función para verificar versión de comandos instalados
check_command_version() {
    local command=$1
    local label=$2
    if command -v $command &>/dev/null; then
        local version=$($command --version)
        info "$label: $version"
    else
        warning "$label no está instalado."
    fi
}

# Función para buscar y extraer un valor específico de package.json
searchInsidePkgJson() {
    local key=$1
    if [ -f package.json ]; then
        grep -m1 "\"$key\"" package.json | sed -E 's/.*: *"([^"]+)".*/\1/'
    else
        critical_error "Error: archivo package.json no encontrado."
    fi
}

# Función para imprimir el directorio actual
print_current_directory() {
    echo "Directorio actual: $(pwd)"
}
