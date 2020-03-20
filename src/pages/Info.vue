<template>
  <Layout>
    <Title title="Info" />
    <b-container class="m-5 w-50 mx-auto">
      
      <section>
        <h5>Welche Bezahlmöglichkeiten gibt es für meinen virtuellen Kaffee?</h5>
        <p>Du kannst ausschließlich über Paypal deinen virtuellen Kaffee bezahlen.</p>
      </section>
      
      <section>
        <h5>An wen geht meine Zahlung?</h5>
        <p>Wenn du deinen virtuellen Kaffee bezahlst, geht dein Geld unmittelbar auf das PayPal-Konto des Café-Inhabers. Es gibt keine Umwege und keine Weiterleitung durch die Organisatoren.</p>
      </section>
      
      <section>
        <h5>Gibt es Gebühren oder sonstige Kosten, die von dem Kaffee-Kaufpreis abgehen?</h5>
        <p>Wir sind eine Non-Profit-Aktion. Der von dir gewählte Betrag geht zu 100 Prozent und unmittelbar via PayPal an die Inhaber deines Lieblingscafés. Es fallen lediglich die PayPal-Transaktionskosten an.</p>
      </section>
      
      <section>
        <h5>Kann ich eine Spendenquittung bekommen?</h5>
        <p>Wir sind eine kleine, temporäre und solidarische Aktion. Die Organisatoren sind jedoch Privatleute und keine gemeinnützige Organisation und besitzen dementsprechend auch keinen Freistellungsbescheid über eine Gemeinnützigkeit vom Finanzamt. Wir können daher keine Spendenquittungen ausstellen.</p>
      </section>
      
      <section>
        <h5>Mein Lieblingscafé ist noch nicht bei euch zu finden, was kann ich tun?</h5>
        <p>Schreib uns unbedingt eine Nachricht an espressofuerkoelle@gmail.com mit dem Namen und insbesondere den Kontaktdaten der Inhaber.</p>
      </section>
      
      <section>
        <h5>Bekomme ich für meine Zahlung eine Gegenleistung?</h5>
        <p>Unsere Idee ist der Erwerb eines rein virtuellen Kaffees als solidarische Aktion. Die Inhaber können euch jedoch individuell einen Gutschein für einen tatsächlichen Kaffee anbieten. Ob dies der Fall ist, seht ihr in dem Info-Text auf der PayPal-Seite eures Cafés, auf die ihr zum Bezahlen weitergeleitet werdet.</p>
      </section>

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
section {
  margin: 6% 0;
}
div.w-50 {
  width: 100% !important    ;
}
</style>
