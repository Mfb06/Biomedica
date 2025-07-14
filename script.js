// script.js

const ramos = [
  { id: 1, nombre: "Fundamentos de la Fisica", creditos: 3, requisitos: [] },
  { id: 2, nombre: "Precalculo", creditos: 4, requisitos: [] },
  { id: 3, nombre: "Analisis Geometrico", creditos: 4, requisitos: [] },
  { id: 4, nombre: "Fundamentos de Biologia", creditos: 4, requisitos: [] },
  { id: 5, nombre: "Fundamentos de la Quimica", creditos: 4, requisitos: [] },
  { id: 6, nombre: "Comperencias comunicativas básica", creditos: 3, requisitos: [] },
  { id: 7, nombre: "Calculo diferencial", creditos: 4, requisitos: [2, 3] },
  { id: 8, nombre: "Algebra lineal", creditos: 3, requisitos: [2, 3] },
  { id: 9, nombre: "Quimica General", creditos: 4, requisitos: [5] },
  { id: 10, nombre: "Expresion grafica", creditos: 3, requisitos: [3] },
  { id: 11, nombre: "IIBMR", creditos: 2, requisitos: [] },
  { id: 12, nombre: "Constitucion", creditos: 2, requisitos: [] },
  { id: 13, nombre: "Deporte dirigido", creditos: 1, requisitos: [] },
  { id: 14, nombre: "Fisica mecánica", creditos: 4, requisitos: [1,7,8] },
  { id: 15, nombre: "Calculo integral", creditos: 4, requisitos: [7] },
  { id: 16, nombre: "Biologia molecular", creditos: 4, requisitos: [4] },
  { id: 17, nombre: "Bioquimica", creditos: 4, requisitos: [9] },
  { id: 18, nombre: "Competencias comunicativas", creditos: 2, requisitos: [6] },
  { id: 19, nombre: "Fisica electromagnetismo", creditos: 4, requisitos: [14] },
  { id: 20, nombre: "Calculo vectorial", creditos: 4, requisitos: [15] },
  { id: 21, nombre: "Bioestadistica", creditos: 3, requisitos: [7] },
  { id: 22, nombre: "Morfofisiologia", creditos: 3, requisitos: [16] },
  { id: 23, nombre: "Algoritmos", creditos: 3, requisitos: [7,8] },
  { id: 24, nombre: "Bioetica", creditos: 1, requisitos: [] },
  { id: 25, nombre: "Fisica del calor", creditos: 4, requisitos: [19] },
  { id: 26, nombre: "Ecuaciones diferenciales", creditos: 3, requisitos: [20] },
  { id: 27, nombre: "Circuitos 1", creditos: 3, requisitos: [7,8,19] },
  { id: 28, nombre: "Biofisica1", creditos: 3, requisitos: [19,22] },
  { id: 29, nombre: "Bioinformatica", creditos: 3, requisitos: [16] },
  { id: 30, nombre: "Electiva Humanística 1", creditos: 3, requisitos: [] },
  { id: 31, nombre: "Circuitos 2", creditos: 3, requisitos: [19,27] },
  { id: 32, nombre: "Laboratorio circuitos", creditos: 1, requisitos: [] },
  { id: 33, nombre: "Electronica análoga 1", creditos: 3, requisitos: [27] },
  { id: 34, nombre: "Laboratorio electrónica 1", creditos: 1, requisitos: [27] },
  { id: 35, nombre: "Sistemas electrónicos 1", creditos: 3, requisitos: [27] },
  { id: 36, nombre: "Sistemas y señales", creditos: 3, requisitos: [23,26,27] },
  { id: 37, nombre: "Biofisica 2", creditos: 2, requisitos: [25,29] },
  { id: 38, nombre: "Gader", creditos: 2, requisitos: [] },
  { id: 39, nombre: "Electronica analógica 2", creditos: 3, requisitos: [33,34] },
  { id: 40, nombre: "Laboratorio electrónica 2", creditos: 1, requisitos: [33,34] },
  { id: 41, nombre: "Sistemas electronicos 2", creditos: 3, requisitos: [35] },
  { id: 42, nombre: "Bioinstrumentacion", creditos: 3, requisitos: [33,36] },
  { id: 43, nombre: "Gestion de mantenimiento clínico", creditos: 3, requisitos: [33] },
  { id: 44, nombre: "Biomateriales", creditos: 3, requisitos: [37] },
  { id: 45, nombre: "Informática medica", creditos: 2, requisitos: [23] },
  { id: 46, nombre: "Electronica de potencia", creditos: 3, requisitos: [31,39,40] },
  { id: 47, nombre: "Microprocedadores", creditos: 3, requisitos: [41] },
  { id: 48, nombre: "Procesamiento de señales", creditos: 3, requisitos: [23,36] },
  { id: 49, nombre: "Ingenieria clínica", creditos: 3, requisitos: [43] },
  { id: 50, nombre: "Biomecanica", creditos: 3, requisitos: [36,37,44] },
  { id: 51, nombre: "Electiva programa 1", creditos: 2, requisitos: [] },
  { id: 52, nombre: "Sistemas de control", creditos: 3, requisitos: [46,47] },
  { id: 53, nombre: "Diseño biomedico", creditos: 4, requisitos: [46,47] },
  { id: 54, nombre: "Electivo programa 2", creditos: 3, requisitos: [] },
  { id: 55, nombre: "Electiva programa 3", creditos: 3, requisitos: [] },
  { id: 56, nombre: "Electiva programa 4", creditos: 3, requisitos: [] },
  { id: 57, nombre: "Metodologia de la investigación", creditos: 2, requisitos: [42] },
  { id: 58, nombre: "Electriva programa 5", creditos: 3, requisitos: [] },
  { id: 59, nombre: "Electiva programa 6", creditos: 3, requisitos: [] },
  { id: 60, nombre: "Trabajo o pasantía", creditos: 4, requisitos: [57] },
];

const estado = {};

function estaDesbloqueado(ramo) {
  return ramo.requisitos.every(req => estado[req]);
}

function crearRamo(ramo) {
  const div = document.createElement('div');
  div.classList.add('ramo');
  div.id = `ramo-${ramo.id}`;
  div.innerHTML = `<strong>${ramo.nombre}</strong><span class="credits">${ramo.creditos} créditos</span>`;

  if (!estaDesbloqueado(ramo) && ramo.requisitos.length > 0) {
    div.classList.add('bloqueado');
  }

  div.addEventListener('click', () => {
    if (div.classList.contains('bloqueado')) return;
    div.classList.toggle('aprobado');
    estado[ramo.id] = div.classList.contains('aprobado');
    actualizarEstado();
  });

  return div;
}

function actualizarEstado() {
  ramos.forEach(r => {
    const el = document.getElementById(`ramo-${r.id}`);
    if (!estado[r.id]) {
      if (estaDesbloqueado(r)) {
        el.classList.remove('bloqueado');
      } else if (r.requisitos.length > 0) {
        el.classList.add('bloqueado');
      }
    }
  });
}

function crearMalla() {
  const malla = document.getElementById('malla');
  const semestres = {};

  ramos.forEach(r => {
    const semestre = Math.floor((r.id - 1) / 7); // Agrupar de a 7 ramos por semestre
    if (!semestres[semestre]) {
      semestres[semestre] = document.createElement('div');
      semestres[semestre].classList.add('semestre');
      semestres[semestre].innerHTML = `<h2>Semestre ${semestre}</h2>`;
      malla.appendChild(semestres[semestre]);
    }
    const ramoElemento = crearRamo(r);
    semestres[semestre].appendChild(ramoElemento);
  });
}

crearMalla();
