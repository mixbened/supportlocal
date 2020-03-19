<template>
  <Layout>
    <Title title="Info" />
    <b-container class="m-5">
      <h5>Welche Bezahlmöglichkeiten gibt es für meinen virtuellen Kaffee?</h5>
      <p>Du kannst ausschließlich über Paypal deinen virtuellen Kaffee bezahlen.</p>

      <h5>An wen geht meine Zahlung?</h5>
      <p>Wenn du deinen virtuellen Kaffee bezahlst, geht dein Geld unmittelbar auf das Paypal-Konto der Café-Inhaber. Keine Umwege.</p>

      <h5>Gibt es Gebühren oder sonstige Kosten, die von dem Kaffee-Kaufpreis abgehen?</h5>
      <p>Nein, der von dir gewählte Betrag geht zu 100 Prozent und unmittelbar via Paypal an die Inhaber deines Lieblingscafés.</p>

      <h5>Kann ich eine Spendenquittung bekommen?</h5>
      <p>Wir sind eine kleine, temporäre und solidarische Aktion. Die Organisatoren sind jedoch Privatleute und keine gemeinnützige Organisation und besitzen dementsprechend auch keinen Freistellungsbescheid über eine Gemeinnützigkeit vom Finanzamt. Wir können daher keine Spendenquittungen ausstellen.</p>

      <h5>Mein Lieblingscafé ist noch nicht bei euch zu finden, was kann ich tun?</h5>
      <p>Schreib uns unbedingt eine Nachricht an […] mit dem Namen und insbesondere den Kontaktdaten der Inhaber. Oder noch besser: Kontaktiere die Inhaber direkt und bitte sie, sich bei uns zu melden.</p>

    </b-container>
  </Layout>
</template>

<script>
import Title from '../components/Title'

export default {
  metaInfo: {
    title: 'Support Your Local - Info'
  },
  components: {
    Title
  }
}
</script>

<style lang="scss" scoped>
</style>
