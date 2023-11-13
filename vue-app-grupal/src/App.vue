<template>
  <nav class="navbar navbar-expand-md navbar-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand text-light" routerLink="inicio">Odonto</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        <div class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link to="/" class="nav-link active" aria-current="page">Inicio</router-link>
          <router-link to="/nosotros" class="nav-link active">Nosotros</router-link>
          <router-link to="/servicios" class="nav-link active">Servicios</router-link>
          <router-link to="/blog" class="nav-link active">Blog</router-link>
          <router-link to="/contactos" class="nav-link active">Contactos</router-link>
        </div>

      </div>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-success" type="submit">Buscar</button>
      </form>
    </div>
  </nav>
  <router-view />
  <div class="bg-primary">
    <footer class="container-fluid text-bg-primary mt-5 text-center">
      Odonto Advance ©
    </footer>
  </div>
</template>
