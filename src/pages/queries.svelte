<div>
    {#await $getCrypto}
    <Block strong>
    <p>Loading</p>
    </Block>
    {:then data}
    <Block strong>
    {#if instrument==="btc_prices" || instrument === "eth_prices"}
    <Row>
    {#each options[instrument] as opt}
    <Col><Button on:click={()=>update(opt)}>{opt}</Button></Col>
    {/each}
    </Row>
    {:else}
    <div class="searchbar-backdrop"></div>
    <form class="searchbar" on:submit={(e)=>search(e)}>
    <div class="searchbar-inner">
        <div class="searchbar-input-wrap">
        <input type="search" placeholder="Search" bind:value={para}>
        <i class="searchbar-icon"></i>
        <span class="input-clear-button"></span>
        </div>
        <span class="searchbar-disable-button">Cancel</span>
    </div>
    </form>
    {/if}
    </Block>
    <Chart queryData={data.data} money={currency} type={inst}/>
    <Row style="width:50vw;margin:auto">
    <Button fill raised on:click={()=>next(-100)} disabled={index===0}>Previous 100 Days</Button>
    
    <Button fill raised on:click={()=>next(100)}>Next 100 Days</Button>
    </Row>
    {:catch e}
        {e}
    {/await}
    
</div>

<script>
    import {getClient, query, mutate} from 'svelte-apollo';
    import queries from "../js/queries"
    import Chart from "./chart.svelte"
    import {Page, Navbar, NavLeft, NavTitle, NavTitleLarge, NavRight, Link,
    Toolbar, Block, BlockTitle, List, ListItem, Row, Col, Button, Searchbar } from 'framework7-svelte';

    export let inst;

    let para = "";
    let index = 0;
    let instrument = inst;
    let options = {btc_prices:["USD", "CNY", "AUD", "EUR", "GBP", "JPY"], crypto_prices:["XBS"], eth_prices:["USD", "CNY", "AUD", "EUR", "GBP", "JPY"]};
    let currency = options[instrument][0]
    
    const client = getClient();
    
    function search(e){
        e.preventDefault();
        currency = para;
    }

    function update(value){
        currency = value;
    }

    function next(value){
        index+= value;
    }
    $: instrument = inst;
    $: currency = options[instrument][0];
    $: getCrypto = query(client, {query: queries[instrument], variables:{currency, index}});
    $: getCrypto.refetch({currency, index});

</script>

