<template>
 <aside>
    <div id="headFrame"></div>
   <ul>
     <li><div>个人经历</div></li>
     <li><div>兴趣爱好</div></li>
     <li><div>背后的小故事</div></li>
   </ul>
 </aside>
</template>

<script>
  export default {
    name: "about"
  }
</script>

<style scoped>

  aside{
    background-color: rgb(217, 65, 65);
    width: 25%;
    height:40em;
    float: right;
    position: relative;
    display: flex;
  }
#headFrame{
  width: 7em;
  height: 7em;
 border: 0.2em solid rgb(128, 0, 0);
  border-radius: 50%;
  background: url("../../assets/image/he.jpg");
  background-size: cover;
  transition: all 2s linear;
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  margin: auto;
}
ul{
  text-align: center;
position: absolute;
  left: 0;
  right: 0;
  top: 33%;
  margin: auto;
}
li{
  list-style: none;
  margin-top: 30px;
}
  #headFrame:hover
  {
    transform: rotate(360deg);
  }
  li>div{
    width: 125px;
    left: 0;
    right: 0;
    margin: auto;
  }
  li>div:hover{
    border-bottom: 1px solid rgb(236, 224, 224);
  }
</style>
