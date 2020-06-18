
<Popup id="my-popup">
    <View>
      <Page>
        <Navbar title={"Add " + theStock + " WatchList"}>
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>
        <Block>
         <List noHairlinesMd>
          <ListInput
            label="Name"
            type="text"
            placeholder="Your name"
          ></ListInput>

          <ListInput
            label="E-mail"
            type="email"
            placeholder="E-mail"
          ></ListInput>

          <ListInput
            label="URL"
            type="url"
            placeholder="URL"
          ></ListInput>

          <ListInput
            label="Password"
            type="password"
            placeholder="Password"
          ></ListInput>

          <ListInput
            label="Phone"
            type="tel"
            placeholder="Phone"
          ></ListInput>

          <ListInput
            label="Gender"
            type="select"
            >
            <option>Male</option>
            <option>Female</option>
          </ListInput>

          <ListInput
            label="Birth date"
            type="date"
            placeholder="Birth day"
            value="2014-04-30"
          ></ListInput>

          <ListItem
            title="Toggle"
          >
            <span slot="after">
              <Toggle />
            </span>
          </ListItem>

          <ListInput
            label="Range"
            input={false}
          >
            <span slot="input">
              <Range value={50} min={0} max={100} step={1} />
            </span>
          </ListInput>

          <ListInput
            type="textarea"
            label="Textarea"
            placeholder="Bio"
          ></ListInput>
          <ListInput
            type="textarea"
            label="Resizable"
            placeholder="Bio"
            resizable
          ></ListInput>
        </List>

        </Block>
      </Page>
    </View>
</Popup>
<Page>

  <Navigation></Navigation>
  <div class="parent">
      <div class="sml-itm">Prices</div>
      <div class="lrg-itm">
        <div class="banner">Daily Updates</div>
        <div class="chart"></div>
        <Button popupOpen="#my-popup">Hello</Button>
      </div>
      <div class="sml-itm">Watchlists</div>
  </div>
</Page>
<script>
 
  import { Page, Navbar, NavLeft, NavTitle, NavRight, Link, NavTitleLarge, Block, BlockTitle, Row, Col, View, Popup, Button,List, ListInput, ListItem, Range, Toggle} from 'framework7-svelte';
  import {auth, googleProvider, db} from "../js/firebase.js";
  import Navigation from "../components/navigation.svelte"
  let thevar= "watchlist";
  let theStock = "APPL"
  let dosomething = ()=>{
    thevar = "Doggo"
  }
  let addToDB = () =>{
    //if the data is not in the collection push to collection if not exit #add
    db.collection("users").doc("mNFqAYKaxgUY7PWFuzhGnI2UwS02").get().then(res=>{
      let nextWatchlist = res.data().watchlist
      nextWatchlist.push("appl")
      db.collection("users").doc(theUser).update({watchlist: nextWatchlist})      
    })    
  }

</script>

<style>
.parent{
  
  height:100vh;
  background-color:darkgrey;
  margin:none;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
}
.banner{
  background-color: darkslateblue;
  width:100%;
  height:10%
}
.chart{
  width:100%;
  height:50%;
  background-color:darkslateblue;
  margin-top:2%;
}
.sml-itm{
  width:15vw;
  height:100%;
  background-color: red;
}
.lrg-itm{
  width:65vw;
  background-color:green;
}
</style>
