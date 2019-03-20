<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href>
            <span data-feather="home"></span>
            <router-link to="/">Dashboard</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href>
            <span data-feather="trending-up"></span>
            <router-link to="/finanzen">Finanzen</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href>
            <span data-feather="users"></span>
            <router-link to="/mitarbeiter">Mitarbeiter</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href>
            <span data-feather="shopping-cart"></span>
            <router-link to="/kunden">Kunden</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href>
            <span data-feather="globe"></span>
            <router-link to="/konkurrenz">Konkurrenz</router-link>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style>
.sidebar {
  /*position: fixed;*/
  float: left;
  top: 0;
  bottom: 0;
  left: 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

.sidebar-sticky {
  /*position: relative;*/
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: hidden; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}
</style>

