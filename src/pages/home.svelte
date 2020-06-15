<Page name="home">
  <!-- Top Navbar -->
  <Navbar large sliding={false}>
    <NavLeft>
      <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
    </NavLeft>
    <NavTitle sliding>Trading</NavTitle>
    <NavRight>
      <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
    </NavRight>
    <NavTitleLarge style="text-align:center">Trading</NavTitleLarge>
  </Navbar>
  <!-- Toolbar -->


  <Toolbar bottom>
    <Link>Left Link</Link>
    <Link>Right Link</Link>
  </Toolbar>


  <!-- Page content -->

  <Block strong>
    <Row>
      <Col width="80"/>
      {#if authenticated}
      <Col width="10">
        <Button fill raised on:click={()=>signOut()}>Log Out</Button>
      </Col>
      {:else}
      <Col width="10">
        <Button fill raised loginScreenOpen="#my-login-screen">Login</Button>
      </Col>
      {/if}
    </Row>
  </Block>


  <Row>
  <Col>
  <Button fill raised on:click={()=>next("crypto_prices")}>CRYPTO</Button>
  </Col>
  <Col>
  <Button fill raised on:click={()=>next("btc_prices")}>BTC</Button>
  </Col>
  <Col>
  <Button fill raised on:click={()=>next("eth_prices")}>Eth</Button>
  </Col>
  </Row>
  <Queries inst={instrument}/>
  
  <Button on:click={()=> addToDB()}> Add to DB</Button>
</Page>

<script>
  import {
    f7,
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button
  } from 'framework7-svelte';

  import Queries from "./queries.svelte";
  import {auth, googleProvider, db} from "../js/firebase.js";

  let authenticated = false;
  let theUser;
  auth.onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    authenticated = true;
    theUser = user.uid;
    console.log(user.uid)
    // ...
  } else {
    // User is signed out.
    // ...
    console.log("signed out")
  }
});
  let signOut = () =>{
    auth.signOut().then(function(){
      authenticated = false;
      f7.dialog.alert("You are logged out");
    }).catch(function(error){
      console.log("error", error)
    })
  }

  let instrument = "btc_prices";
  
  let addToDB = () =>{
    //if the data is not in the collection push to collection if not exit #add
    db.collection("users").doc("mNFqAYKaxgUY7PWFuzhGnI2UwS02").get().then(res=>{
      let nextWatchlist = res.data().watchlist
      nextWatchlist.push("appl")
      db.collection("users").doc(theUser).update({watchlist: nextWatchlist})      
    })    
  }

  let next =(value)=>{
    instrument = value;
  }
  
  

</script>