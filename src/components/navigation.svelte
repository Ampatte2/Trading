
<Navbar small sliding={false}>

    <NavLeft>
      <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
    </NavLeft>
    {#if theview==="markets"}
    <NavTitle sliding><Link>Explore</Link></NavTitle>
    <NavTitle sliding><Link>Markets</Link></NavTitle>
    {:else}     
    <NavTitle sliding>{theview}</NavTitle>
    {/if}
    
    <NavRight>
      <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
    </NavRight>
    
</Navbar>

<script>
  import { f7, f7ready, Page, Navbar, NavLeft, NavTitle, NavRight, Link, NavTitleLarge, Block, BlockTitle, Col, Button, Row, Panel, View } from 'framework7-svelte';
  export let theview;
  
</script>
