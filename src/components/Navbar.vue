<template>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo n1">Chat</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
          </ul>
        </div>
      </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    }
}
</script>

<style>
.n1{
    padding-left: 20px!important;
    font-family: 'Google Sans Display',Roboto,Arial,sans-serif!important;
    font-size: 2 rem!important;
    font-weight: 550!important;
    color: rgb(100, 255, 218)!important;
}
.nav-wrapper{
  background-color: rgb(10, 25, 47);
}

</style>