<template>
  <nav
    class="navbar fixed-top navbar-expand-lg navbar-dark py-3 d-flex justify-content-between align-items-center header-transparent scroll-behavior: smooth"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="https://i.postimg.cc/Kj1NTJbn/Saliwa-removebg-preview.png"
          alt=""
          width="140"
          height="150"
          class="d-inline-block align-text-top"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link mx-2 active" aria-current="page" to="/"
              >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-2" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-2" to="/products">Catalogue</router-link>
          </li>
          <li class="nav-item">
          <router-link type="button" class="btn btn-light" to="/login">Login</router-link>
        </li>
         <li class="nav-item">
          <router-link type="button" class="btn btn-light" to="register">Register</router-link>
        </li>
      </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
#brand {
  margin-left: 5%;
}
.navbar-nav{
  margin-top: ;
}
#Nav-direct {
  margin-left: 20%;
  margin-bottom: 8%;
  color: white;
}
</style>