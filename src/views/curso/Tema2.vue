<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Fundamentos de la teoría organizacional'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-7.order-1
        p(data-aos="fade-left") A lo largo del tiempo, las teorías administrativas han experimentado numerosas transformaciones, tanto en sus denominaciones como en las metodologías empleadas para gestionar las organizaciones. Estas modificaciones han dado lugar al desarrollo de diversos postulados que buscan perfeccionar lo propuesto por autores previos. Cabe mencionar que, para algunos especialistas, las escuelas, teorías y enfoques, son percibidos como conceptos equivalentes, sin embargo haremos la siguiente aclaración:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Escuelas" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2.align-content-center
            h4 Escuelas
            p Agrupaciones de pensamiento que abordan la administración desde perspectivas específicas, basándose en fundamentos teóricos y prácticos. Ejemplos incluyen la Escuela Clásica, la Escuela de las Relaciones Humanas y la Escuela de Sistemas.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/2.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Teorías" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2.align-content-center
            h4 Teorías
            p Proposiciones estructuradas que explican fenómenos administrativos, proporcionando un marco conceptual para entender cómo funcionan las organizaciones y cómo pueden ser gestionadas de manera eficiente.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Enfoques" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2.align-content-center
            h4 Enfoques
            p Perspectivas o maneras de abordar la administración, centrándose en aspectos particulares como los procesos, las personas, el entorno o la tecnología, para optimizar la toma de decisiones y el desempeño organizacional.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/4.png', alt='', style="width: 100%;")
    

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Escuelas de la administración

    p.mb-5 Las escuelas de la administración representan un enfoque sistemático para comprender las diferentes corrientes de pensamiento que han dado forma a la teoría y práctica de la administración.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Escuelas de la administración 
            p.mb-4(data-aos="fade-right") En el PDF <b>Escuelas de la administración</b>, se analizan estas corrientes desde sus orígenes históricos hasta las perspectivas más contemporáneas, abarcando enfoques como el empírico, científico, clásico, humanístico, estructuralista, neoclásico, conductista, sistemático y situacional. Este recurso ofrece una visión integral de cómo cada escuela ha contribuido al desarrollo de principios y métodos administrativos aplicables en diversos contextos organizacionales.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Escuelas de la administración.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/5.png', alt='')
    

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Enfoques de la administración

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.svg", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Recordemos que los enfoques son perspectivas o maneras de abordar la administración, centrándose en aspectos particulares como los procesos, las personas, el entorno o la tecnología, para optimizar la toma de decisiones y el desempeño organizacional.

        h2(data-aos="fade-left") Enfoque clásico

        .bg-color-3.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/6-1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El enfoque clásico de la administración, surgido a principios del siglo XX, fue el primero en desarrollarse formalmente. Este enfoque se basa en dos teorías principales: la administración científica de Frederick Taylor y la teoría clásica liderada por Henry Fayol.
        p Ambas perspectivas centraron su atención en las tareas y en la organización del trabajo, con el propósito de optimizar la eficiencia organizacional a través de métodos de trabajo más estructurados y racionales.
    
    p.mb-4 Este enfoque emergió como respuesta a diversos factores, entre ellos:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 El rápido crecimiento desordenado de las empresas.
              p El desarrollo acelerado y sin planificación de las organizaciones complicó la administración, lo que llevó a la adopción de métodos más estructurados, evitando la improvisación y priorizando una mayor eficiencia.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 La necesidad de mejorar la eficiencia y la competitividad organizacional
              p Con la introducción de la producción en masa, las empresas enfrentaron el reto de contratar más personal y redefinir las funciones laborales. Esto implicó una clara división entre la gerencia y los empleados, además de establecer normas y procedimientos para garantizar un trabajo más organizado y eficiente.
    
    .titulo-figura.mb-4
      h5 Figura 1. 
      span Enfoque clásico
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src="@/assets/curso/tema2/9.svg", data-aos="zoom-in")
        figcaption.mt-2.text-center.mb-4 Nota. Basado en Polanco, Y. J. Santos, P. & Cruz (2020).
    
    h2(data-aos="fade-left") Teoría científica de la administración
    p.mb-5 La teoría científica de la administración, desarrollada por Frederick Taylor a finales del siglo XIX y principios del XX, se centra en la mejora de la productividad y la eficiencia organizacional a través de la aplicación de métodos científicos al trabajo. Sus principios y aportes fueron fundamentales para transformar la gestión empresarial, buscando optimizar los procesos y maximizar los resultados.

    p.mb-4 Los principales principios de la teoría científica, son:

    .row.align-items-start.mb-5
      .col-lg-4.order-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/10.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Selección y entrenamiento científico de los trabajadores")
            p Taylor propuso que, en lugar de dejar que los trabajadores realizarán tareas de manera intuitiva, se debían seleccionar y entrenar a los empleados, según sus capacidades específicas, basándose en estudios detallados sobre el desempeño y las habilidades requeridas.
    
          .div(titulo="Desarrollo de métodos de trabajo estandarizados")
            p El enfoque se centró en el diseño de métodos de trabajo más eficientes y estandarizados, eliminando movimientos innecesarios y estableciendo procedimientos claros y específicos para cada tarea.
    
          .div(titulo="Separación de la planificación y la ejecución")
            p Taylor sugirió que las tareas de planificación, como la organización y diseño de procesos, debían ser responsabilidad de la gerencia, mientras que los trabajadores debían concentrarse exclusivamente en la ejecución, optimizando así el uso del tiempo y los recursos.
    
          .div(titulo="Incentivos salariales basados en el rendimiento")
            p Para aumentar la motivación y la productividad, propuso que los trabajadores recibieron pagos por encima del salario base en función de su rendimiento, recompensando a aquellos que lograran los estándares de productividad establecidos.

    p.mb-4 Y los aportes de la teoría científica, son:


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Eficiencia operativa
              p La teoría científica permitió incrementar significativamente la productividad en las fábricas y empresas al sistematizar el trabajo y reducir el tiempo desperdiciado.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Uso de métodos cuantitativos
              p Taylor introdujo el análisis de tiempo y movimiento para identificar las formas más eficientes de llevar a cabo las tareas, lo que marcó un precedente para la utilización de métodos cuantitativos en la gestión empresarial.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Racionalización del trabajo
              p Esta teoría promovió la idea que las tareas debían ser realizadas de la manera más racional posible, con la menor cantidad de esfuerzo y tiempo, lo que influyó en el diseño de procesos industriales y administrativos en muchas organizaciones.
    
    h2(data-aos="fade-left") Teoría clásica de la administración
    p La teoría clásica de la administración, desarrollada principalmente por Henri Fayol a principios del siglo XX, se centró en la estructuración y organización de las empresas para mejorar su funcionamiento y eficiencia. A diferencia de la teoría científica de Taylor, que se enfoca en la optimización de las tareas individuales, la teoría clásica abordó la gestión desde una perspectiva más amplia, con énfasis en la organización administrativa y las funciones generales de la gerencia.
    p.mb-5 Los principales principios de la teoría clásica, son:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/14.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-2.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="División del trabajo")
            p Fayol postuló que el trabajo debe ser dividido de manera que cada empleado se especialice en tareas específicas. Esto aumenta la eficiencia al permitir que los trabajadores se concentren en actividades para las que están mejor capacitados.
    
          .div(titulo="Autoridad y responsabilidad")
            p Para que una organización funcione adecuadamente, la autoridad debe estar claramente definida y acompañada de la responsabilidad correspondiente. Los gerentes deben tener el poder necesario para dar órdenes, pero también deben rendir cuentas por los resultados.
    
          .div(titulo="Unidad de mando")
            p Este principio establece que cada empleado debe recibir órdenes de un solo superior. Esto evita la confusión y asegura que las instrucciones sean claras y coherentes.
    
          .div(titulo="Unidad de dirección")
            p La organización debe tener una dirección clara y única para cada conjunto de actividades que se realicen en la empresa. Esto permite una acción coherente y dirigida hacia un objetivo común.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/15.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Subordinación del interés individual al interés general")
            p Los intereses personales de los empleados deben estar subordinados a los intereses de la organización, lo que implica que se debe trabajar hacia objetivos comunes para el bien de la empresa.
    
          .div(titulo="Remuneración")
            p Fayol destacó la importancia de una compensación justa para los empleados, que debe ser adecuada tanto para los empleados como para la organización, motivando la productividad y la satisfacción en el trabajo.
    
          .div(titulo="Centralización")
            p En función del tamaño y la estructura de la empresa, la toma de decisiones puede estar centralizada (en la alta dirección) o descentralizada (en niveles inferiores). Fayol propuso encontrar un equilibrio adecuado entre ambos enfoques.
    
          .div(titulo="Jerarquía")
            p La estructura organizacional debe ser jerárquica, lo que permite una clara cadena de mando y facilita la comunicación y la toma de decisiones.
    
    p.mb-4 Los aportes de la teoría clásica son:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/16.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="70%" y="6.5%" numero="+")
                h5 Desarrollo de las funciones gerenciales
                p Fayol identificó cinco funciones esenciales para los gerentes: planificar, organizar, dirigir, coordinar y controlar. Este enfoque permitió que los gerentes se concentraran en sus responsabilidades para dirigir eficientemente una organización.
    
              .bg-color-white.box-shadow.p-3(x="95%" y="65%" numero="+")
                h5 Organización estructurada
                p La teoría clásica enfatizó la importancia de una estructura organizativa clara y estable, promoviendo una mayor eficiencia operativa y la toma de decisiones efectiva dentro de la empresa.
    
              .bg-color-white.box-shadow.p-3(x="59.5%" y="95.5%" numero="+")
                h5 Visión integral de la administración
                p A diferencia de enfoques anteriores que se centraban solo en el trabajo operativo, Fayol presentó una visión más global de la administración, enfocándose en la gestión de las relaciones humanas, la toma de decisiones y la dirección de los esfuerzos organizacionales.
    
    h2(data-aos="fade-left") Enfoque humanista
    p.mb-5 El enfoque humanista en la administración destaca la relevancia de las personas y los grupos sociales dentro de las organizaciones, priorizando sus necesidades emocionales, psicológicas y sociales sobre los aspectos técnicos y estructurales.

    .bg-full-width.bg-colo.order-1r-4.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Enfoque humanista 
            p.mb-4(data-aos="fade-right") En el PDF <b>Enfoque humanista</b>, se examinan los principios fundamentales de esta perspectiva, como la motivación intrínseca, la comunicación interpersonal, la influencia de los grupos informales y la importancia del liderazgo participativo. Este recurso analiza cómo la teoría de las relaciones humanas transformó las prácticas organizacionales, promoviendo un ambiente laboral más armonioso y enfocado en el bienestar integral de los empleados, con un impacto positivo en la productividad y el éxito organizacional.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Enfoque humanista.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/17.png', alt='')

    h2(data-aos="fade-left") Enfoque neoclásico
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/18.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-1
  
        p(data-aos="fade-left") Este enfoque incluye la <b>teoría neoclásica</b>, también conocida como la escuela operacional o del proceso administrativo. Su principal enfoque radica en la aplicación práctica de la administración, la revalorización de algunos postulados clásicos, y una atención particular a los principios fundamentales de la administración. Además, pone énfasis en los resultados y objetivos, destacando por su enfoque ecléctico, flexible y receptivo.
        h2(data-aos="fade-left") Teoría neoclásica
        p.mb-5 La teoría neoclásica de la administración surgió a mediados del siglo XX como una evolución y adaptación de las teorías clásicas, especialmente la teoría clásica de Fayol. 

    .row.justify-content-center.mb-5
      .col-lg-10
        div.bg-h85-2.p-3.p-lg-0
          .row.align-items-center.justify-content-center
            .col-lg-4
              figure
                img(src="@/assets/curso/tema2/19.svg", data-aos="zoom-in")
            .col-lg-7
              p.mb-0 Este enfoque retoma algunos principios fundamentales de la administración, pero incorpora nuevos aspectos más enfocados en la flexibilidad, la práctica y la adaptación a los cambios del entorno.
        div.bg-color-5.p-3.p-lg-0
          .row.align-items-center.justify-content-center
            .col-lg-4.order-2
              figure
                img(src="@/assets/curso/tema2/20.svg", data-aos="zoom-in")
            .col-lg-7.order-1
              p.mb-0 En lugar de seguir una estructura rígida, la teoría neoclásica propone una visión más dinámica y pragmática, permitiendo la aplicación de los principios de administración a situaciones concretas y reales.
    
    h2(data-aos="fade-left") Principales principios de la teoría neoclásica

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/21.png", data-aos="zoom-in")
      .col-lg-7.mb-3.mb-lg-0
        p(data-aos="fade-left") La teoría neoclásica pone un fuerte énfasis en la aplicación práctica de la administración, priorizando la resolución de problemas y la gestión efectiva en el contexto real de las organizaciones, más que en la rigidez de los principios teóricos.
        p A diferencia de las teorías clásicas, que promovía una estructura jerárquica rígida, la teoría neoclásica aboga por una mayor flexibilidad en la organización. Esto incluye la posibilidad de adaptarse a cambios en el entorno y la integración de nuevas tecnologías o enfoques de trabajo.

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/22.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La teoría neoclásica mantiene la validez de algunos principios fundamentales de la administración clásicos, como la división del trabajo, la autoridad y la unidad de mando, pero los interpreta de manera más flexible y menos dogmática.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-3.mb-lg-0
        p Se pone un gran énfasis en los resultados que la organización debe alcanzar. La eficiencia y la efectividad de la administración se miden en función de los objetivos logrados y los resultados obtenidos.
        .py-4.px-5.bg-color-3.mb-3(data-aos="fade-right")
          p.mb-0 La teoría neoclásica es ecléctica, lo que significa que no sigue una única escuela de pensamiento. Combina elementos de diversas teorías y enfoques administrativos para adaptarse a las necesidades cambiantes de las organizaciones.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/23.png", alt="", data-aos="zoom-in") 
    
    p.mb-4 Los aportes de la teoría neoclásica, son:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/24.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Mayor enfoque en la gestión práctica")
            p La teoría neoclásica introdujo un enfoque más pragmático y realista en la administración, lo que permitió a los gerentes aplicar los principios administrativos de manera más flexible y efectiva en situaciones cotidianas.
    
          .div(titulo="Adaptabilidad organizacional")
            p Promovió la idea que las organizaciones deben ser adaptables a los cambios en el entorno, lo que resultó ser crucial en un contexto económico y social cada vez más dinámico.
    
          .div(titulo="Descentralización y delegación")
            p Si bien las teorías clásicas se centraban en la centralización de decisiones, la teoría neoclásica favoreció la delegación de autoridad y la descentralización, permitiendo una mayor autonomía a los niveles más bajos de la organización.
    
          .div(titulo="Mejora de la motivación y el liderazgo")
            p Incorporó ideas relacionadas con la motivación humana, como la importancia de reconocer las necesidades de los empleados y de un liderazgo participativo, lo que mejoró el clima laboral y la productividad.
          
    h2(data-aos="fade-left") Enfoque estructuralista

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema2/25.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") El enfoque estructuralista emergió en la década de 1950, como una combinación de la teoría clásica y la teoría de las relaciones humanas. Este enfoque conceptualiza la organización como un sistema grande y complejo, donde diversos grupos sociales interactúan y trabajan hacia objetivos comunes.

    p.mb-4 Se proponía establecer una conexión estrecha entre las organizaciones y su entorno, lo que permitía evaluar los objetivos empresariales y medir la eficiencia y efectividad de las instituciones.
    h2(data-aos="fade-left") Teoría burocrática
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2
        .py-4.px-5.bg-color-3.mb-3(data-aos="fade-right")
          p.mb-0 La teoría burocrática de la administración, desarrollada por Max Weber a principios del siglo XX, se basa en la creación de estructuras organizacionales formales, racionales y jerárquicas. Este enfoque propuso un modelo ideal de administración para garantizar la eficiencia, la precisión y la consistencia en las organizaciones.
        p Weber definió la burocracia como un sistema organizado bajo normas y procedimientos claramente establecidos, diseñado para eliminar la improvisación y promover un funcionamiento predecible y ordenado.
        p Los principales principios de la teoría burocrática, son:
      .col-lg-5.mb-3.mb-lg-0.order-1
        figure
          img(src="@/assets/curso/tema2/26.svg", alt="", data-aos="zoom-in") 

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/28.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Jerarquía de autoridad
                p.text-center La estructura organizacional debe estar claramente definida con niveles jerárquicos, donde cada nivel tiene autoridad y responsabilidades específicas. Esto asegura un flujo ordenado de mando y comunicación.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/29.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 División del trabajo
                p.text-center Las tareas deben dividirse y especializarse, según las competencias de cada persona, con el objetivo de incrementar la eficiencia y reducir la duplicidad de esfuerzos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/30.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Normas y reglas formales
                p.text-center El comportamiento y las actividades dentro de la organización deben regirse por normas, políticas y procedimientos establecidos, lo que asegura consistencia y previsibilidad.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Impersonalidad en las relaciones
                p.text-center Las decisiones y las interacciones dentro de la organización deben basarse en reglas y no en relaciones personales, eliminando favoritismos y garantizando la equidad.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/32.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Selección y promoción basada en el mérito
                p.text-center Los empleados deben ser contratados y promovidos en función de sus habilidades, experiencia y desempeño, en lugar de conexiones personales o factores subjetivos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/32-1.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Orientación hacia la racionalidad
                p.text-center Todas las actividades organizacionales deben planificarse y ejecutarse de manera lógica y racional para alcanzar los objetivos establecidos.
    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/27.png', alt='')
    
    h2(data-aos="fade-left") Aportes de la teoría burocrática
    p.mb-5 Weber introdujo un enfoque sistemático que permitió la estandarización de procedimientos, mejorando la consistencia y reduciendo los errores en las operaciones organizacionales.
    


    div.bg-h85-3.p-4.p-4.p-lg-0.p-lg-0
      .row.align-items-center.justify-content-center
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/33.svg", data-aos="zoom-in")
        .col-lg-7
          p.mb-0 La teoría burocrática proporcionó un marco claro para definir roles, responsabilidades y relaciones jerárquicas, facilitando la coordinación y el control dentro de la organización.
    div.bg-color-1.p-4.p-4.p-lg-0.p-lg-0
      .row.align-items-center.justify-content-center
        .col-lg-4.order-2
          figure
            img(src="@/assets/curso/tema2/34.svg", data-aos="zoom-in")
        .col-lg-7.order-1
          p.mb-0 Este enfoque promueve la profesionalización en las organizaciones, al enfatizar la importancia de la capacitación, el mérito y la competencia técnica en el desempeño de las funciones.
    div.bg-h85-4.p-4.p-4.p-lg-0.p-lg-0
      .row.align-items-center.justify-content-center
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/35.svg", data-aos="zoom-in")
        .col-lg-7
          p.mb-0 Gracias a las reglas y procedimientos formales, las organizaciones podían anticipar comportamientos y resultados, lo que mejoraba el control y la planificación.

    p.mb-4 La burocracia se convirtió en el modelo predominante para el diseño de instituciones gubernamentales y grandes corporaciones, asegurando su funcionamiento ordenado y predecible.
    h2(data-aos="fade-left") Teoría estructuralista

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/36.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") La teoría estructuralista de la administración, desarrollada a partir de la década de 1950, se originó como una síntesis entre la teoría clásica y la teoría de las relaciones humanas. Su objetivo principal fue comprender a las organizaciones como sistemas grandes, complejos y multifacéticos, en los que interactúan distintos grupos sociales con intereses diversos, pero alineados hacia objetivos comunes. Este enfoque integrador busca estudiar las relaciones internas de las organizaciones, así como su conexión con el entorno externo.
        p Los principales principios de la teoría estructuralista, son:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/37.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 La organización como un sistema social
              p Las organizaciones son vistas como sistemas sociales en los que interactúan individuos y grupos que desempeñan roles específicos, compartiendo metas institucionales.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/38.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Relación entre estructura y contexto
              p Las organizaciones no existen de forma aislada, sino que están influenciadas por su entorno externo. Esto incluye factores económicos, sociales, culturales y políticos que afectan su funcionamiento y estructura.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/39.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Análisis de los conflictos
              p Reconoce que los conflictos dentro de la organización son inevitables debido a la interacción de distintos intereses, y los ve como elementos que, gestionados adecuadamente, pueden generar mejoras organizacionales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/40.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Equilibrio entre eficiencia y eficacia
              p Se busca tanto la eficiencia interna, centrada en el uso óptimo de recursos, como la eficacia externa, enfocada en alcanzar los objetivos organizacionales y adaptarse al entorno.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/41.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 División de roles y autoridad
              p Propone una estructura formal clara, con roles y responsabilidades bien definidos, pero enfatiza la importancia de las relaciones informales dentro de las organizaciones.

    h2(data-aos="fade-left") Aportes de la teoría estructuralista+

    .row.justify-content-center.mb-5
      .col-lg-10
        div.bg-h85-2.p-4.p-lg-0
          .row.align-items-center.justify-content-center
            .col-lg-4
              figure
                img(src="@/assets/curso/tema2/42.svg", data-aos="zoom-in")
            .col-lg-7
              p.mb-0 Introdujo una perspectiva que integra tanto los aspectos técnicos y formales como los sociales y humanos, proporcionando una comprensión más completa de las organizaciones.
        div.bg-color-5.p-4.p-lg-0
          .row.align-items-center.justify-content-center
            .col-lg-4.order-2
              figure
                img(src="@/assets/curso/tema2/43.svg", data-aos="zoom-in")
            .col-lg-7.order-1
              p.mb-0 Destacó la importancia de analizar cómo las organizaciones interactúan con otras instituciones, sectores y el entorno en general, para mejorar su adaptabilidad y competitividad.

    p.mb-4 En lugar de evitar los conflictos, esta teoría los analiza y propone gestionarlos como oportunidades para el cambio y la innovación.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2
        p.mb-5 Incorporó conceptos de la sociología, como la estructura, el poder y los roles sociales, para enriquecer el análisis administrativo y organizacional.
        .py-4.px-5.bg-color-1.mb-3(data-aos="fade-right")
          p.mb-0 Sentó las bases para el desarrollo de modelos organizacionales más complejos, destacando la importancia de las relaciones entre los distintos componentes de una organización.
      .col-lg-5.mb-3.mb-lg-0.order-1
        figure
          img(src="@/assets/curso/tema2/44.png", alt="", data-aos="zoom-in") 

    h2(data-aos="fade-left") Enfoque del comportamiento en la organización
    p.mb-5 El enfoque del comportamiento en la organización resalta la importancia de comprender y analizar el comportamiento individual y grupal dentro del entorno laboral, reconociendo que la motivación y el bienestar emocional son esenciales para alcanzar la productividad y los objetivos organizacionales.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Enfoque del comportamiento en la organización 
            p.mb-4(data-aos="fade-right") En el PDF <b>Enfoque del comportamiento en la organización</b>, se exploran las teorías del comportamiento y del desarrollo organizacional, profundizando en sus principios, como la motivación, la participación activa y el cambio planificado. Este recurso ofrece herramientas prácticas para implementar un liderazgo participativo, mejorar el clima laboral y promover la adaptabilidad organizacional en un entorno dinámico y competitivo.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Enfoque del comportamiento en la organización.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/45.png', alt='')
    
    h2(data-aos="fade-left") Enfoque sistémico de la administración
    p.mb-5 El enfoque sistémico en la administración se originó a partir de las investigaciones del biólogo alemán Ludwig Von Bertalanffy. Este enfoque busca proporcionar a los gerentes una comprensión de cómo las diferentes unidades interdependientes dentro de una organización se coordinan para alcanzar los objetivos corporativos. Incluye aspectos como la tecnología aplicada a la gestión, la teoría matemática y la teoría de sistemas:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/46.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="La tecnología y la administración")
            p La tecnología ha ejercido una influencia significativa en la administración, transformando la manera en que operan las organizaciones. Para alcanzar sus objetivos, muchas empresas han adoptado tecnología avanzada, reemplazando equipos obsoletos por maquinaria moderna. El acceso y el uso intensivo de las nuevas tecnologías de la información y comunicación (TIC) están generando cambios profundos en todos los aspectos de la vida, impactando tanto el desarrollo social como el económico. Estas herramientas tecnológicas tienen un impacto considerable en todos los niveles del entorno empresarial. La incorporación de las TIC en la administración permite optimizar las formas de trabajo y facilita el cumplimiento de los objetivos organizacionales.
    
          .div(titulo="Teoría de las matemáticas")
            p La teoría matemática en la administración aportó un enfoque cuantitativo para la toma de decisiones y la resolución de problemas organizacionales. Utiliza modelos matemáticos, estadísticas y análisis numéricos para optimizar recursos, planificar actividades y evaluar resultados. Entre sus principales contribuciones destacan la programación lineal, la teoría de juegos y la investigación de operaciones, herramientas que permiten a los gerentes analizar escenarios complejos y elegir estrategias más efectivas. Esta teoría es especialmente útil en áreas como logística, producción y finanzas, donde se busca maximizar la eficiencia y minimizar los costos.
    
          .div(titulo="Teoría de los sistemas")
            p La teoría de los sistemas se fundamenta en la idea que una organización debe ser entendida como un conjunto de partes interrelacionadas que trabajan en armonía para alcanzar objetivos comunes. Este enfoque, introducido por el biólogo Ludwig Von Bertalanffy, trasciende la visión tradicional de estructuras rígidas, proponiendo en cambio que las organizaciones funcionen como sistemas abiertos que interactúan constantemente con su entorno.
    
    p.mb-4 Los principios claves de la teoría de los sistemas, son:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/48.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Interdependencia
                p.text-center Las distintas áreas o departamentos dentro de una organización no funcionan de manera aislada; están interconectados, y cualquier cambio en una parte puede afectar al sistema en su totalidad.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/49.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sinergia
                p.text-center Se busca que el conjunto sea mayor que la suma de las partes, es decir, que el trabajo colaborativo y coordinado logre resultados superiores a los esfuerzos individuales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/50.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Enfoque en el entorno
                p.text-center Como sistemas abiertos, las organizaciones deben adaptarse continuamente a los cambios externos, como los avances tecnológicos, las tendencias del mercado y las demandas sociales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/51.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Jerarquía de sistemas
                p.text-center Dentro de la organización, cada subsistema (por ejemplo, finanzas, recursos humanos, producción) forma parte de un sistema mayor, que a su vez interactúa con otros niveles superiores e inferiores.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/52.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Retroalimentación
                p.text-center Los empleados deben ser contratados y promovidos en función de sus habilidades, experiencia y desempeño, en lugar de conexiones personales o factores subjetivos.
    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/47.png', alt='')
    
    .bg-full-width.bg-h85-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2(data-aos="fade-left").mb-3.mb-lg-0
            p Y los aportes de la teoría de los sistemas, son:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Permite a los gerentes comprender la organización en su totalidad, considerando las interacciones entre sus componentes y su relación con el entorno.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Ofrece herramientas para abordar problemas que involucran múltiples variables e interacciones, ayudando a identificar soluciones integrales.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Al destacar la interdependencia entre áreas, fomenta una mejor comunicación y coordinación entre los departamentos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Ayuda a las organizaciones a responder rápidamente a los cambios externos, garantizando su sostenibilidad y competitividad.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 La teoría de los sistemas integra conocimientos de diferentes disciplinas, como biología, psicología, economía y tecnología, enriqueciendo su aplicación en diversos contextos.

          .col-lg-4.order-1.mb-3.mb-lg-0(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/53.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") Enfoque situacional de la administración
    p.mb-5 El modelo situacional, que incluye la teoría de la contingencia, se basa en la premisa de que en la gestión empresarial no existen reglas absolutas, dado que todo depende de las circunstancias específicas. Esto implica que las decisiones y acciones administrativas deben adaptarse a las características y condiciones particulares de cada situación para alcanzar los resultados deseados.

    figure.mb-5
      img(src='@/assets/curso/tema2/54.svg', alt='')

    h2(data-aos="fade-left") Teoría de la contingencia


    .bg-full-width.bg-h85-6.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
            p.mb-0.mt-lg-5.mt-0 La <b>teoría de la contingencia</b> establece que no existe una única forma óptima de gestionar una organización, puesto que las decisiones administrativas dependen de las circunstancias específicas. Este enfoque enfatiza que las estrategias, estructuras y procesos deben adaptarse a factores como el entorno, la tecnología, el tamaño de la organización y las características del equipo de trabajo, buscando soluciones flexibles que se ajusten a cada situación particular.
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/55.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
      




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=70800706" target="_blank" rel="noopener noreferrer") Valenzuela Espinoza, L. I. (1997). Consideraciones epistemológicas de la teoría sociológica y de la organizacional. Revista de Ciencias Sociales (Cl), (7), 1–11. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/1872/187214467001.pdf" target="_blank" rel="noopener noreferrer") Rivas Tovar, L. A. (2009). Evolución de la teoría de la organización. Universidad & Empresa, 11(17), 11–32. Universidad del Rosario. 

           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/qn-ltNNDtWA?si=5SX40EqIn7hoF22z  " target="_blank" rel="noopener noreferrer") Facultad de Ciencias Económicas -UNRC  (2020, 29 de mayo). Principios de Administración - Evolución de las Ideas de Administración I  [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/XG__1PRdjZs?si=Q85CkPkQal6ZVBgW" target="_blank" rel="noopener noreferrer") Facultad de Ciencias Económicas -UNRC  (2020, 29 de mayo). Principios de Administración - Evolución de las Ideas de Administración II  [Video]. YouTube

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
