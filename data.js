    // Multas

    const multas = [
        { "id": 1, "articulo": "Art. 1.1", "descripcion": "Uso excesivo de claxon", "multa": "200 €" },
        { "id": 2, "articulo": "Art. 1.2", "descripcion": "Giro indebido", "multa": "250 €" },
        { "id": 3, "articulo": "Art. 1.3", "descripcion": "Cambio de carril en línea continua", "multa": "275 €" },
        { "id": 4, "articulo": "Art. 1.4", "descripcion": "Circular en sentido contrario", "multa": "400 € + Retirada de la licencia." },
        { "id": 5, "articulo": "Art. 1.5", "descripcion": "Estacionar de manera incorrecta", "multa": "150 €" },
        { "id": 6, "articulo": "Art. 1.6", "descripcion": "Obstruir la circulación", "multa": "300 €" },
        { "id": 7, "articulo": "Art. 1.7", "descripcion": "Saltarse un STOP", "multa": "225 €" },
        { "id": 8, "articulo": "Art. 1.8", "descripcion": "Saltarse un semáforo", "multa": "300 €" },
        { "id": 9, "articulo": "Art. 1.9", "descripcion": "No ceder el paso a vehículos de emergencia", "multa": "1250 € + Retirada de la licencia." },
        { "id": 10, "articulo": "Art. 1.10", "descripcion": "Realizar un adelantamiento indebido", "multa": "325 €" },
        { "id": 11, "articulo": "Art. 1.11", "descripcion": "Circular marcha atrás", "multa": "350 € + Retirada de la licencia." },
        { "id": 12, "articulo": "Art. 1.12", "descripcion": "Ignorar las indicaciones de un policía", "multa": "375 €" },
        { "id": 13, "articulo": "Art. 1.13", "descripcion": "Evadir un control policial", "multa": "450 €" },
        { "id": 14, "articulo": "Art. 1.14", "descripcion": "Darse a la fuga de un control policial", "multa": "1150 € + Retirada de la licencia." },
        { "id": 15, "articulo": "Art. 1.15", "descripcion": "Exceso de velocidad en vías interurbanas", "multa": "350 €" },
        { "id": 16, "articulo": "Art. 1.16", "descripcion": "Exceso de velocidad en vías secundarias", "multa": "250 €" },
        { "id": 17, "articulo": "Art. 1.17", "descripcion": "Conducir con el vehículo en malas condiciones", "multa": "275 € + vehículo incautado." },
        { "id": 18, "articulo": "Art. 1.18", "descripcion": "Conducir por la noche sin las luces", "multa": "300 €" },
        { "id": 19, "articulo": "Art. 1.19", "descripcion": "Conducir por el día con las luces", "multa": "100 €" },
        { "id": 20, "articulo": "Art. 1.20", "descripcion": "Conducir en un túnel o lugares oscuros sin luces", "multa": "325 €" },
        { "id": 21, "articulo": "Art. 1.21", "descripcion": "Circular por zonas no autorizadas", "multa": "350 €" },
        { "id": 22, "articulo": "Art. 1.22", "descripcion": "Estacionar en zonas no autorizadas", "multa": "450 €" },
        { "id": 23, "articulo": "Art. 1.23", "descripcion": "Conducir bajo las influencias del alcohol", "multa": "4500 € + Retirada de la licencia." },
        { "id": 24, "articulo": "Art. 1.24", "descripcion": "Conducir bajo la influencia de estupefacientes", "multa": "5500 € + Retirada de la licencia." },
        { "id": 25, "articulo": "Art. 1.25", "descripcion": "Circular sin permiso de conducir", "multa": "750 € + Vehículo Incautado." },
        { "id": 26, "articulo": "Art. 1.26", "descripcion": "Circular con el permiso de conducir caducado", "multa": "375 € + Vehículo Incautado." },
        { "id": 27, "articulo": "Art. 1.27", "descripcion": "Provocar una accidente", "multa": "1000 € + Retirada de la licencia." },
        { "id": 28, "articulo": "Art. 1.28", "descripcion": "Provocar un accidente y darse a la fuga", "multa": "2100 € + Retirada de la licencia + Vehículo Incautado." },
        { "id": 29, "articulo": "Art. 1.29", "descripcion": "Acoso al volante", "multa": "125 €" },
        { "id": 30, "articulo": "Art. 1.30", "descripcion": "Dañar mobiliario urbano", "multa": "100-5500 € (Depende de los daños)" },
        { "id": 31, "articulo": "Art. 1.31", "descripcion": "Atropellar a alguien", "multa": "1250 € + Retirada de la licencia + Vehículo Incautado." },
        { "id": 32, "articulo": "Art. 1.32", "descripcion": "Participar o crear una carrera ilegal", "multa": "1570 € + Retirada de la licencia + Vehículo Incautado." },
        { "id": 33, "articulo": "Art. 1.33", "descripcion": "Conducir con la ITV caducada", "multa": "300 €" },
        { "id": 34, "articulo": "Art. 1.34", "descripcion": "Conducir sin el cinturón de seguridad", "multa": "100 €" },
        { "id": 35, "articulo": "Art. 1.35", "descripcion": "Llevar a una persona en el maletero", "multa": "1575 € + Vehículo Incautado." },
        { "id": 36, "articulo": "Art. 1.36", "descripcion": "Iniciar una persecución", "multa": "2100 € + Retirada de la licencia + Vehículo Incautado." },
        { "id": 37, "articulo": "Art. 1.37", "descripcion": "Tirar objetos por la ventanilla del coche", "multa": "100 €" },
        { "id": 38, "articulo": "Art. 1.38", "descripcion": "Uso de suspensión hidráulica en movimiento", "multa": "150 €" },
        { "id": 39, "articulo": "Art. 1.39", "descripcion": "Conducir un vehículo sin matrícula", "multa": "450 € + Retirada de la licencia." },
        { "id": 40, "articulo": "Art. 1.40", "descripcion": "Conducir un vehículo con matrícula modificada o falsa", "multa": "1000 € + Retirada de la licencia + Vehículo Incautado." },
        { "id": 41, "articulo": "Art. 1.41", "descripcion": "Omisión al socorro de una persona no atendida", "multa": "1350 €" },
        { "id": 42, "articulo": "Art. 1.42", "descripcion": "Alterar el taxímetro", "multa": "900 € + Devolver lo estafado." },
        { "id": 43, "articulo": "Art. 1.43", "descripcion": "Dejar a un niño sin supervisión en el interior de un vehículo", "multa": "250 € - 3000 € (Dependiendo del tiempo en el que haya permanecido)" },
        { "id": 44, "articulo": "Art. 1.44", "descripcion": "No hacer uso de los intermitentes", "multa": "200 €" },
        { "id": 45, "articulo": "Art. 1.45", "descripcion": "Hacer mal uso de los intermitentes", "multa": "350 €" },
        { "id": 46, "articulo": "Art. 1.46", "descripcion": "Utilizar dispositivos móviles mientras conduces", "multa": "500 € + Retirada de la licencia." },
        { "id": 47, "articulo": "Art. 1.47", "descripcion": "Conducir siendo menor de edad", "multa": "300 €" },
        { "id": 48, "articulo": "Art. 1.48", "descripcion": "No guardar la distancia de seguridad entre vehículos", "multa": "100 €" },
        { "id": 49, "articulo": "Art. 1.49", "descripcion": "Conducción temeraria", "multa": "625 € + Retirada de la licencia." },
        { "id": 50, "articulo": "Art. 1.50", "descripcion": "Llevar la música demasiado alta", "multa": "75 €" },
        { "id": 51, "articulo": "Art. 1.51", "descripcion": "Posesión de elementos ilícitos en el interior del vehículo", "multa": "100-3500 € (Dependiendo del elemento encontrado)" },
        { "id": 52, "articulo": "Art. 1.52", "descripcion": "Transportar material inflamable o explosivo en vehículos no acondicionados", "multa": "850 € + Retirada del material." },
        { "id": 53, "articulo": "Art. 1.53", "descripcion": "Transportar material inflamable o explosivo sin permiso", "multa": "575 € + Retirada del material." },
        { "id": 54, "articulo": "Art. 1.54", "descripcion": "Conducir un vehículo sin tener el seguro activo", "multa": "375 € + Retirada de la licencia + Vehículo Incautado." },
        { "id": 55, "articulo": "Art. 1.55", "descripcion": "Conducir un vehículo quad, buggie o atv en zonas no autorizadas (autopista)", "multa": "150 €" },
        { "id": 56, "articulo": "Art. 2.1", "descripcion": "Robo a un civil", "multa": "150 €" },
        { "id": 57, "articulo": "Art. 2.2", "descripcion": "Robo a un civil con arma blanca", "multa": "250 €" },
        { "id": 58, "articulo": "Art. 2.3", "descripcion": "Robo a un civil con arma de fuego corta", "multa": "400 €" },
        { "id": 59, "articulo": "Art. 2.4", "descripcion": "Robo a un civil con arma de fuego larga", "multa": "700 €" },
        { "id": 60, "articulo": "Art. 2.5", "descripcion": "Robo a un civil con arma de fuego 'casera/especial'", "multa": "750 €" },
        { "id": 61, "articulo": "Art. 2.6", "descripcion": "Robo a un funcionario del estado", "multa": "700 €" },
        { "id": 62, "articulo": "Art. 2.7", "descripcion": "Robo a un funcionario del estado con arma blanca", "multa": "750 €" },
        { "id": 63, "articulo": "Art. 2.8", "descripcion": "Robo a un funcionario del estado con arma de fuego corta", "multa": "875 €" },
        { "id": 64, "articulo": "Art. 2.9", "descripcion": "Robo a un funcionario del estado con arma de fuego larga", "multa": "1000 €" },
        { "id": 65, "articulo": "Art. 2.10", "descripcion": "Robo a un funcionario del estado con arma de fuego 'casera/especial'", "multa": "1250 €" },
        { "id": 66, "articulo": "Art. 2.11", "descripcion": "Asalto a un civil con un arma falsa", "multa": "225 €" },
        { "id": 67, "articulo": "Art. 2.12", "descripcion": "Intimidación a un civil con un arma falsa", "multa": "300 €" },
        { "id": 68, "articulo": "Art. 2.13", "descripcion": "Asalto a un funcionario del estado con un arma falsa", "multa": "500 €" },
        { "id": 69, "articulo": "Art. 2.14", "descripcion": "Intimidación a un funcionario del estado con un arma falsa", "multa": "600 €" },
        { "id": 70, "articulo": "Art. 2.15", "descripcion": "Asalto a una propiedad publica", "multa": "1500 €" },
        { "id": 71, "articulo": "Art. 2.16", "descripcion": "Asalto a una propiedad publica a mano armada", "multa": "2250 €" },
        { "id": 72, "articulo": "Art. 2.17", "descripcion": "Asalto a una propiedad privada", "multa": "1800 €" },
        { "id": 73, "articulo": "Art. 2.18", "descripcion": "Asalto a una propiedad privada a mano armada", "multa": "2500 €" },
        { "id": 74, "articulo": "Art. 2.19", "descripcion": "Robo a una tienda de herramientas", "multa": "4500 €" },
        { "id": 75, "articulo": "Art. 2.20", "descripcion": "Robo a una gasolinera", "multa": "2250 €" },
        { "id": 76, "articulo": "Art. 2.21", "descripcion": "Robo a una empresa", "multa": "1900 €" },
        { "id": 77, "articulo": "Art. 2.22", "descripcion": "Robo a un ATM", "multa": "1250 €" },
        { "id": 78, "articulo": "Art. 2.23", "descripcion": "Robo a un taller de coches", "multa": "1600 €" },
        { "id": 79, "articulo": "Art. 2.24", "descripcion": "Robo a un restaurante de comida rápida", "multa": "1900 €" },
        { "id": 80, "articulo": "Art. 2.25", "descripcion": "Robo a un furgón bancario", "multa": "10000 €" },
        { "id": 81, "articulo": "Art. 2.26", "descripcion": "Robo a una joyería", "multa": "9500 €" },
        { "id": 82, "articulo": "Art. 2.27", "descripcion": "Robo a una sucursal bancaria", "multa": "27000 €" },
        { "id": 83, "articulo": "Art. 2.28", "descripcion": "Robo a un furgón de comida", "multa": "1000 €" },
        { "id": 84, "articulo": "Art. 2.29", "descripcion": "Apropiarse de pertenencias ajenas legales encontradas en la vía publica", "multa": "700 €" },
        { "id": 85, "articulo": "Art. 2.30", "descripcion": "Apropiarse de pertenencias ajenas ilegales encontradas en la vía publica", "multa": "1450 €" },
        { "id": 86, "articulo": "Art. 2.31", "descripcion": "Robo de un vehículo civil", "multa": "7000 - 25000 € (Dependiendo del vehículo robado)" },
        { "id": 87, "articulo": "Art. 2.32", "descripcion": "Robo de un vehículo médico", "multa": "20500 €" },
        { "id": 88, "articulo": "Art. 2.33", "descripcion": "Robo de un vehículo de bomberos", "multa": "25750 €" },
        { "id": 89, "articulo": "Art. 2.34", "descripcion": "Robo de un vehículo policial", "multa": "30500 €" },
        { "id": 90, "articulo": "Art. 2.35", "descripcion": "Robo de un vehículo presidencial", "multa": "50000 €" },
        { "id": 91, "articulo": "Art. 2.36", "descripcion": "Robo de un vehículo de transporte público", "multa": "7500 €" },
        { "id": 92, "articulo": "Art. 2.37", "descripcion": "Robo de un vehículo de transporte privado", "multa": "8500 €" },
        { "id": 93, "articulo": "Art. 2.38", "descripcion": "Allanamiento de morada", "multa": "1850 €" },
        { "id": 94, "articulo": "Art. 2.39", "descripcion": "Robo de material radiactivo", "multa": "100000 € + Solicitar Juicio" },
        { "id": 95, "articulo": "Art. 2.40", "descripcion": "Robo en edificio estatal", "multa": "32500 €" },
        { "id": 96, "articulo": "Art. 2.41", "descripcion": "Robo de información confidencial", "multa": "11500 €" },
        { "id": 97, "articulo": "Art. 2.42", "descripcion": "Robo de evidencias", "multa": "5000 €" },
        { "id": 98, "articulo": "Art. 2.43", "descripcion": "Robo de utensilios policiales", "multa": "1150 €" },
        { "id": 99, "articulo": "Art. 2.44", "descripcion": "Robo de material médico", "multa": "750 €" },
        { "id": 100, "articulo": "Art. 2.44", "descripcion": "Robo de material público", "multa": "850 €" },
        { "id": 101, "articulo": "Art. 3.1", "descripcion": "Intento de agresión", "multa": "100 €" },
        { "id": 102, "articulo": "Art. 3.2", "descripcion": "Agresión a un civil", "multa": "250 €" },
        { "id": 103, "articulo": "Art. 3.3", "descripcion": "Agresión a un bombero", "multa": "350 €" },
        { "id": 104, "articulo": "Art. 3.4", "descripcion": "Agresión a un médico", "multa": "350 €" },
        { "id": 105, "articulo": "Art. 3.5", "descripcion": "Agresión a un policía", "multa": "900 €" },
        { "id": 106, "articulo": "Art. 3.6", "descripcion": "Agresión a un fiscal", "multa": "1100 €" },
        { "id": 107, "articulo": "Art. 3.7", "descripcion": "Agresión a un abogado", "multa": "175 €" },
        { "id": 108, "articulo": "Art. 3.8", "descripcion": "Agresión a un juez", "multa": "1250 €" },
        { "id": 109, "articulo": "Art. 3.9", "descripcion": "Alteración del orden público", "multa": "375 €" },
        { "id": 110, "articulo": "Art. 3.10", "descripcion": "Racismo", "multa": "100 €" },
        { "id": 111, "articulo": "Art. 3.11", "descripcion": "Homofobia", "multa": "100 €" },
        { "id": 112, "articulo": "Art. 3.12", "descripcion": "Acoso", "multa": "250 €" },
        { "id": 113, "articulo": "Art. 3.13", "descripcion": "Acoso inmobiliario", "multa": "275 €" },
        { "id": 114, "articulo": "Art. 3.14", "descripcion": "Acoso laboral", "multa": "325 €" },
        { "id": 115, "articulo": "Art. 3.15", "descripcion": "Acoso escolar", "multa": "650 €" },
        { "id": 116, "articulo": "Art. 3.16", "descripcion": "Acoso psicológico", "multa": "450 €" },
        { "id": 117, "articulo": "Art. 3.17", "descripcion": "Acoso mediante coacción", "multa": "1250 €" },
        { "id": 118, "articulo": "Art. 3.18", "descripcion": "Acoso cibernético", "multa": "900 €" },
        { "id": 119, "articulo": "Art. 3.19", "descripcion": "Acoso sexual", "multa": "1275 €" },
        { "id": 120, "articulo": "Art. 3.20", "descripcion": "Intento de violación", "multa": "2700 €" },
        { "id": 121, "articulo": "Art. 3.21", "descripcion": "Abuso sexual", "multa": "2500 €" },
        { "id": 122, "articulo": "Art. 3.23", "descripcion": "Suplantación de identidad", "multa": "3000 €" },
        { "id": 123, "articulo": "Art. 3.24", "descripcion": "Suplantación de identidad para inculpar a un civil", "multa": "12500 €" },
        { "id": 124, "articulo": "Art. 3.25", "descripcion": "Tráfico de personas", "multa": "10500 € (por cada persona)" },
        { "id": 125, "articulo": "Art. 3.26", "descripcion": "Tráfico de menores", "multa": "12500 € (por cada persona)" },
        { "id": 126, "articulo": "Art. 3.27", "descripcion": "Maltrato", "multa": "475 €" },
        { "id": 127, "articulo": "Art. 3.28", "descripcion": "Maltrato animal", "multa": "450 €" },
        { "id": 128, "articulo": "Art. 3.29", "descripcion": "Maltrato psicológico", "multa": "125 €" },
        { "id": 129, "articulo": "Art. 3.30", "descripcion": "Violencia de género", "multa": "1350 €" },
        { "id": 130, "articulo": "Art. 3.31", "descripcion": "Intento de agresión a un menor de edad", "multa": "2550 €" },
        { "id": 131, "articulo": "Art. 3.32", "descripcion": "Agresión a un menor de edad", "multa": "3050 €" },
        { "id": 132, "articulo": "Art. 3.33", "descripcion": "Intento de violación a un menor de edad", "multa": "20000 €" },
        { "id": 133, "articulo": "Art. 3.35", "descripcion": "Abuso a un menor de edad", "multa": "2100 €" },
        { "id": 134, "articulo": "Art. 3.36", "descripcion": "Prostitución en la vía pública", "multa": "1950 €" },
        { "id": 135, "articulo": "Art. 3.37", "descripcion": "Prostitución en locales no autorizados", "multa": "9925 € + Cierre del local." },
        { "id": 136, "articulo": "Art. 3.38", "descripcion": "Disturbios en la vía pública", "multa": "400-2500 € (Dependiendo de la gravedad)" },
        { "id": 137, "articulo": "Art. 3.39", "descripcion": "Disturbios en una propiedad privada", "multa": "800 €" },
        { "id": 138, "articulo": "Art. 3.40", "descripcion": "Comercialización ilegal", "multa": "570 € + Incautar lo vendido." },
        { "id": 139, "articulo": "Art. 3.41", "descripcion": "Intentar convencer a alguien para que haga un delito", "multa": "1500 €" },
        { "id": 140, "articulo": "Art. 3.42", "descripcion": "Convencer a alguien para que haga un delito", "multa": "2000 €" },
        { "id": 141, "articulo": "Art. 3.43", "descripcion": "Conducta violenta", "multa": "175 €" },
        { "id": 142, "articulo": "Art. 3.44", "descripcion": "Crear una banda u organización ilegal peligrosa", "multa": "Solicitar Juicio." },
        { "id": 143, "articulo": "Art. 3.45", "descripcion": "Reclutar a civiles para una banda u organización ilegal", "multa": "17500 €" },
        { "id": 144, "articulo": "Art. 3.46", "descripcion": "Pertenecer a una banda u organización ilegal peligrosa", "multa": "85000 € + Solicitar Juicio." },
        { "id": 145, "articulo": "Art. 3.47", "descripcion": "Realizar una manifestación ilegal", "multa": "375 €" },
        { "id": 146, "articulo": "Art. 3.48", "descripcion": "Participar en una manifestación ilegal", "multa": "300 €" },
        { "id": 147, "articulo": "Art. 3.49", "descripcion": "Ir desnudo por la vía pública", "multa": "450 €" },
        { "id": 148, "articulo": "Art. 3.50", "descripcion": "Exhibicionismo desde una propiedad privada", "multa": "575 €" },
        { "id": 149, "articulo": "Art. 3.51", "descripcion": "Ir enmascarado sin motivo", "multa": "625 €" },
        { "id": 150, "articulo": "Art. 3.52", "descripcion": "Ir enmascarado para evitar reconocimiento y realizar actividades ilícitas", "multa": "1000 €" },
        { "id": 151, "articulo": "Art. 3.53", "descripcion": "Suplantación de identidad de un funcionario público", "multa": "1750 €" },
        { "id": 152, "articulo": "Art. 3.54", "descripcion": "Suplantación de identidad de un policía", "multa": "5500 €" },
        { "id": 153, "articulo": "Art. 3.55", "descripcion": "Insulto hacia un funcionario público", "multa": "125 €" },
        { "id": 154, "articulo": "Art. 3.56", "descripcion": "Uso de una aeronave no tripulada sin licencia", "multa": "170 €" },
        { "id": 155, "articulo": "Art. 3.57", "descripcion": "Obstruir el tráfico aéreo con una aeronave no tripulada", "multa": "350 € + Retirada de la licencia." },
        { "id": 156, "articulo": "Art. 3.58", "descripcion": "Volar una aeronave no tripulada por zonas restringidas/privadas", "multa": "650 € + Retirada de la licencia." },
        { "id": 157, "articulo": "Art. 3.59", "descripcion": "Alterar el orden en una detención con una aeronave no tripulada", "multa": "950 € + Retirada de la licencia." },
        { "id": 158, "articulo": "Art. 3.60", "descripcion": "Utilizar una aeronave no tripulada con fines ilícitos", "multa": "525 € + Retirada de la licencia." },
        { "id": 159, "articulo": "Art. 3.61", "descripcion": "Contaminar o degradar zonas naturales", "multa": "450 €" },
        { "id": 160, "articulo": "Art. 3.62", "descripcion": "Entrar en zonas restringidas", "multa": "400 € | 1000 € de ser reincidente." },
        { "id": 161, "articulo": "Art. 3.63", "descripcion": "Accionar una alarma de incendios sin ser una emergencia real", "multa": "2700-8500 € (Dependiendo de los efectivos y recursos empleados)" },
        { "id": 162, "articulo": "Art. 3.64", "descripcion": "Exhibir un arma de fuego en público", "multa": "675 € + Retirada del arma." },
        { "id": 163, "articulo": "Art. 3.65", "descripcion": "Portar un chaleco antibalas sin pertenecer a las FCSE o medios de comunicación", "multa": "650 €" },
        { "id": 164, "articulo": "Art. 3.66", "descripcion": "Iniciar un incendio", "multa": "950-2100 €" },
        { "id": 165, "articulo": "Art. 3.67", "descripcion": "Tala de árboles sin autorización", "multa": "750 €" },
        { "id": 166, "articulo": "Art. 3.68", "descripcion": "Caza ilegal de animales", "multa": "1000 €" },
        { "id": 167, "articulo": "Art. 3.69", "descripcion": "Tirar basura al suelo o sustancias que contaminen el medioambiente", "multa": "350-800 €" },
        { "id": 168, "articulo": "Art. 3.70", "descripcion": "Quema de residuos", "multa": "650-1000 €" },
        { "id": 169, "articulo": "Art. 3.71", "descripcion": "Deforestación y destrucción de hábitats", "multa": "750-1100 €" },
        { "id": 170, "articulo": "Art. 4.1", "descripcion": "Posesión de arma ilegal", "multa": "1000 €" },
        { "id": 171, "articulo": "Art. 4.2", "descripcion": "Posesión de arma corta sin licencia", "multa": "1500 €" },
        { "id": 172, "articulo": "Art. 4.3", "descripcion": "Posesión de armas larga", "multa": "2250 €" },
        { "id": 173, "articulo": "Art. 4.4", "descripcion": "Posesión de armas 'caseras/especiales'", "multa": "2500 €" },
        { "id": 174, "articulo": "Art. 4.5", "descripcion": "Uso indebido de armas cortas sin licencia", "multa": "2000 €" },
        { "id": 175, "articulo": "Art. 4.6", "descripcion": "Uso indebido de arma corta ilegal", "multa": "2550 €" },
        { "id": 176, "articulo": "Art. 4.7", "descripcion": "Uso indebido de armas largas", "multa": "3250 €" },
        { "id": 177, "articulo": "Art. 4.8", "descripcion": "Uso indebido de armas 'caseras/especiales'", "multa": "3500 €" },
        { "id": 178, "articulo": "Art. 4.9", "descripcion": "Posesión de armas cortas con intención de realizar contrabando", "multa": "4500 €" },
        { "id": 179, "articulo": "Art. 4.10", "descripcion": "Posesión de armas largas con intención de realizar contrabando", "multa": "9750 €" },
        { "id": 180, "articulo": "Art. 4.11", "descripcion": "Posesión de armas 'caseras/especiales' con intención de contrabando", "multa": "12000 €" },
        { "id": 181, "articulo": "Art. 4.12", "descripcion": "Uso indebido de armas cortas con licencia", "multa": "2200 € + Retirada de la licencia" },
        { "id": 182, "articulo": "Art. 4.13", "descripcion": "Iniciar un tiroteo con un arma corta", "multa": "2750 €" },
        { "id": 183, "articulo": "Art. 4.14", "descripcion": "Iniciar un tiroteo con un arma corta ilegal", "multa": "3250 €" },
        { "id": 184, "articulo": "Art. 4.15", "descripcion": "Iniciar un tiroteo con un arma larga", "multa": "4100 €" },
        { "id": 185, "articulo": "Art. 4.16", "descripcion": "Iniciar un tiroteo con un arma 'casera/especial'", "multa": "4300 €" },
        { "id": 186, "articulo": "Art. 4.17", "descripcion": "Iniciar un tiroteo con un arma corta sin licencia", "multa": "2300 €" },
        { "id": 187, "articulo": "Art. 4.18", "descripcion": "Iniciar un tiroteo con un arma corta con licencia", "multa": "2450 €" },
        { "id": 188, "articulo": "Art. 4.19", "descripcion": "Venta ilícita de armas", "multa": "15750 €" },
        { "id": 189, "articulo": "Art. 4.20", "descripcion": "Compra de armas ilegales", "multa": "2570 €" },
        { "id": 190, "articulo": "Art. 4.21", "descripcion": "Provocar disturbios con arma de fuego", "multa": "1250 €" },
        { "id": 191, "articulo": "Art. 4.22", "descripcion": "Provocar disturbios con arma blanca", "multa": "875 €" },
        { "id": 192, "articulo": "Art. 4.23", "descripcion": "Posesión de arma blanca", "multa": "500 €" },
        { "id": 193, "articulo": "Art. 4.24", "descripcion": "Intento de agresión con arma blanca", "multa": "825 €" },
        { "id": 194, "articulo": "Art. 4.25", "descripcion": "Agresión con arma blanca", "multa": "950 €" },
        { "id": 195, "articulo": "Art. 4.26", "descripcion": "Posesión de estupefacientes", "multa": "2000 € X Kg" },
        { "id": 196, "articulo": "Art. 4.27", "descripcion": "Consumo de bebidas alcohólicas en la vía pública", "multa": "350 €" },
        { "id": 197, "articulo": "Art. 4.28", "descripcion": "Consumo de estupefacientes en la vía pública", "multa": "1150 €" },
        { "id": 198, "articulo": "Art. 4.29", "descripcion": "Posesión de sustancias ilícitas con intención de contrabando", "multa": "5700 €" },
        { "id": 199, "articulo": "Art. 4.30", "descripcion": "Venta de alcohol a menores", "multa": "750 €" },
        { "id": 200, "articulo": "Art. 4.31", "descripcion": "Venta de estupefacientes a menores", "multa": "1075 €" },
        { "id": 201, "articulo": "Art. 4.32", "descripcion": "Tráfico de drogas", "multa": "7500 € X Kg" },
        { "id": 202, "articulo": "Art. 4.33", "descripcion": "Ir bajo los efectos de estupefacientes en vía pública", "multa": "1000 €" },
        { "id": 203, "articulo": "Art. 4.34", "descripcion": "Portar una caja de munición", "multa": "720 € + Retirada de la caja" },
        { "id": 204, "articulo": "Art. 5.1", "descripcion": "Intento de homicidio sin armas a un civil", "multa": "1100 €" },
        { "id": 205, "articulo": "Art. 5.2", "descripcion": "Intento de homicidio con arma blanca a un civil", "multa": "1500 €" },
        { "id": 206, "articulo": "Art. 5.3", "descripcion": "Intento de homicidio con arma corta a un civil", "multa": "1850 €" },
        { "id": 207, "articulo": "Art. 5.4", "descripcion": "Intento de homicidio con arma larga a un civil", "multa": "2150 €" },
        { "id": 208, "articulo": "Art. 5.5", "descripcion": "Intento de homicidio con arma 'casera/especial' a un civil", "multa": "2250 €" },
        { "id": 209, "articulo": "Art. 5.6", "descripcion": "Intento de homicidio sin armas a un funcionario", "multa": "1600 €" },
        { "id": 210, "articulo": "Art. 5.7", "descripcion": "Intento de homicidio con arma blanca a un funcionario", "multa": "1750 €" },
        { "id": 211, "articulo": "Art. 5.8", "descripcion": "Intento de homicidio con arma corta a un funcionario", "multa": "1900 €" },
        { "id": 212, "articulo": "Art. 5.9", "descripcion": "Intento de homicidio con arma larga a un funcionario", "multa": "2000 €" },
        { "id": 213, "articulo": "Art. 5.10", "descripcion": "Intento de homicidio con arma 'casera/especial' a un funcionario", "multa": "2100 €" },
        { "id": 214, "articulo": "Art. 5.11", "descripcion": "Homicidio sin armas a un civil", "multa": "1500 €" },
        { "id": 215, "articulo": "Art. 5.12", "descripcion": "Homicidio con arma blanca a un civil", "multa": "1850 €" },
        { "id": 216, "articulo": "Art. 5.13", "descripcion": "Homicidio con arma corta a un civil", "multa": "2100 €" },
        { "id": 217, "articulo": "Art. 5.14", "descripcion": "Homicidio con arma larga a un civil", "multa": "2350 €" },
        { "id": 218, "articulo": "Art. 5.15", "descripcion": "Homicidio con arma 'casera/especial' a un civil", "multa": "2500 €" },
        { "id": 219, "articulo": "Art. 5.16", "descripcion": "Homicidio sin armas a un funcionario", "multa": "1750 €" },
        { "id": 220, "articulo": "Art. 5.17", "descripcion": "Homicidio con arma blanca a un funcionario", "multa": "2000 €" },
        { "id": 221, "articulo": "Art. 5.18", "descripcion": "Homicidio con arma corta a un funcionario", "multa": "2250 €" },
        { "id": 222, "articulo": "Art. 5.19", "descripcion": "Homicidio con arma larga a un funcionario", "multa": "2750 €" },
        { "id": 223, "articulo": "Art. 5.20", "descripcion": "Homicidio con arma 'casera/especial' a un funcionario", "multa": "3000 €" },
        { "id": 224, "articulo": "Art. 5.21", "descripcion": "Intento de homicidio a un animal sin arma", "multa": "500 €" },
        { "id": 225, "articulo": "Art. 5.22", "descripcion": "Intento de homicidio a un animal con arma blanca", "multa": "750 €" },
        { "id": 226, "articulo": "Art. 5.23", "descripcion": "Homicidio a un animal sin arma", "multa": "900 €" },
        { "id": 227, "articulo": "Art. 5.24", "descripcion": "Intento de homicidio a un animal con arma de fuego", "multa": "1000 €" },
        { "id": 228, "articulo": "Art. 5.25", "descripcion": "Intento de secuestro a un civil", "multa": "1150 €" },
        { "id": 229, "articulo": "Art. 5.26", "descripcion": "Intento de secuestro a un menor", "multa": "1750 €" },
        { "id": 230, "articulo": "Art. 5.27", "descripcion": "Intento de secuestro a un funcionario", "multa": "1250 €" },
        { "id": 231, "articulo": "Art. 5.28", "descripcion": "Secuestro a un civil", "multa": "1500 €" },
        { "id": 232, "articulo": "Art. 5.29", "descripcion": "Secuestro a un menor", "multa": "2500 €" },
        { "id": 233, "articulo": "Art. 5.30", "descripcion": "Secuestro a un funcionario", "multa": "2000 €" },
        { "id": 234, "articulo": "Art. 5.31", "descripcion": "Realizar un secuestro para coaccionar a un tercero", "multa": "3500 €" },
        { "id": 235, "articulo": "Art. 5.32", "descripcion": "Realizar un secuestro con la intención de robar", "multa": "1000 €" },
        { "id": 236, "articulo": "Art. 5.33", "descripcion": "Amenaza realizada pidiendo una cantidad o poniendo condiciones", "multa": "3000 €" },
        { "id": 237, "articulo": "Art. 5.34", "descripcion": "Amenaza realizada de manera no condicional", "multa": "600 €" },
        { "id": 238, "articulo": "Art. 5.35", "descripcion": "Amenazar con un mal que no constituya peligro", "multa": "100 €" },
        { "id": 239, "articulo": "Art. 5.36", "descripcion": "Extorsión a una persona", "multa": "1000 €" },
        { "id": 240, "articulo": "Art. 5.37", "descripcion": "Extorsión a un negocio", "multa": "3200 €" },
        { "id": 241, "articulo": "Art. 5.38", "descripcion": "Extorsión a un funcionario", "multa": "2900 €" },
        { "id": 242, "articulo": "Art. 5.39", "descripcion": "Extorsión a un juez", "multa": "18500 €" },
        { "id": 243, "articulo": "Art. 5.40", "descripcion": "Extorsión a un detenido", "multa": "1500 €" },
        { "id": 244, "articulo": "Art. 5.41", "descripcion": "Falso testimonio", "multa": "500-2750 € (Dependiendo de la situación)" },
        { "id": 245, "articulo": "Art. 6.1", "descripcion": "No llevar licencia de arma teniendo el arma", "multa": "50 €" },
        { "id": 246, "articulo": "Art. 6.2", "descripcion": "No llevar el carnet de conducir estando conduciendo", "multa": "75 €" },
        { "id": 247, "articulo": "Art. 6.3", "descripcion": "No llevar documentación que permita identificarte en alerta roja", "multa": "350 €" },
        { "id": 248, "articulo": "Art. 6.4", "descripcion": "No llevar la documentación del coche en el coche", "multa": "Incautación del Vehículo" },
        { "id": 249, "articulo": "Art. 6.5", "descripcion": "Negarse a identificarse", "multa": "600 €" },
        { "id": 250, "articulo": "Art. 6.6", "descripcion": "No llevar la documentación en regla/no tener documentación", "multa": "Auditoría con Fiscal y Fronteras" },
        { "id": 251, "articulo": "Art. 6.7", "descripcion": "Falsificar un documento", "multa": "12000 €" },
        { "id": 252, "articulo": "Art. 6.8", "descripcion": "Posesión de un documento falso", "multa": "1950 €" },
        { "id": 253, "articulo": "Art. 6.9", "descripcion": "Falsificar una licencia", "multa": "1900 €" },
        { "id": 254, "articulo": "Art. 6.10", "descripcion": "Posesión de una licencia falsificada", "multa": "1750 €" },
        { "id": 255, "articulo": "Art. 6.11", "descripcion": "Pescar en lugares no autorizados para esa actividad", "multa": "600 €" },
        { "id": 256, "articulo": "Art. 6.12", "descripcion": "Hacer uso de artefactos explosivos sin permiso o licencia", "multa": "7500 €" },
        { "id": 257, "articulo": "Art. 6.13", "descripcion": "Intento de soborno a un funcionario", "multa": "3500 €" },
        { "id": 258, "articulo": "Art. 6.14", "descripcion": "Sobornar a un funcionario", "multa": "8500 €" },
        { "id": 259, "articulo": "Art. 6.15", "descripcion": "Realizar una llamada falsa", "multa": "1600 €" },
        { "id": 260, "articulo": "Art. 6.16", "descripcion": "Realizar un falso reporte de bomba", "multa": "19000 €" },
        { "id": 261, "articulo": "Art. 6.17", "descripcion": "Reportar un falso atentado terrorista", "multa": "28000 €" },
        { "id": 262, "articulo": "Art. 6.18", "descripcion": "Desacato a la autoridad", "multa": "500 €" },
        { "id": 263, "articulo": "Art. 6.19", "descripcion": "Uso indebido de la línea de emergencias", "multa": "1000 €" },
        { "id": 264, "articulo": "Art. 6.20", "descripcion": "Resistirse al arresto", "multa": "825 €" },
        { "id": 265, "articulo": "Art. 6.21", "descripcion": "Huir de la justicia", "multa": "1250 €" },
        { "id": 266, "articulo": "Art. 6.22", "descripcion": "Terrorismo", "multa": "100000 € + Solicitar Juicio" },
        { "id": 267, "articulo": "Art. 6.23", "descripcion": "Provocar un incendio", "multa": "25000 €" },
        { "id": 268, "articulo": "Art. 6.24", "descripcion": "Suplantación de identidad cibernética", "multa": "2250 €" },
        { "id": 269, "articulo": "Art. 6.25", "descripcion": "Doxeo", "multa": "1570 €" },
        { "id": 270, "articulo": "Art. 6.26", "descripcion": "Violación de la privacidad", "multa": "1350 €" },
        { "id": 271, "articulo": "Art. 6.27", "descripcion": "Estafa cibernética", "multa": "2700 €" },
        { "id": 272, "articulo": "Art. 6.28", "descripcion": "Fraude bancario", "multa": "6250 €" },
        { "id": 273, "articulo": "Art. 6.29", "descripcion": "Hackear instituciones estatales", "multa": "9400 €" },
        { "id": 274, "articulo": "Art. 6.30", "descripcion": "Manipular las luces de la ciudad", "multa": "1200 €" },
        { "id": 275, "articulo": "Art. 6.31", "descripcion": "Manipular señales de radio o conexión", "multa": "1500 €" },
        { "id": 276, "articulo": "Art. 6.32", "descripcion": "Realizar ataques de denegación de servicio", "multa": "1900 €" },
        { "id": 277, "articulo": "Art. 6.33", "descripcion": "Hackear un dispositivo móvil para localizarlo", "multa": "1550 €" },
        { "id": 278, "articulo": "Art. 6.34", "descripcion": "Destruir información confidencial de la red", "multa": "19000 €" },
        { "id": 279, "articulo": "Art. 6.35", "descripcion": "Manipular los sistemas de seguridad de un local", "multa": "1800 €" },
        { "id": 280, "articulo": "Art. 6.36", "descripcion": "Manipular los sistemas de seguridad de un lugar público", "multa": "2200 €" },
        { "id": 281, "articulo": "Art. 6.37", "descripcion": "Blanqueo de capitales", "multa": "32000 € (Menos de 20K blanqueados), 74500 € (Menos de 50K blanqueados), 97300 € (Menos de 100K blanqueados), 145600 € (Más de 100K blanqueados)" },
        { "id": 282, "articulo": "Art. 6.38", "descripcion": "Evasión de impuestos", "multa": "Pagar el importe que se evadió + 25000 €" },
        { "id": 283, "articulo": "Art. 6.39", "descripcion": "Portar más de 100000 euros en efectivo en vía pública", "multa": "Dinero intervenido + 800 €" },
        { "id": 284, "articulo": "Art. 6.40", "descripcion": "No portar documentación que afirme ser el portador del establecimiento o empresa laboral, ante una inspección", "multa": "5000-10000 €" },
        { "id": 285, "articulo": "Art. 7.1", "descripcion": "Corrupción", "multa": "15000 €" },
        { "id": 286, "articulo": "Art. 7.2", "descripcion": "Dictar una sentencia opuesta a la real a propósito", "multa": "7500 €" },
        { "id": 287, "articulo": "Art. 7.3", "descripcion": "Abuso de poder", "multa": "750-18000 € (Dependiendo del tipo de abuso)" },
        { "id": 288, "articulo": "Art. 7.4", "descripcion": "Abuso policial", "multa": "900-1200 € (Dependiendo del tipo de abuso)" },
        { "id": 289, "articulo": "Art. 7.5", "descripcion": "Omitir una señal de socorro", "multa": "1500 €" },
        { "id": 290, "articulo": "Art. 7.6", "descripcion": "Ignorar delitos de terceros no mencionados en el capítulo 1", "multa": "2350 €" },
        { "id": 291, "articulo": "Art. 7.7", "descripcion": "Acusar a un civil con la intención de inculparlo cuando no ha hecho nada", "multa": "14000 €" },
        { "id": 292, "articulo": "Art. 7.8", "descripcion": "Encubrir a un criminal", "multa": "18000 €" },
        { "id": 293, "articulo": "Art. 7.9", "descripcion": "No acudir a una llamada sin un motivo", "multa": "700 €" },
        { "id": 294, "articulo": "Art. 7.10", "descripcion": "No acudir a una llamada de QRR sin motivo", "multa": "2500 €" },
        { "id": 295, "articulo": "Art. 7.11", "descripcion": "No asistir a un código 0 sin motivo", "multa": "1865 €" },
        { "id": 296, "articulo": "Art. 7.12", "descripcion": "Desobedecer una orden directa de un superior", "multa": "250 €" },
        { "id": 297, "articulo": "Art. 7.12.1", "descripcion": "Mantener fichaje abierto fuera del horario laboral", "multa": "300-999 € (Dependiendo de las horas)" },
        { "id": 298, "articulo": "Art. 7.13", "descripcion": "Filtrar información confidencial", "multa": "5000 €" },
        { "id": 299, "articulo": "Art. 7.14", "descripcion": "Robar documentos estatales", "multa": "10000 €" },
        { "id": 300, "articulo": "Art. 7.15", "descripcion": "Revelar datos personales", "multa": "950 €" },
        { "id": 301, "articulo": "Art. 7.16", "descripcion": "Revelar datos de una operación", "multa": "9000 €" },
        { "id": 302, "articulo": "Art. 7.17", "descripcion": "Revelar secretos del estado", "multa": "Solicitar Juicio" },
        { "id": 303, "articulo": "Art. 7.18", "descripcion": "Aceptar un soborno comprendido entre 0-10k", "multa": "5000 €" },
        { "id": 304, "articulo": "Art. 7.19", "descripcion": "Aceptar un soborno comprendido entre 11k-20k", "multa": "10000 €" },
        { "id": 305, "articulo": "Art. 7.20", "descripcion": "Aceptar un soborno comprendido entre 21k-30k", "multa": "15000 €" },
        { "id": 306, "articulo": "Art. 7.21", "descripcion": "Aceptar un soborno comprendido entre 31k-40k", "multa": "20000 €" },
        { "id": 307, "articulo": "Art. 7.22", "descripcion": "Aceptar un soborno comprendido entre 41k-50k", "multa": "25000 €" },
        { "id": 308, "articulo": "Art. 7.23", "descripcion": "Aceptar un soborno comprendido entre 51k-90k", "multa": "70000 €" },
        { "id": 309, "articulo": "Art. 7.24", "descripcion": "Aceptar un soborno mayor de 100k", "multa": "120000 €" },
        { "id": 310, "articulo": "Art. 7.25", "descripcion": "Hacer mal uso general de la radio", "multa": "500 €" },
        { "id": 311, "articulo": "Art. 7.26", "descripcion": "Saturar la radio", "multa": "1250 €" },
        { "id": 312, "articulo": "Art. 7.27", "descripcion": "Poner música en la radio", "multa": "1500 €" },
        { "id": 313, "articulo": "Art. 7.28", "descripcion": "Insultar o faltar el respeto a un compañero en radio", "multa": "1000 €" },
        { "id": 314, "articulo": "Art. 7.29", "descripcion": "Hablar de cosas irrelevantes por radio", "multa": "750 €" },
        { "id": 315, "articulo": "Art. 7.30", "descripcion": "Hablar de cosas irrelevantes por radio en un momento de tensión", "multa": "950 €" },
        { "id": 316, "articulo": "Art. 7.31", "descripcion": "Dejar el vehículo obstruyendo la vía pública innecesariamente", "multa": "500 €" },
        { "id": 317, "articulo": "Art. 7.32", "descripcion": "Hacer un uso indebido de las luces de emergencia", "multa": "1500 €" },
        { "id": 318, "articulo": "Art. 7.33", "descripcion": "Hacer un uso indebido de las sirenas de emergencia", "multa": "1750 €" },
        { "id": 319, "articulo": "Art. 7.34", "descripcion": "Hacer uso incorrecto del vehículo de emergencias", "multa": "500-12500 € (Dependiendo del mal uso que se le da al vehículo)" },
        { "id": 320, "articulo": "Art. 7.35", "descripcion": "Hacer mal uso de dispositivos o aeronaves de vigilancia", "multa": "950 €" }
        ];

    // Premultas
