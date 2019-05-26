<template>
  <div class="newsletter-form-wrapper">
    <form class="newsletter-form m-auto" @submit.prevent="doSignUp">
      <div class="input-box relative">
        <input v-model="form.name" type="text" placeholder="Imię" :class="{error: !errors.name.valid}" required>
        <p v-if="!errors.name.valid" class="error-msg f-xs cl-gold bold align-left mt-5 mb-0">
          {{ errors.name.message }}
        </p>
      </div>
      <div class="input-box relative">
        <input v-model="form.email" type="email" placeholder="Adres e-mail" :class="{error: !errors.email.valid }" required>
        <p v-if="!errors.email.valid" class="error-msg f-xs cl-gold bold align-left mt-5 mb-0">
          {{ errors.email.message }}
        </p>
      </div>
      <button class="btn">
        Zapisz się
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewsletterForm',
  data() {
    return {
      form: {
        name: '',
        email: ''
      },
      errors: {
        name: {
          valid: true,
          message: 'Błąd w formacie imienia'
        },
        email: {
          valid: true,
          message: 'Niepoprawny format adresu e-mail'
        }
      },
      isSigningUp: false,
      showModal: false
    }
  },
  methods: {
    validateForm() {
      const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      const nameReg = /^[A-Za-z\s]+$/

      this.errors.email.valid = this.form.email !== '' && emailReg.test(this.form.email)
      this.errors.name.valid = this.form.name !== '' && nameReg.test(this.form.name)

      return this.errors.email.valid && this.errors.name.valid
    },
    doSignUp() {
      if (this.validateForm()) {
        this.isSigningUp = true

        const signMutation = `mutation SignPetition($input: SignPetitionInput!) {
            SignPetition(input: $input) {
              success
              fullErrorMessages
              sign {
                signerName
                signerEmail
              }
            }
          }`

        const variables = {
          input: {
            petitionGuid: '67a03754-918d-4131-adae-af21905368ec',
            signerName: this.form.name,
            signerEmail: this.form.email
          }
        }

        const req = this.$axios.$post('/graphql', {
          query: signMutation,
          variables: variables
        })

        req.then((resp) => {
          if (resp.data.SignPetition.success) {
            this.isSigningUp = false
            this.name = this.form.name
            this.form = {}
            this.showModal = true
            this.$emit('signedUp', true)
          } else {
            this.$emit('signedUp', false)
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/variables/colors.scss';

  .error {
    border: 2px solid map-get($colors, gold);
  }
</style>
