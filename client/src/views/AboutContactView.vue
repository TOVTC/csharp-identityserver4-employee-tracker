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
export default {
    data: () => ({
        valid: false,
        name: '',
        email: '',
        message: '',
        about: "At our company, imagination takes form and creativity knows no bounds. We are a dynamic and innovative creative agency committed to transforming visions into vibrant, tangible realities. We are here to infuse your brand, project, or campaign with the kind of creativity that leaves a lasting impression. Our diverse team of visionaries, artists, strategists, and storytellers is united by a common goal: to craft exceptional experiences and narratives that captivate, inspire, and engage.\r\n\r\nWhether you're a startup seeking an identity or an established brand looking to refresh, we're here to turn your aspirations into a vibrant mosaic of success. Join us, and together, we'll bring your vision to life, one piece at a time. Your vision is our mission, and we're excited to explore the limitless possibilities with you.",
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
                }
            }
        }
}
</script>

<style scoped>
.line-breaks {
    white-space: pre-wrap
}
</style>