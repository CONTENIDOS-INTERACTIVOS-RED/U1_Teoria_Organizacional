<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Transición de enfoques mecanicistas a sistémicos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 La evolución de las teorías organizacionales refleja un cambio significativo en la forma en que las organizaciones son comprendidas y gestionadas. Este cambio puede describirse como una transición desde enfoques mecanicistas hacia enfoques sistémicos, marcando un avance en la percepción de las organizaciones como entidades vivas y complejas.

    .bg-full-width.bg-color-4.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Enfoque mecanicista
            p.mb-4(data-aos="fade-right") El enfoque mecanicista, también conocido como enfoque clásico, fue fundamental para entender las organizaciones como estructuras jerárquicas y altamente controladas, donde cada elemento cumple una función específica. En el PDF <b>Enfoque mecanicista</b>, se exploran los principios clave que guiaron este modelo, como la división del trabajo, la jerarquía, la racionalidad y el control. Además, se analiza cómo este enfoque impulsó avances significativos durante la Revolución Industrial, pero también evidenció limitaciones en contextos dinámicos y creativos. El recurso también destaca la transición hacia enfoques más modernos, como el sistémico y situacional, que integran una visión más flexible y adaptable a la complejidad del entorno actual.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Enfoque mecanicista.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/1.png', alt='')

   

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=667974502004" target="_blank" rel="noopener noreferrer") De la Rosa Leal, M. E. (2021). El enfoque de sostenibilidad en las teorías organizacionales. Trascender, contabilidad y gestión, 6(17).  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.researchgate.net/publication/375025906_Teoria_organizacional_y_estudios_organizacionales_dos_denominaciones_para_un_mismo_campo_de_conocimiento" target="_blank" rel="noopener noreferrer") Saavedra Mayorga, J. J., & Sanabria, M. (s.f.). Teoría organizacional y estudios organizacionales: Dos denominaciones para un mismo campo de conocimiento. ResearchGate. Recuperado de  

           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/L19AYM6zdcU?si=fDhobVKoIQeduzhx " target="_blank" rel="noopener noreferrer") Campus virtual  (2018, 13 de diciembre). Teoría de la contingencia o situacional [Video]. YouTube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/fjmXY2XfJfs?si=70aYmri_AzzWRkBH " target="_blank" rel="noopener noreferrer") Curious Fact (2020, 24 de abril). Teoría general sistemas.  [Video]. YouTube 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes eventos históricos marcó un avance significativo en la organización y división del trabajo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La construcción de las pirámides de Egipto',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'La Revolución Francesa.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'La invención de la imprenta.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La caída del Imperio Romano.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Claro que si! Este evento demuestra cómo la división del trabajo y el liderazgo coordinado permitieron alcanzar metas monumentales en la antigüedad.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué característica distingue la organización como función administrativa de la organización como unidad administrativa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Su enfoque en los recursos humanos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La jerarquización de responsabilidades',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'La planificación de estrategias para cumplir objetivos. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'La asignación de puestos de trabajo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Exacto! La organización como función administrativa enfatiza cómo las actividades interrelacionadas logran objetivos de manera eficiente y estratégica.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué aspecto influyó directamente en el surgimiento de las teorías organizacionales durante la Revolución Industrial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La reducción de la demanda de productos en el mercado.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La necesidad de adaptar el trabajo artesanal a procesos mecanizados. ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'El aumento del empleo en la agricultura.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La creación de gremios medievales.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Muy bien! La mecanización transformó la producción y generó la necesidad de nuevas formas de organización empresarial y administrativa.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál es el propósito principal de las teorías organizacionales según diferentes autores?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Eliminar conflictos internos dentro de las empresas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Diseñar estructuras empresariales eficientes y productivas. ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Establecer jerarquías rígidas en las organizaciones.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Fomentar el desarrollo del sindicalismo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Muy bien! Las teorías organizacionales proporcionan herramientas clave para optimizar el desempeño y alcanzar la productividad empresarial',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué influencia histórica se destacó en el desarrollo inicial de la administración moderna?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La estructura militar y la Revolución Industrial. ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'La caída del Imperio Bizantino.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'El surgimiento de la economía de mercado.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La expansión del feudalismo europeo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Excelente! Ambas influyeron en la sistematización del trabajo y en la implementación de jerarquías y procesos organizativos de áreas críticas de mejora.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
