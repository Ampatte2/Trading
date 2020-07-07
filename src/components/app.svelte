<App params={ f7params } >

  <!-- Left panel with cover effect-->
  
  <Panels></Panels>
  
  <!-- Your main view, should have "view-main" class -->
  <View main class="safe-areas" url="/" />
  

  <!-- Popup -->
  <Popup id="my-popup">
    <View>
      <Page>
        <Navbar title="Popup">
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>
        <Block>
          <p>Content is Here</p>
        </Block>
      </Page>
    </View>
  </Popup>

  <LoginScreen id="my-login-screen" >
    <View>
      <Page loginScreen>
        
        {#if !register}
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List form>
          <ListInput
            type="text"
            name="email"
            placeholder="Your email"
            value={email}
            onInput={(e) => email = e.target.value}
          />
          <ListInput
            type="password"
            name="password"
            placeholder="Your password"
            value={password}
            onInput={(e) => password = e.target.value}
          />
        </List>
        {#if error}
        <List>
        <ListItem>{error}</ListItem>
        </List>
        {/if}   
        <List>
          <ListButton title="Sign In" onClick={() => userHandler("login")} />
          <ListButton title="Sign Up" onClick={() => register=!register} />
        </List>
        {:else}
        <LoginScreenTitle>Register</LoginScreenTitle>
        <List form>
          <ListInput
            type="text"
            name="email"
            placeholder="Your email"
            value={email}
            onInput={(e) => email = e.target.value}
          />
          <ListInput
            type="password"
            name="password"
            placeholder="Your password"
            value={password}
            onInput={(e) => password = e.target.value}
          />
          <ListInput
            type="password"
            name="repeatePassword"
            placeholder="Repeat password"
            value={repeatPassword}
            onInput={(e) => repeatPassword = e.target.value}
          />
        </List>
         {#if error}
        <List>
        <ListItem>{error}</ListItem>
        </List>
        {/if}   
        <List>
          <ListButton title="Register" onClick={() => userHandler("register")} />
          <ListButton title="Sign In" onClick={() => register=!register} />
        </List>
        {/if}
             
        
        <BlockFooter>
          Some text about login information.<br />Click "Sign In" to close Login Screen
        </BlockFooter>
      </Page>
    </View>
  </LoginScreen>
</App>
<script>
  import { onMount } from 'svelte';
  import {f7,f7ready,App,Button,Panel,Views,View,
    Popup,Page,Navbar,Toolbar,NavRight,
    Link,Block,BlockTitle,LoginScreen,
    LoginScreenTitle,List,ListItem,
    ListInput,ListButton,BlockFooter} from 'framework7-svelte';
  import ApolloClient from 'apollo-boost';
  import {setClient} from 'svelte-apollo';
  import {auth, googleProvider, db} from "../js/firebase.js";
  import Panels from './panels'
  import routes from '../js/routes';
  let f7params = {
    name: 'Trading', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes: routes,
  };
  let email = '';
  let password = '';
  let repeatPassword = '';
  let register = false;
  let error = false;

  const client = new ApolloClient({
        uri: ``,
        onError: ({ networkError, graphQLErrors}) =>{
          console.log('graphQLErrors', graphQLErrors);
          console.log('networkError', networkError);
        },
        headers:{
          "x-hasura-access-key": process.env.HASURA_ACCESS_KEY
    }
  });
  setClient(client);

  let userHandler =(value)=> {
    if(value==="login"){
        auth.signInWithEmailAndPassword(email, password).catch(function(error) {
        return error;
      }).then(res=>{
        if(res.code){
          error = res.message
        }else{
          error = false;
          f7.loginScreen.close();
        }
      })
    }
    if(value==="register"){
      auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        return error;
      }).then(res=>{
        if(res.code){
          error = res.message
        }else{
          error = false;
          f7.loginScreen.close();
        }
      })
    }
  }
  
      // Call F7 APIs here
  onMount(() => {
    let options = {
      method: 'POST',
      headers: {
      'Authorization': 'Bearer T814KCp6NnfiChe8Nc1LutkhaJqG',
      'Accept': 'application/json'
      }
    }
    //let socket = new WebSocket("wss://ws.tradier.com/v1/");
    //socket.on("open", function open(){
     // console.log("Connected, sending subscription commands...")
      //socket.send()
    //})
  })
</script>