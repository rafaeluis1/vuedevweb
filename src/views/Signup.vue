<template>
  <v-app>
    <v-form ref="form" @submit.prevent="submit">
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.first"
              :rules="rules.name"
              color="purple darken-2"
              label="First name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.last"
              :rules="rules.name"
              color="blue darken-2"
              label="Last name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="10" sm="4">
            <v-slider
              v-model="form.age"
              :rules="rules.age"
              color="orange"
              label="Age"
              hint="Be honest"
              min="1"
              max="100"
              thumb-label
            ></v-slider>
          </v-col>
          <v-col cols="10" sm="4">
            <v-autocomplete
              v-model="form.country"
              clearable
              :rules="rules.country"
              :items="country"
              label="Country"
              required
            ></v-autocomplete>
          </v-col>
          <v-col cols="10" sm="4">
            <v-autocomplete
              v-model="form.gender"
              clearable
              :rules="rules.gender"
              :items="gender"
              label="Gender"
              required
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn text @click="resetForm"> Cancel </v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="!formIsValid" text color="primary" type="submit">
          Register
        </v-btn>
      </v-card-actions>
      <v-spacer> </v-spacer>
    </v-form>
    <v-container>
      <h3>TOTAL DE CADASTROS: {{ countperson }}</h3>
    </v-container>

    <v-container>
      <v-data-table
        :headers="headers"
        :items="peoples"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    const defaultForm = Object.freeze({
      first: "",
      last: "",
      age: null,
      country: "",
      gender: "",
    });

    return {
      headers: [
        { text: "name", value: "name" },
        { text: "idade", value: "age" },
        { text: "país", value: "country" },
        { text: "sexo", value: "gender" },
      ],
      form: Object.assign({}, defaultForm),
      rules: {
        age: [(val) => (val > 10 && val < 90) || `I don't believe you!`],
        name: [(val) => (val || "").length > 0 || "This field is required"],
        country: [(val) => (val || "").length > 0 || "This field is required"],
        gender: [(val) => (val || "").length > 0 || "This field is required"],
      },
      conditions: false,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
      snackbar: false,
      gender: ["Male", "Female", "I don't want to inform"],
      country: [
        "Afeganistão",
        "África do Sul",
        "Albânia",
        "Alemanha",
        "Andorra",
        "Angola",
        "Antiga e Barbuda",
        "Arábia Saudita",
        "Argélia",
        "Argentina",
        "Arménia",
        "Austrália",
        "Áustria",
        "Azerbaijão",
        "Bahamas",
        "Bangladexe",
        "Barbados",
        "Barém",
        "Bélgica",
        "Belize",
        "Benim",
        "Bielorrússia",
        "Bolívia",
        "Bósnia e Herzegovina",
        "Botsuana",
        "Brasil",
        "Brunei",
        "Bulgária",
        "Burquina Faso",
        "Burúndi",
        "Butão",
        "Cabo Verde",
        "Camarões",
        "Camboja",
        "Canadá",
        "Catar",
        "Cazaquistão",
        "Chade",
        "Chile",
        "China",
        "Chipre",
        "Colômbia",
        "Comores",
        "Congo-Brazzaville",
        "Coreia do Norte",
        "Coreia do Sul",
        "Cosovo",
        "Costa do Marfim",
        "Costa Rica",
        "Croácia",
        "Cuaite",
        "Cuba",
        "Dinamarca",
        "Dominica",
        "Egito",
        "Emirados Árabes Unidos",
        "Equador",
        "Eritreia",
        "Eslováquia",
        "Eslovénia",
        "Espanha",
        "Essuatíni",
        "Estado da Palestina",
        "Estados Unidos",
        "Estónia",
        "Etiópia",
        "Fiji",
        "Filipinas",
        "Finlândia",
        "França",
        "Gabão",
        "Gâmbia",
        "Gana",
        "Geórgia",
        "Granada",
        "Grécia",
        "Guatemala",
        "Guiana",
        "Guiné",
        "Guiné Equatorial",
        "Guiné-Bissau",
        "Haiti",
        "Honduras",
        "Hungria",
        "Iémen",
        "Ilhas Marechal",
        "Índia",
        "Indonésia",
        "Irão",
        "Iraque",
        "Irlanda",
        "Islândia",
        "Israel",
        "Itália",
        "Jamaica",
        "Japão",
        "Jibuti",
        "Jordânia",
        "Laus",
        "Lesoto",
        "Letónia",
        "Líbano",
        "Libéria",
        "Líbia",
        "Listenstaine",
        "Lituânia",
        "Luxemburgo",
        "Macedónia do Norte",
        "Madagáscar",
        "Malásia",
        "Maláui",
        "Maldivas",
        "Mali",
        "Malta",
        "Marrocos",
        "Maurícia",
        "Mauritânia",
        "México",
        "Mianmar",
        "Micronésia",
        "Moçambique",
        "Moldávia",
        "Mónaco",
        "Mongólia",
        "Montenegro",
        "Namíbia",
        "Nauru",
        "Nepal",
        "Nicarágua",
        "Níger",
        "Nigéria",
        "Noruega",
        "Nova Zelândia",
        "Omã",
        "Países Baixos",
        "Palau",
        "Panamá",
        "Papua Nova Guiné",
        "Paquistão",
        "Paraguai",
        "Peru",
        "Polónia",
        "Portugal",
        "Quénia",
        "Quirguistão",
        "Quiribáti",
        "Reino Unido",
        "República Centro-Africana",
        "República Checa",
        "República Democrática do Congo",
        "República Dominicana",
        "Roménia",
        "Ruanda",
        "Rússia",
        "Salomão",
        "Salvador",
        "Samoa",
        "Santa Lúcia",
        "São Cristóvão e Neves",
        "São Marinho",
        "São Tomé e Príncipe",
        "São Vicente e Granadinas",
        "Seicheles",
        "Senegal",
        "Serra Leoa",
        "Sérvia",
        "Singapura",
        "Síria",
        "Somália",
        "Sri Lanca",
        "Sudão",
        "Sudão do Sul",
        "Suécia",
        "Suíça",
        "Suriname",
        "Tailândia",
        "Taiuã",
        "Tajiquistão",
        "Tanzânia",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trindade e Tobago",
        "Tunísia",
        "Turcomenistão",
        "Turquia",
        "Tuvalu",
        "Ucrânia",
        "Uganda",
        "Uruguai",
        "Usbequistão",
        "Vanuatu",
        "Vaticano",
        "Venezuela",
        "Vietname",
        "Zâmbia",
        "Zimbábue",
      ],
      defaultForm,
    };
  },

  computed: {
    ...mapGetters(["countperson"]),

    formIsValid() {
      return (
        this.form.first &&
        this.form.last &&
        this.form.age &&
        this.form.country &&
        this.form.gender
      );
    },
    peoples() {
      return this.$store.state.peoples;
    },
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },

    submit() {
      this.$store.dispatch("submitPeople", {
        name: this.form.first + " " + this.form.last,
        age: this.form.age,
        country: this.form.country,
        gender: this.form.gender,
      });
      this.snackbar = true;
      this.resetForm();
    },
  },
};
</script>
