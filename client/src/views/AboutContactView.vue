<template>
    <v-container>
        <v-row class="mt-5">
        <v-col
          class="ma-5"
          cols="12"
        >
          <h2 class="headline font-weight-bold mb-3">
            About Us
          </h2>

          <v-row class="ma-5">
            <p class="line-breaks">{{ about }}</p>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mb-5">
        <v-col
          class="ma-5"
          cols="12"
        >
          <h2 class="headline font-weight-bold mb-3">
            Contact
          </h2>

          <v-row class="ma-5">
            <v-card
            elevation="2"
            width="90%"
            >
              <v-form
                ref="form"
                v-model="valid"
                class="ma-5 pa-5"
                @submit.prevent="send"
              >
                <v-text-field
                  v-model="name"
                  :rules="rules.name"
                  label="Name"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="rules.email"
                  label="Email"
                  required
                ></v-text-field>

                <v-textarea
                    v-model="message"
                    name="input-7-1"
                    :counter="150"
                    :rules="rules.message"
                    :value="message"
                    label="Enter your message here"
                    required
                ></v-textarea>
  
                <v-btn
                  :disabled="!valid"
                  type="submit"
                  color="success"
                  class="mt-3 mr-4"
                >
                  Submit
                </v-btn>
              </v-form>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>
  
<script>
import TrackerService from '@/services/TrackerService.js'

export default {
    data: () => ({
        valid: false,
        name: '',
        email: '',
        message: '',
        about: '',
        source: 'https://www.renderforest.com/website-maker',
        rules: {
            name: [
                input => !!input || 'You must enter your name',
            ],
            email: [
                input => !!input || 'You must enter a valid email',
                input => /.+@.+\..+/.test(input) || 'You must enter a valid email',
            ],
            message: [
                input => !!input || 'You must enter a message',
                input => input.trim().length > 150 ? 'Message must be 150 characters or less' : true
            ]
        }
    }),
    methods: {
            send() {
                this.$refs.form.validate()
                if (this.valid) {
                    console.log("name: ", this.name)
                    console.log("email: ", this.email)
                    console.log("message: ", this.message)
                    this.name = ''
                    this.email = ''
                    this.message = ''
                    this.$refs.form.resetValidation()
                }
            }
        },
    async created() {
        let about = await TrackerService.getAbout()
        this.about = about.data.description
    }
}
</script>

<style scoped>
.line-breaks {
    white-space: pre-wrap
}
</style>