// Datos de las pmultas
const pmultas = [
    {
        "titulo": "Iniciar una persecución",
        "articulos": [
            { "id": 36, "articulo": "Art. 1.36", "descripcion": "Iniciar una persecución", "multa": "2100 € + Retirada de la licencia + Vehículo Incautado." },
            { "id": 49, "articulo": "Art. 1.49", "descripcion": "Conducción temeraria", "multa": "625 € + Retirada de la licencia." }
        ]
    },
    {
        "titulo": "Iniciar una persecución + Conducir sin seguro",
        "articulos": [
            { "id": 36, "articulo": "Art. 1.36", "descripcion": "Iniciar una persecución", "multa": "2100 € + Retirada de la licencia + Vehículo Incautado." },
            { "id": 49, "articulo": "Art. 1.49", "descripcion": "Conducción temeraria", "multa": "625 € + Retirada de la licencia." },
            { "id": 54, "articulo": "Art. 1.54", "descripcion": "Conducir un vehículo sin tener el seguro activo", "multa": "375 € + Retirada de la licencia + Vehículo Incautado." }
        ]
    },
    {
        "titulo": "Iniciar una persecución + Circular sin permiso",
        "articulos": [
            { "id": 36, "articulo": "Art. 1.36", "descripcion": "Iniciar una persecución", "multa": "2100 € + Retirada de la licencia + Vehículo Incautado." },
            { "id": 49, "articulo": "Art. 1.49", "descripcion": "Conducción temeraria", "multa": "625 € + Retirada de la licencia." },
            { "id": 25, "articulo": "Art. 1.25", "descripcion": "Circular sin permiso de conducir", "multa": "750 € + Vehículo Incautado." }
        ]
    },
    {
        "titulo": "Iniciar una persecución + Conducir sin seguro + Circular sin permiso",
        "articulos": [
            { "id": 36, "articulo": "Art. 1.36", "descripcion": "Iniciar una persecución", "multa": "2100 € + Retirada de la licencia + Vehículo Incautado." },
            { "id": 49, "articulo": "Art. 1.49", "descripcion": "Conducción temeraria", "multa": "625 € + Retirada de la licencia." },
            { "id": 54, "articulo": "Art. 1.54", "descripcion": "Conducir un vehículo sin tener el seguro activo", "multa": "375 € + Retirada de la licencia + Vehículo Incautado." },
            { "id": 25, "articulo": "Art. 1.25", "descripcion": "Circular sin permiso de conducir", "multa": "750 € + Vehículo Incautado." }
        ]
    },
    {
        "titulo": "Iniciar una persecución + huir de la justicia",
        "articulos": [
            { "id": 36, "articulo": "Art. 1.36", "descripcion": "Iniciar una persecución", "multa": "2100 € + Retirada de la licencia + Vehículo Incautado." },
            { "id": 49, "articulo": "Art. 1.49", "descripcion": "Conducción temeraria", "multa": "625 € + Retirada de la licencia." },
            { "id": 265, "articulo": "Art. 6.21", "descripcion": "Huir de la justicia", "multa": "1250 €" }
        ]
    },
    {
        "titulo": "Iniciar una persecución + Conducir sin seguro + huir de la justicia",
        "articulos": [
            { "id": 36, "articulo": "Art. 1.36", "descripcion": "Iniciar una persecución", "multa": "2100 € + Retirada de la licencia + Vehículo Incautado." },
            { "id": 49, "articulo": "Art. 1.49", "descripcion": "Conducción temeraria", "multa": "625 € + Retirada de la licencia." },
            { "id": 54, "articulo": "Art. 1.54", "descripcion": "Conducir un vehículo sin tener el seguro activo", "multa": "375 € + Retirada de la licencia + Vehículo Incautado." },
            { "id": 265, "articulo": "Art. 6.21", "descripcion": "Huir de la justicia", "multa": "1250 €" }
        ]
    },
    {
        "titulo": "Iniciar una persecución + Circular sin permiso + huir de la justicia",
        "articulos": [
            { "id": 36, "articulo": "Art. 1.36", "descripcion": "Iniciar una persecución", "multa": "2100 € + Retirada de la licencia + Vehículo Incautado." },
            { "id": 49, "articulo": "Art. 1.49", "descripcion": "Conducción temeraria", "multa": "625 € + Retirada de la licencia." },
            { "id": 25, "articulo": "Art. 1.25", "descripcion": "Circular sin permiso de conducir", "multa": "750 € + Vehículo Incautado." },
            { "id": 265, "articulo": "Art. 6.21", "descripcion": "Huir de la justicia", "multa": "1250 €" }
        ]
    },
    {
        "titulo": "Iniciar una persecución + Conducir sin seguro + Circular sin permiso + huir de la justicia",
        "articulos": [
            { "id": 36, "articulo": "Art. 1.36", "descripcion": "Iniciar una persecución", "multa": "2100 € + Retirada de la licencia + Vehículo Incautado." },
            { "id": 49, "articulo": "Art. 1.49", "descripcion": "Conducción temeraria", "multa": "625 € + Retirada de la licencia." },
            { "id": 54, "articulo": "Art. 1.54", "descripcion": "Conducir un vehículo sin tener el seguro activo", "multa": "375 € + Retirada de la licencia + Vehículo Incautado." },
            { "id": 25, "articulo": "Art. 1.25", "descripcion": "Circular sin permiso de conducir", "multa": "750 € + Vehículo Incautado." },
            { "id": 265, "articulo": "Art. 6.21", "descripcion": "Huir de la justicia", "multa": "1250 €" }
        ]
    },
    {
        "titulo": "Iniciar un tiroteo con arma corta con licencia de armas",
        "articulos": [
            { "id": 187, "articulo": "Art. 4.18", "descripcion": "Iniciar un tiroteo con un arma corta con licencia", "multa": "2450 €" },
            { "id": 181, "articulo": "Art. 4.12", "descripcion": "Uso indebido de armas cortas con licencia", "multa": "2200 € + Retirada de la licencia" }
        ]
    },
    {
        "titulo": "Iniciar un tiroteo con arma corta sin licencia de armas",
        "articulos": [
            { "id": 186, "articulo": "Art. 4.17", "descripcion": "Iniciar un tiroteo con un arma corta sin licencia", "multa": "2300 €" },
            { "id": 174, "articulo": "Art. 4.5", "descripcion": "Uso indebido de armas cortas sin licencia", "multa": "2000 €" }
        ]
    },
    {
        "titulo": "Iniciar un tiroteo con arma corta ilegal",
        "articulos": [
            { "id": 183, "articulo": "Art. 4.14", "descripcion": "Iniciar un tiroteo con un arma corta ilegal", "multa": "3250 €" },
            { "id": 175, "articulo": "Art. 4.6", "descripcion": "Uso indebido de arma corta ilegal", "multa": "2550 €" }
        ]
    },
    {
        "titulo": "Iniciar un tiroteo con arma corta con licencia de armas + abatir a un funcionario",
        "articulos": [
            { "id": 187, "articulo": "Art. 4.18", "descripcion": "Iniciar un tiroteo con un arma corta con licencia", "multa": "2450 €" },
            { "id": 211, "articulo": "Art. 5.8", "descripcion": "Intento de homicidio con arma corta a un funcionario", "multa": "1900 €" },
            { "id": 181, "articulo": "Art. 4.12", "descripcion": "Uso indebido de armas cortas con licencia", "multa": "2200 € + Retirada de la licencia" }
        ]
    },
    {
        "titulo": "Iniciar un tiroteo con arma corta con licencia de armas + abatir a un funcionario + secuestro a un funcionario",
        "articulos": [
            { "id": 187, "articulo": "Art. 4.18", "descripcion": "Iniciar un tiroteo con un arma corta con licencia", "multa": "2450 €" },
            { "id": 211, "articulo": "Art. 5.8", "descripcion": "Intento de homicidio con arma corta a un funcionario", "multa": "1900 €" },
            { "id": 233, "articulo": "Art. 5.30", "descripcion": "Secuestro a un funcionario", "multa": "2000 €" },
            { "id": 181, "articulo": "Art. 4.12", "descripcion": "Uso indebido de armas cortas con licencia", "multa": "2200 € + Retirada de la licencia" }
        ]
    },
    {
        "titulo": "Iniciar un tiroteo con arma corta sin licencia de armas + abatir a un funcionario",
        "articulos": [
            { "id": 186, "articulo": "Art. 4.17", "descripcion": "Iniciar un tiroteo con un arma corta sin licencia", "multa": "2300 €" },
            { "id": 211, "articulo": "Art. 5.8", "descripcion": "Intento de homicidio con arma corta a un funcionario", "multa": "1900 €" },
            { "id": 171, "articulo": "Art. 4.2", "descripcion": "Posesión de arma corta sin licencia", "multa": "1500 €" },
            { "id": 174, "articulo": "Art. 4.5", "descripcion": "Uso indebido de armas cortas sin licencia", "multa": "2000 €" }
        ]
    },
    {
        "titulo": "Iniciar un tiroteo con arma corta sin licencia de armas + abatir a un funcionario + secuestro a un funcionario",
        "articulos": [
            { "id": 186, "articulo": "Art. 4.17", "descripcion": "Iniciar un tiroteo con un arma corta sin licencia", "multa": "2300 €" },
            { "id": 211, "articulo": "Art. 5.8", "descripcion": "Intento de homicidio con arma corta a un funcionario", "multa": "1900 €" },
            { "id": 233, "articulo": "Art. 5.30", "descripcion": "Secuestro a un funcionario", "multa": "2000 €" },
            { "id": 171, "articulo": "Art. 4.2", "descripcion": "Posesión de arma corta sin licencia", "multa": "1500 €" },
            { "id": 174, "articulo": "Art. 4.5", "descripcion": "Uso indebido de armas cortas sin licencia", "multa": "2000 €" }
        ]
    },
    {
        "titulo": "Iniciar un tiroteo con arma corta ilegal + abatir a un funcionario",
        "articulos": [
            { "id": 183, "articulo": "Art. 4.14", "descripcion": "Iniciar un tiroteo con un arma corta ilegal", "multa": "3250 €" },
            { "id": 211, "articulo": "Art. 5.8", "descripcion": "Intento de homicidio con arma corta a un funcionario", "multa": "1900 €" },
            { "id": 170, "articulo": "Art. 4.1", "descripcion": "Posesión de arma ilegal", "multa": "1000 €" },
            { "id": 175, "articulo": "Art. 4.6", "descripcion": "Uso indebido de arma corta ilegal", "multa": "2550 €" }
        ]
    },
    {
        "titulo": "Iniciar un tiroteo con arma corta ilegal + abatir a un funcionario + secuestro a un funcionario",
        "articulos": [
            { "id": 186, "articulo": "Art. 4.17", "descripcion": "Iniciar un tiroteo con un arma corta sin licencia", "multa": "2300 €" },
            { "id": 211, "articulo": "Art. 5.8", "descripcion": "Intento de homicidio con arma corta a un funcionario", "multa": "1900 €" },
            { "id": 233, "articulo": "Art. 5.30", "descripcion": "Secuestro a un funcionario", "multa": "2000 €" },
            { "id": 170, "articulo": "Art. 4.1", "descripcion": "Posesión de arma ilegal", "multa": "1000 €" },
            { "id": 175, "articulo": "Art. 4.6", "descripcion": "Uso indebido de arma corta ilegal", "multa": "2550 €" }
        ]
    },
    {
        "titulo": "Iniciar un tiroteo con arma corta con licencia de armas + abatir a un funcionario + secuestro a un civil",
        "articulos": [
            { "id": 187, "articulo": "Art. 4.18", "descripcion": "Iniciar un tiroteo con un arma corta con licencia", "multa": "2450 €" },
            { "id": 211, "articulo": "Art. 5.8", "descripcion": "Intento de homicidio con arma corta a un funcionario", "multa": "1900 €" },
            { "id": 231, "articulo": "Art. 5.28", "descripcion": "Secuestro a un civil", "multa": "1500 €" },
            { "id": 181, "articulo": "Art. 4.12", "descripcion": "Uso indebido de armas cortas con licencia", "multa": "2200 € + Retirada de la licencia" }
        ]
    },
    {
        "titulo": "Iniciar un tiroteo con arma corta sin licencia de armas + abatir a un funcionario + secuestro a un civil",
        "articulos": [
            { "id": 186, "articulo": "Art. 4.17", "descripcion": "Iniciar un tiroteo con un arma corta sin licencia", "multa": "2300 €" },
            { "id": 211, "articulo": "Art. 5.8", "descripcion": "Intento de homicidio con arma corta a un funcionario", "multa": "1900 €" },
            { "id": 231, "articulo": "Art. 5.28", "descripcion": "Secuestro a un civil", "multa": "1500 €" },
            { "id": 171, "articulo": "Art. 4.2", "descripcion": "Posesión de arma corta sin licencia", "multa": "1500 €" },
            { "id": 174, "articulo": "Art. 4.5", "descripcion": "Uso indebido de armas cortas sin licencia", "multa": "2000 €" }
        ]
    },
    {
        "titulo": "Iniciar un tiroteo con arma corta ilegal + abatir a un funcionario + secuestro a un civil",
        "articulos": [
            { "id": 186, "articulo": "Art. 4.17", "descripcion": "Iniciar un tiroteo con un arma corta sin licencia", "multa": "2300 €" },
            { "id": 211, "articulo": "Art. 5.8", "descripcion": "Intento de homicidio con arma corta a un funcionario", "multa": "1900 €" },
            { "id": 231, "articulo": "Art. 5.28", "descripcion": "Secuestro a un civil", "multa": "1500 €" },
            { "id": 170, "articulo": "Art. 4.1", "descripcion": "Posesión de arma ilegal", "multa": "1000 €" },
            { "id": 175, "articulo": "Art. 4.6", "descripcion": "Uso indebido de arma corta ilegal", "multa": "2550 €" }
        ]
    },
    {
        "titulo": "Robo a una empresa + secuestro a un civil",
        "articulos": [
            { "id": 231, "articulo": "Art. 5.28", "descripcion": "Secuestro a un civil", "multa": "1500 €" },
            { "id": 76, "articulo": "Art. 2.21", "descripcion": "Robo a una empresa", "multa": "1900 €" }
        ]
    },
    {
        "titulo": "Robo a una empresa + secuestro a un civil + con arma corta con licencia",
        "articulos": [
            { "id": 231, "articulo": "Art. 5.28", "descripcion": "Secuestro a un civil", "multa": "1500 €" },
            { "id": 76, "articulo": "Art. 2.21", "descripcion": "Robo a una empresa", "multa": "1900 €" },
            { "id": 181, "articulo": "Art. 4.12", "descripcion": "Uso indebido de armas cortas con licencia", "multa": "2200 € + Retirada de la licencia" }
        ]
    },
    {
        "titulo": "Robo a una empresa + secuestro a un civil + con arma corta sin licencia",
        "articulos": [
            { "id": 231, "articulo": "Art. 5.28", "descripcion": "Secuestro a un civil", "multa": "1500 €" },
            { "id": 76, "articulo": "Art. 2.21", "descripcion": "Robo a una empresa", "multa": "1900 €" },
            { "id": 174, "articulo": "Art. 4.5", "descripcion": "Uso indebido de armas cortas sin licencia", "multa": "2000 €" },
            { "id": 171, "articulo": "Art. 4.2", "descripcion": "Posesión de arma corta sin licencia", "multa": "1500 €" }
        ]
    },
    {
        "titulo": "Robo a una empresa + secuestro a un civil + con arma corta ilegal",
        "articulos": [
            { "id": 231, "articulo": "Art. 5.28", "descripcion": "Secuestro a un civil", "multa": "1500 €" },
            { "id": 76, "articulo": "Art. 2.21", "descripcion": "Robo a una empresa", "multa": "1900 €" },
            { "id": 175, "articulo": "Art. 4.6", "descripcion": "Uso indebido de arma corta ilegal", "multa": "2550 €" },
            { "id": 170, "articulo": "Art. 4.1", "descripcion": "Posesión de arma ilegal", "multa": "1000 €" }
        ]
    }
];