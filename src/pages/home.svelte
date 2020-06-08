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
  <BlockTitle>Navigation</BlockTitle>
  <List>
    <ListItem link="/about/" title="About"/>
    <ListItem link="/form/" title="Form"/>
  </List>
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

  

  

  <BlockTitle>Panels</BlockTitle>
  <Block strong>
    <Row>
      <Col width="50">
        <Button fill raised panelOpen="left">Left Panel</Button>
      </Col>
      <Col width="50">
        <Button fill raised panelOpen="right">Right Panel</Button>
      </Col>
    </Row>
  </Block>

  
</Page>

<script>
  import {
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

  import ApolloClient from 'apollo-boost';
  import {setClient} from 'svelte-apollo';
  import Queries from "./queries.svelte";
  
  let instrument = "btc_prices";

  const client = new ApolloClient({
		uri: `http://157.245.191.138:8080/v1alpha1/graphql`,
		onError: ({ networkError, graphQLErrors}) =>{
			console.log('graphQLErrors', graphQLErrors);
			console.log('networkError', networkError);
		},
		headers:{
			"x-hasura-access-key": "Veryverysecret123"
		}
	});

  setClient(client);

  let next =(value)=>{
    instrument = value;
  }

</script>