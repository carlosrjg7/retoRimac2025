# Proyecto de Selección de Planes

Este proyecto es una aplicación web desarrollada con **React** y **TypeScript**, que permite a los usuarios seleccionar planes y aplicar descuentos dinámicos según la selección. La aplicación hace uso de patrones modernos de desarrollo y buenas prácticas para optimizar el rendimiento y la mantenibilidad del código.

---

## Tecnologías y Herramientas

- **Frontend:** React + TypeScript
- **Estilos:** Sass (SCSS) para modularidad y facilidad de mantenimiento
- **Gestión de estado:** Context API de React
- **Optimización de rendimiento:**
  - `React.memo` para memorizar componentes y evitar renders innecesarios
  - `useCallback` para memorizar funciones y prevenir re-renderizados de callbacks
  - `useMemo` para memorizar cálculos costosos, como descuentos o precios finales
  - **React Hook Form** para controlar formularios de manera eficiente
  - **Zod** para validación y tipado seguro de los datos

---

## Patrón de Diseño Implementado

Se utilizó el **patrón Decorator** para aplicar descuentos dinámicos a los planes seleccionados por el usuario. Esto permite:

- Extender la funcionalidad de los planes sin modificar la clase original
- Aplicar descuentos o promociones de manera flexible
- Mantener el código limpio y escalable

## Estructura de Componentes

- Componentes reutilizables y optimizados con React.memo
- Funciones que manejan eventos memorizadas con useCallback
- Cálculos complejos (como precios finales con descuentos) memorizados con useMemo
- Formularios controlados con React Hook Form, integrados con Zod para validaciones y tipado seguro

## Estilos

- Uso de Sass (SCSS) para:
- Variables globales
- Mixins y funciones reutilizables
- Anidamiento para mejorar la legibilidad
- Posibilidad de escalar el proyecto manteniendo estilos organizados

## Autor

- Desarrollado por [Carlos Raul García]
- Tecnologías principales: React, TypeScript, Sass, React Hook Form, Zod, axios

## variable de entorno local .env.local

VITE_API_URL=https://rimac-front-end-challenge.netlify.app/api
