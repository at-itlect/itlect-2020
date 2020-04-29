<template>
    <v-container>
        <v-navigation-drawer
            app
            temporary
            v-model="drawer"
        >
            <v-card class="mx-auto" max-width="300" tile>
                <v-list>
                    <v-subheader>MENU</v-subheader>
                    <v-list-item-group  color="primary">
                        <v-list-item
                            v-for="link in links"
                            :key="link.title"
                            :to="link.url"
                        >
                            <v-list-item-content>
                                <v-list-item-title v-text="link.title"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-navigation-drawer>

        <v-toolbar  dark color="primary" max-height="8%">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title><h1>{{message.textLogo}}</h1></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down my-auto">
                <v-btn
                    v-for="link in links"
                    :key="link.title"
                    :to="link.url"
                    text
                >
                    {{link.title}}
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-toolbar>
    </v-container>
</template>

<script>
  export default {
    name: 'Navigation',
    data: () => ({
      drawer: false,
      links: [
        {title: 'Home', url: '/'},
        {title: 'About', url: '/about'},
        {title: 'Login | Registration', url: '/auth'}
      ],
      message: {
            text: 'Навигация приложения',
            textLogo: 'A-Book'
        }
    }),
  }
</script>
