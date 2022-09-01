<template>
  <nav
    class="navbar fixed-top navbar-expand-lg navbar-dark py-3 d-flex justify-content-between align-items-center header-transparent scroll-behavior: smooth"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="https://i.postimg.cc/Kj1NTJbn/Saliwa-removebg-preview.png"
          alt=""
          width="40"
          height="40"
          class="d-inline-block align-text-top"
        />
      </a>
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
            <a class="nav-link mx-2 active" aria-current="page" href="#landing"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#testimonials">Testimonials</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#resume">Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#contact">Contact</a>
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
#Nav-direct {
  margin-left: 20%;
  margin-bottom: 8%;
  color: white;
}
</style>