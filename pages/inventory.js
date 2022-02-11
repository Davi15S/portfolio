/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Inventory from '../components/Inventory'

function inventory({inventory}) {
    return(
        <Inventory inventory={inventory.descriptions} assets={inventory.assets}/>
    )
}

export async function getServerSideProps(context){
    const inventory = await fetch("http://steamcommunity.com/inventory/76561198302654445/730/2?l=english&count=5000").then(res => res.json())

    return{
        props:{
            inventory: inventory
        }
    }
}

export default inventory