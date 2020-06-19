
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

  <Navigation theview="watchlists"></Navigation>
  
      
      <div class="lrg-itm">
        <div class="banner">
        <Link iconIos="f7:swap_vert" iconAurora="f7:swap_vert" iconMd="material:swap_vert" style="margin:2px;">Symbol</Link>
        <Link iconIos="f7:swap_vert" iconAurora="f7:swap_vert" iconMd="material:swap_vert" style="margin:2px;">Change</Link>
        </div>
        <div class="watchlists">
        {#each watchlist as item, i}
          <div class="banner">
          <h3>{item.name}</h3>
          <h3>{item.symbol}</h3>
          <LineChart queryData={dummy.data} money="USD" type="btc_prices" wdth="75px" hgth="30px" index={i}/>
          <h3>{item.change}</h3>
          <h3>{item.value}</h3>
          </div>
        {/each}

        </div>
        <Link iconIos="f7:plus" iconAurora="f7:plus" iconMd="f7:plus" popupOpen="#my-popup" style="margin-left:5vw;">Add Symbol</Link>        
      </div>
      

</Page>
<script>
 
  import { Page, Navbar, NavLeft, NavTitle, NavRight, Link, NavTitleLarge, Block, BlockTitle, Row, Col, View, Popup, Button,List, ListInput, ListItem, Range, Toggle} from 'framework7-svelte';
  import {auth, googleProvider, db} from "../js/firebase.js";
  import Navigation from "../components/navigation.svelte"
  import LineChart from "../components/line-chart.svelte"
  import dummy from '../js/dummy-data.js'
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
  let watchlist = [{name:"NASDAQ", symbol:"IXIC", chart:dummy.data, change: "0.2%", value:1200 }, {name:"NASDAQ", symbol:"IXIC", chart:dummy.data, change: "0.2%", value:1200 }, {name:"NASDAQ", symbol:"IXIC", chart:dummy.data, change: "0.2%", value:1200 }]

  console.log(dummy.data)
</script>

<style>

.watchlists{
  
}

.banner{
  
  justify-content: space-between;
  display:flex;
  flex-direction: row;
  width:90vw;
  margin:auto;
  height:5vh;
}

</style>
