<Page name="home">
  <!-- Top Navbar -->
  <!-- Toolbar -->
  <Navigation></Navigation>
  <Toolbar bottom>
    <Link>Left Link</Link>
    <Link>Right Link</Link>
  </Toolbar>
  <!-- Page content -->
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
  import Navigation from "../components/navigation.svelte"
  import Queries from "./queries.svelte";
  import {auth, googleProvider, db} from "../js/firebase.js";
  console.log("home")
  let instrument = "btc_prices";
  
  let next =(value)=>{
    instrument = value;
  } 

</script>