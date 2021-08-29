CREATE database ticket1_db

USE ticket1_db

CREATE TABLE usuarios (
  id int NOT NULL IDENTITY (1,1),
  usuario varchar(50) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
  PRIMARY KEY (usuario)
)

CREATE TABLE presupuestos (
  id int NOT NULL IDENTITY (1,1),
  usuario varchar(50) NOT NULL,
  id_front varchar(50) NOT NULL UNIQUE,
  proyecto varchar(150) NOT NULL,
  version varchar(30) NOT NULL,
  mes_inicio int,
  cant_meses int NOT NULL,
  PRIMARY KEY (id)
)



INSERT INTO usuarios (usuario, password) VALUES ('user1',123)
INSERT INTO usuarios (usuario, password) VALUES ('user2',123)

INSERT INTO presupuestos (usuario, id_front, proyecto, version, mes_inicio, cant_meses)
VALUES ('user1','P1','proyecto1','0.0.1',5,3)
INSERT INTO presupuestos (usuario, id_front, proyecto, version, mes_inicio, cant_meses)
VALUES ('user1','P2','proyecto2','0.0.1',2,2)
INSERT INTO presupuestos (usuario, id_front, proyecto, version, mes_inicio, cant_meses)
VALUES ('user1','P3','proyecto3','0.0.1',null,0)
INSERT INTO presupuestos (usuario, id_front, proyecto, version, mes_inicio, cant_meses)
VALUES ('user1','P4','proyecto4','0.0.1',5,3)
INSERT INTO presupuestos (usuario, id_front, proyecto, version, mes_inicio, cant_meses)
VALUES ('user1','P5','proyecto4','0.0.1',2,12)
INSERT INTO presupuestos (usuario, id_front, proyecto, version, mes_inicio, cant_meses)
VALUES ('user1','P6','proyecto6','0.0.1',2,12)
INSERT INTO presupuestos (usuario, id_front, proyecto, version, mes_inicio, cant_meses)
VALUES ('user2','P7','proyecto7','0.0.1',6,7)
INSERT INTO presupuestos (usuario, id_front, proyecto, version, mes_inicio, cant_meses)
VALUES ('user2','P8','proyecto8','0.0.1',5,3)
INSERT INTO presupuestos (usuario, id_front, proyecto, version, mes_inicio, cant_meses)
VALUES ('user2','P9','proyecto9','0.0.1',2,12)
INSERT INTO presupuestos (usuario, id_front, proyecto, version, mes_inicio, cant_meses)
VALUES ('user3','P10','proyecto10','0.0.1',6,7)



CREATE TABLE meses(
  id int NOT NULL IDENTITY (1,1),
  id_presupuesto int NOT NULL,
  num_mes int NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (id_presupuesto) REFERENCES presupuestos(id)
)

CREATE TABLE flujo_efectivo(
  id int NOT NULL IDENTITY (1,1),
  id_presupuesto int NOT NULL,
  id_mes int NOT NULL,
  ingresos float,
  PRIMARY KEY(id),
  FOREIGN KEY (id_presupuesto) REFERENCES presupuestos(id),
  FOREIGN KEY (id_mes) REFERENCES meses(id)
)

CREATE TABLE estado_resultados(
  id int NOT NULL IDENTITY (1,1),
  id_presupuesto int NOT NULL,
  id_mes int NOT NULL,
  ventas float,
  PRIMARY KEY(id),
  FOREIGN KEY (id_presupuesto) REFERENCES presupuestos(id),
  FOREIGN KEY (id_mes) REFERENCES meses(id)
)

CREATE TABLE ingresos(
  id int NOT NULL IDENTITY (1,1),
  id_presupuesto int NOT NULL,
  concepto varchar(50) NOT NULL
  PRIMARY KEY(id),
  FOREIGN KEY (id_presupuesto) REFERENCES presupuestos(id)
)

CREATE TABLE ingresos_desgloce(
  id int NOT NULL IDENTITY (1,1),
  id_ingreso int NOT NULL,
  id_mes int NOT NULL,
  valor float NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (id_ingreso) REFERENCES ingresos(id),
  FOREIGN KEY (id_mes) REFERENCES meses(id)
)
CREATE TABLE costos_directos(
  id int NOT NULL IDENTITY (1,1),
  id_presupuesto int NOT NULL,
  concepto varchar(50) NOT NULL,
  opc int NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (id_presupuesto) REFERENCES presupuestos(id)
)

CREATE TABLE costos_directos_desgloce(
  id int NOT NULL IDENTITY (1,1),
  id_costo_directo int NOT NULL,
  id_mes int NOT NULL,
  valor varchar(50) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (id_costo_directo) REFERENCES costos_directos(id),
  FOREIGN KEY (id_mes) REFERENCES meses(id)
)

