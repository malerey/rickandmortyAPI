### Observaciones

Flor, lo primero es felicitarte por un excelente trabajo. Me encanta que hayas encontrado un proyecto propio, que hayas hecho vos el diseño y la estructura de la web. Tu página quedó hermosa y muy completa. Felicitaciones!!

El trabajo está por supuesto aprobado, y todas las observaciones que vienen a continuación son simplemente para mejorar lo que ya hiciste. 

- Gracias por el bellísimo mensaje en el README, pero te animo a que lo cambies por uno pensando en tecnicos de selección y otros devs que vayan a ver tu código: contá de qué se trata tu web y en qué tecnologías la hiciste. Probaste now para deployarla? Si necesitas ayuda con eso avisame, sería genial que esté online para poder compartirla!

- El responsive está bastante bien, pero hay algunas cosas que rompen y que no se notan desde el navegador a menos que selecciones "toggle device bar" y elijas algún celular. Principalmente, la barra de navegación y el input de búsqueda no entran y te fuerzan un scroll horizontal. La mayoría de las personas que vean tu web lo harán desde sus celulares, y queremos que se lleven la mejor impresión posible, por lo que estaría bueno corregir esto. 

- Como bien notaste en el comentario que me dejaste, hay código que se puede componentizar. La barra de búsqueda, la barra de paginación, etc. Te super animo a que lo pruebes, y me escribas si te trabás :) Imagino que el problema más grande será pasar las funciones, pero te juro que no es tan difícil como parece! 

- Los tres modales y las tres Cards son muy repetitivos, deberían ser el mismo componente. Como cambia el contenido, eso deberíamos solucionarlo con conditional rendering. Por ejemplo: al llamar al Modal desde Personajes le paso la prop "personajes", al llamarlo desde Ubicaciones le paso la prop "ubicaciones"

```
 <ModalCard info={cardElegida} location="personajes"/>
 ```

 Y luego en el modal mismo, hago conditional rendering:

 ```
 props.location === "ubicaciones" && (
            <div>
                <p>ID</p>
                <p>{props.info.id}</p>
              </div>
 )

 props.location === "personajes" && (
             <div>
                <p>ESPECIE</p>
                <p>{props.info.species}</p>
              </div>
 )
```

- También tenes muchos warnings de React que estaría bueno corregir: es algo que quienes miren tu web desde el lado técnico van a notar. Todos tienen que ver con useEffect, y viendo tu código sospecho que aún no tenes 100% claro el uso del array de dependencias. Te animo a que revises de nuevo la clase donde lo vimos, o aun mejor, que me escribas y te lo explico rápidamente. Quizá podamos tener una call asi lo vemos en tu código? 

- Dejo comentarios a lo largo del código. Como Personajes, Ubicaciones y Episodios son componentes muy parecidos, las observaciones de Personajes valen para los tres componentes. 
