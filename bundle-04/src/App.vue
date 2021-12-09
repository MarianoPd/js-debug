<template>
    <div id="app">
        <!-- changedAuthor e changedGenere erano scritti diversamente che dall'Header  -->
        <Header :genres="genresList" :authors="authorsList" @changedGenere="startGenreSearch" @changedAuthor="startAuthorSearch" />

        <Main :selectedGenre="genreToSearch" :selectedAuthor="authorToSearch" @genresAndAuthorsReady="getGenresAndAuthorsList" />
    </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";

export default {
    name: "App",
    components: {
        Header,
        Main,
    },
    data() {
        return {
            genresList: [],
            authorsList: [],
            genreToSearch: "",
            authorToSearch: "",
        };
    },
    methods: {
        // riceve da main un oggetto con genres e authors e ne salva il risultato in data
        getGenresAndAuthorsList(allGenresAndAuthors) {
            //allGenresAndAuthors = {};   così si azzera cio che viene ricevuto da Main
            this.genresList = allGenresAndAuthors.genres;
            this.authorsList = allGenresAndAuthors.authors;
        },
        startGenreSearch(genreToSearch) {
            console.log(genreToSearch);
            //genreToSearch = "";  qui il dato ricevuto da Header viene azzerato
            this.genreToSearch = genreToSearch;
        },
        startAuthorSearch(authorToSearch) {
            console.log(authorToSearch);
            this.authorToSearch = authorToSearch;
        }
    },
};
</script>

<style lang="scss">
@import "./assets/styles/general";
</style>