CREATE TABLE gastos_directos(
  id int NOT NULL IDENTITY (1,1),
  id_presupuesto int NOT NULL,
  concepto varchar(50) NOT NULL,
  opc int NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (id_presupuesto) REFERENCES presupuestos(id)
)

CREATE TABLE gastos_directos_desgloce(
  id int NOT NULL IDENTITY (1,1),
  id_gasto_directo int NOT NULL,
  id_mes int NOT NULL,
  valor varchar(50) NOT NULL  PRIMARY KEY(id),
  FOREIGN KEY (id_gastos_directos) REFERENCES gastos_directos(id),
  FOREIGN KEY (id_mes) REFERENCES meses(id)
)

CREATE TABLE recursos(
  id int NOT NULL IDENTITY (1,1),
  id_presupuesto int NOT NULL,
  concepto varchar(50) NOT NULL,
  costo_mensual float NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (id_presupuesto) REFERENCES presupuestos(id)
)

CREATE TABLE recursos_desgloce(
  id int NOT NULL IDENTITY (1,1),
  id_recurso int NOT NULL,
  id_mes int NOT NULL,
  porcentaje_asignado int NOT NULL,
  cost_func_porcentaje_asignado float NOT NULL,
  costo_por_porcentaje int NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (id_recurso) REFERENCES recursos(id),
  FOREIGN KEY (id_mes) REFERENCES meses(id)
)





INSERT INTO meses(id_presupuesto, num_mes) VALUES (1,5);
INSERT INTO meses(id_presupuesto, num_mes) VALUES (1,6);
INSERT INTO meses(id_presupuesto, num_mes) VALUES (1,7);

INSERT INTO flujo_efectivo (id_presupuesto, id_mes, ingresos) VALUES (1, 1, 55.56);
INSERT INTO flujo_efectivo (id_presupuesto, id_mes, ingresos) VALUES (1, 2, 55.56);
INSERT INTO flujo_efectivo (id_presupuesto, id_mes, ingresos) VALUES (1, 3, 55.56);

INSERT INTO estado_resultados (id_presupuesto, id_mes, ventas) VALUES (1, 1, 70.23);
INSERT INTO estado_resultados (id_presupuesto, id_mes, ventas) VALUES (1, 2, 70.23);
INSERT INTO estado_resultados (id_presupuesto, id_mes, ventas) VALUES (1, 3, 70.23);

INSERT INTO ingresos (id_presupuesto, concepto) VALUES (1, 'ingreso1');

INSERT INTO ingresos_desgloce (id_ingreso, id_mes, valor) VALUES (1, 1, 34.5);
INSERT INTO ingresos_desgloce (id_ingreso, id_mes, valor) VALUES (1, 2, 34.5);
INSERT INTO ingresos_desgloce (id_ingreso, id_mes, valor) VALUES (1, 3, 34.5);

INSERT INTO costos_directos (id_presupuesto, concepto, opc) VALUES (1, 'costo1', 1);

SELECT * FROM costos_directos
INSERT INTO costos_directos_desgloce (id_costo_directo, id_mes, valor) VALUES (2, 1, '34.5');
INSERT INTO costos_directos_desgloce (id_costo_directo, id_mes, valor) VALUES (2, 2, '34.5');
INSERT INTO costos_directos_desgloce (id_costo_directo, id_mes, valor) VALUES (2, 3, '34.5');

INSERT INTO gastos_directos (id_presupuesto, concepto, opc) VALUES (1, 'gasto1', 1);
SELECT * FROM gastos_directos

INSERT INTO gastos_directos_desgloce (id_gasto_directo, id_mes, valor) VALUES (3, 1, 235);
INSERT INTO gastos_directos_desgloce (id_gasto_directo, id_mes, valor) VALUES (3, 2, 235);
INSERT INTO gastos_directos_desgloce (id_gasto_directo, id_mes, valor) VALUES (3, 3, 235);

INSERT INTO recursos (id_presupuesto, concepto, costo_mensual) VALUES (1, 'recurso1', 1000);

INSERT INTO recursos_desgloce (id_recurso, id_mes, porcentaje_asignado, cost_func_porcentaje_asignado, costo_por_porcentaje) 
VALUES (1, 1,20, 40, 200);
INSERT INTO recursos_desgloce (id_recurso, id_mes, porcentaje_asignado, cost_func_porcentaje_asignado, costo_por_porcentaje) 
VALUES (1, 2,50, 40, 200);
INSERT INTO recursos_desgloce (id_recurso, id_mes, porcentaje_asignado, cost_func_porcentaje_asignado, costo_por_porcentaje) 
VALUES (1, 3,30, 40, 200);










