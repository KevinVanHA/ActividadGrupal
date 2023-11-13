<template>
  <nav class="navbar navbar-expand-md navbar-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand text-light" routerLink="inicio">Odontologia</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link active" aria-current="page">Inicio</router-link>
          <router-link to="/nosotros" class="nav-link active">Nosotros</router-link>
          <router-link to="/servicios" class="nav-link active">Servicios</router-link>
          <router-link to="/blog" class="nav-link active">Blog</router-link>
          <router-link to="/contactos" class="nav-link active">Contactos</router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>
