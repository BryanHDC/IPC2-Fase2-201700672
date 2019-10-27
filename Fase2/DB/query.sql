USE Fase2;
CREATE TABLE Ticket (
    codigo INT AUTO_INCREMENT PRIMARY KEY,
    asunto VARCHAR(50) NOT NULL,
    cuerpo VARCHAR(1000) NOT NULL,
    Carne_estudiante VARCHAR(15) NOT NULL,
    codigo_Curso INT NOT NULL,
    estado VARCHAR(50) NOT NULL
) ;
CREATE TABLE Semestre (
    CodigoSemestre INT AUTO_INCREMENT PRIMARY KEY,
    Numero int NOT NULL
) ;
CREATE TABLE Horario (
    codigoHorario INT AUTO_INCREMENT PRIMARY KEY,
    Hora VARCHAR(50) NOT NULL
) ;
CREATE TABLE Evaluacion (
    Codigo INT AUTO_INCREMENT PRIMARY KEY,
    CodigoCurso INT NOT NULL,
    Carne_Estudiante VARCHAR(15) NOT NULL,
    Descripcion VARCHAR(1000) NOT NULL
);
CREATE TABLE Actividad (
    Codigo VARCHAR(10) PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Descripcion VARCHAR(500) NOT NULL,
    estado VARCHAR(10) NOT NULL,
    nota int NOT NULL
);
CREATE TABLE Pregunta (
    CodigoPregunta INT AUTO_INCREMENT PRIMARY KEY,
    CodigoCurso INT NOT NULL,
    Pregunta VARCHAR(1000) NOT NULL,
    Respuesta VARCHAR(1000) NOT NULL
);

CREATE TABLE Actividad_Estudiante (
    CodigoActividad VARCHAR(10) NOT NULL ,
    NumeroCarnet INT NOT NULL,
    NotaObtenida int NOT NULL,
    FOREIGN Key (CodigoActividad) REFERENCES Actividad(Codigo),
    FOREIGN Key (NumeroCarnet) REFERENCES Estudiante(NumeroCarnet)
) ;
CREATE TABLE Estudiante (
    NumeroCarnet INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(40) NOT NULL,
    correoelectronico VARCHAR(100) NOT NULL,
    contrasenia VARCHAR(50) NOT NULL
) ;
CREATE TABLE Mensaje (
    NumeroCarnetEstudiante VARCHAR(15),
    NumeroCarnetAuxiliar VARCHAR(15),
    Asunto VARCHAR(50),
    Contenido VARCHAR(1000),
    ArchivoAdjunto VARCHAR(250) 
) ;
CREATE TABLE Auxiliar (
    NumeroCarnet INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(40) NOT NULL,
    correoelectronico VARCHAR(100) NOT NULL,
    contrasenia VARCHAR(50) NOT NULL
) ;
CREATE TABLE Curso (
    Codigo INT AUTO_INCREMENT PRIMARY KEY,
    NombreCurso VARCHAR(40) NOT NULL,
    descripcion VARCHAR(100),
    seccion VARCHAR(10) NOT NULL,
    CodigoHorario int,
    FOREIGN Key (CodigoHorario) REFERENCES Horario(codigoHorario)
) ;
CREATE TABLE Asistencia (
    NumeroCarnetEstudiante  VARCHAR(15),
    CodigoCurso INT NOT NULL,
    fecha Date,
    FOREIGN Key (CodigoCurso) REFERENCES Curso(Codigo)
) ;
CREATE TABLE AsignacionEstudiante (
    NumeroCarnetEstudiante  INT NOT NULL,
    CodigoCurso INT NOT NULL,
    idAsignacion INT AUTO_INCREMENT PRIMARY KEY,
    fecha Date,
    FOREIGN Key (NumeroCarnetEstudiante) REFERENCES Estudiante(NumeroCarnet),
    FOREIGN Key (CodigoCurso) REFERENCES Curso(Codigo)
) ;
CREATE TABLE AsignacionAuxiliar (
    NumeroCarnetAuxiliar  INT NOT NULL,
    CodigoCurso INT NOT NULL,
    idAsignacion INT AUTO_INCREMENT PRIMARY KEY,
    fecha Date,
    FOREIGN Key (NumeroCarnetAuxiliar) REFERENCES Auxiliar(NumeroCarnet),
    FOREIGN Key (CodigoCurso) REFERENCES Curso(Codigo)
) ;

