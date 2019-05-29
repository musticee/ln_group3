<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href>
            <font-awesome-icon class="fa-icon" icon="tachometer-alt"/>
            <router-link class="router-link" to="/">Dashboard</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href>
            <font-awesome-icon class="fa-icon" icon="chart-line"/>
            <router-link class="router-link" to="/finanzen">Finanzen</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href>
            <font-awesome-icon class="fa-icon" icon="address-card"/>
            <router-link class="router-link" to="/mitarbeiter">Mitarbeiter</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href>
            <font-awesome-icon class="fa-icon" icon="users"/>
            <router-link class="router-link" to="/kunden">Kunden</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href>
            <font-awesome-icon class="fa-icon" icon="globe-americas"/>
            <router-link class="router-link" to="/konkurrenz">Konkurrenz</router-link>
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

<style scoped>
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
  height: calc(100vh - 60px);
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

.sidebar .nav-link.active {
  color: #007bff;
}
a {
  color: #343a40;
}
.fa-icon {
  color: #343a40;
  margin-right: 5px;
}
.reports {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}
</style>

