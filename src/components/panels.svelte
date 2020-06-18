
<Panel left cover themeDark>
    <View>
      <Page>
        <Navbar title="Left Panel"/>
        <Block>But the other one ain't</Block>
      </Page>
    </View>
  </Panel>
  <Panel right reveal themeDark>
    <View>
      <Page>
        <Navbar title="Navigation"/>
        <Block>
        <Button fill raised on:click={()=>navigate("/")}>Home</Button>
        <br/>
        <Button fill raised on:click={()=>navigate("/form/")}>Form</Button>
        <br/>
        
      {#if authenticated}
        <Button fill raised on:click={()=>navigate("/dashboard/")}>Dashboard</Button>
        <br/>
        <Button fill raised on:click={()=>signOut()}>Log Out</Button>
        
      {:else}
        
        <Button fill raised loginScreenOpen="#my-login-screen">Login</Button>
        
      {/if}
       </Block>
      </Page>
    </View>
  </Panel>

<script>
  import { f7, f7ready, Page, Navbar, NavLeft, NavTitle, NavRight, Link, NavTitleLarge, Block, BlockTitle, Col, Button, Row, Panel, View } from 'framework7-svelte';
  import {auth, googleProvider, db} from "../js/firebase.js";
  let authenticated = false;
  let theUser;
  auth.onAuthStateChanged(function(user) {
  if (user) {
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    authenticated = true;
    theUser = user.uid;
  } else {
    console.log("signed out")
  }})
  let signOut = () =>{
    auth.signOut().then(function(){
      authenticated = false;
      f7.dialog.alert("You are logged out");
    }).catch(function(error){
      console.log("error", error)
    })
  }
  let navigate = (path) =>{
      f7ready((f7)=>{
          f7.views.main.router.navigate(path)
      })
      
  }
  console.log("bar")
  
</script>
