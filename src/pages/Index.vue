<template>
  <Layout>
    <!-- <Title title="Cafe Support" /> -->
    <b-container>
      <b-row>
        <b-col sm="6" class="px-4">
          <h2 class="py-2">Espresso für Kölle</h2>
          <h5>Unterstütze jetzt dein Veedelcafé!</h5>
          <hr>
          <p class="text-justify">Wir alle schränken uns wegen der voranschreitenden Ausbreitung von Corona in unserem täglichen Leben ein. Während dies für die Glücklicheren unter uns bislang vor allem verlängerte Osterferien oder den Wechsel ins Homeoffice bedeutet hat, trifft die Krise gerade kleine Unternehmen wie dein Stammcafé an der Ecke. Während der Verkauf durch die Behörden eingeschränkt wird und die Kunden möglichst zuhause bleiben, müssen sie weiter für ihre Kosten wie Miete, Personal oder Versicherungen aufkommen. Deshalb möchten wir mit unserer Aktion einen kleinen solidarischen Beitrag leisten, dass unsere Lieblingscafés auch diese kritische Zeit ohne die üblichen Einnahmen überstehen, bis wir wieder vor Ort unseren Kaffee genießen können.</p> 
          <p>Du hast daher auf der Seite die Möglichkeit, dein Stammcafé auszuwählen und dir virtuell den Kaffee/Espresso zu kaufen, den du dir vielleicht in dem Moment tatsächlich gerne im Geschäft geholt hättest. Einfach via PayPal bezahlen und schon hast du dem Inhaber oder der Inhaberin, mit der du dich sonst in der Mittagspause auf einen Schnack getroffen hättest, ein Stück weitergeholfen. Und das Beste: Du musstest nicht einmal das Haus verlassen!</p>
          <b>Vielen Dank für eure Mithilfe!</b>
        </b-col>
        <b-col sm="6">
          <img src="https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="poster">
        </b-col>
      </b-row>
      <b-container class="my-5">
        <b-row>
          <b-col sm="6">
            <b-card
                  title="Suche dein Lieblingscafé"
                  class="mb-2 mx-auto"
              >
                  <p>Wir möchten Cafés in der aktuellen besonderen Situation helfen. Du auch?...</p>

                  

                  <g-link to="/cafes"><b-button block variant="dark"><i class="far fa-heart text-light"></i> Kaffee trinken</b-button></g-link>
              </b-card>   
          </b-col>
          <b-col sm="6">
            <b-card
                  title="Du benötigst auch Hilfe?"
                  class="mb-2 mx-auto"
              >
                  <p> Melde dich bei uns für eine Anleitung, wie du auf die Plattform kommst...</p>

                  

                  <a href="mailto:espressofuerkoelle@gmail.com"><b-button block variant="dark"><i class="far fa-envelope text-light"></i> Schreibe uns</b-button></a>
              </b-card> 
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </Layout>
</template>

<script>
import Title from '../components/Title'

export default {
  metaInfo: {
    title: 'Wir lieben Cafés'
  },
  components: {
    Title
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}

@media (max-width: 768px){
  .w-50 {
    width: 100% !important;
  }
}
</style>
